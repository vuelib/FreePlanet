import axios, { AxiosInstance, AxiosPromise, AxiosResponse, AxiosInterceptorManager } from 'axios'
// import LoginModule from '../Modules/Auth/LoginStore'
import router from '@router'
import {clone} from 'lodash'
import * as Types from './ApiTypes'
import { GlobalStore, UserStore } from '@store'
import { rescodes } from '@src/store/Modules/rescodes'
import { serv_constants } from '@src/store/Modules/serv_constants'

export const API_URL = process.env.MONGODB_HOST
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json'
  }
})

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error.response.status)
    console.log('Request Error: ', error.response)
    return Promise.reject(error)
  }
)

export const addAuthHeaders = () => {
  // axiosInstance.defaults.headers.Authorization = `Bearer ${LoginModule.state.userInfos.userToken}`
}

export const removeAuthHeaders = () => {
  delete axiosInstance.defaults.headers.Authorization
}

async function Request(type: string, path: string, payload: any, setAuthToken?: boolean): Promise<Types.AxiosSuccess | Types.AxiosError> {
  let ricevuto = false
  try {
    console.log(`Axios Request [${type}]:`, axiosInstance.defaults)
    let response: AxiosResponse
    if (type === 'post' || type === 'put') {
      response = await axiosInstance[type](path, payload, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth': UserStore.state.x_auth_token
        }
      })
      ricevuto = true
      // console.log(new Types.AxiosSuccess(response.data, response.status))

      const setAuthToken = (path === '/updatepwd')

      if (response.status === 200) {
        let x_auth_token = ''
        try {
          if (setAuthToken || (path === '/users/login')) {
            x_auth_token = String(response.headers['x-auth'])

            if (x_auth_token === '') {
              UserStore.mutations.setServerCode(rescodes.ERR_AUTHENTICATION)
            }
            if (setAuthToken) {
              UserStore.mutations.UpdatePwd(x_auth_token)
              localStorage.setItem(rescodes.localStorage.token, x_auth_token)
            }

            UserStore.mutations.setAuth(x_auth_token)
            localStorage.setItem(rescodes.localStorage.token, x_auth_token)
          }

          GlobalStore.mutations.setStateConnection(ricevuto ? 'online' : 'offline')
          UserStore.mutations.setServerCode(rescodes.OK)
        } catch (e) {
          if (setAuthToken) {
            UserStore.mutations.setServerCode(rescodes.ERR_AUTHENTICATION)
            UserStore.mutations.setAuth('')
          }
          GlobalStore.mutations.setStateConnection(ricevuto ? 'online' : 'offline')
          return Promise.reject(new Types.AxiosError(serv_constants.RIS_CODE__HTTP_FORBIDDEN_INVALID_TOKEN, null, rescodes.ERR_AUTHENTICATION))
        }
      }

      return new Types.AxiosSuccess(response.data, response.status)
    } else if (type === 'get' || type === 'delete') {
      // @ts-ignore
      response = await axiosInstance[type](path, {
        params: payload,
        headers: {'Content-Type': 'application/json',
          'x-auth': UserStore.state.x_auth_token
        }
      })
      return new Types.AxiosSuccess(response.data, response.status)
    } else if (type === 'postFormData') {
      response = await axiosInstance.post(path, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth': UserStore.state.x_auth_token
        }
      })
      return new Types.AxiosSuccess(response.data, response.status)
    }
  }
  catch (error) {
    if (process.env.DEV) {
      console.log('ERROR using', path, error, 'ricevuto=', ricevuto)
    }
    if (!ricevuto) {
      UserStore.mutations.setServerCode(rescodes.ERR_SERVERFETCH)
    } else {
      UserStore.mutations.setServerCode(rescodes.ERR_GENERICO)
    }

    if (error.response) {
      return Promise.reject(new Types.AxiosError(error.response.status, error.response.data))
    } else {
      return Promise.reject(new Types.AxiosError(0))
    }
  }
}

export default Request
