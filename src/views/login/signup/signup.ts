import { Component, Vue, Prop } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { ErroriMongoDb } from '@/store/modules/user'

import { validationMixin } from 'vuelidate'
import { required, minValue } from 'vuelidate/lib/validators'
import { ISignupOptions, IUserState } from '@/model'
import { validations, TSignup } from './signup-validate'
// import './signup.scss'

// import {Loading, QSpinnerFacebook, QSpinnerGears} from 'quasar'

@Component({
  mixins: [validationMixin],
  name: 'Signup',
  // template: require('./signup.html'),
  validations: validations
})

export default class Signup extends Vue {
  myProperty: string = ''

  duplicate_email: boolean = false
  duplicate_username: boolean = false
  user: ISignupOptions = {
    email: process.env.TEST_EMAIL,
    username: process.env.TEST_USERNAME || '',
    password: process.env.TEST_PASSWORD,
    repeatPassword: process.env.TEST_PASSWORD
  }
  terms = true

  $v: any

  constructor() {
    super()
  }

  created() {

  }

  mounted() {
    if (this.$v) {
      this.$v.$touch()
    }
  }

  get allowSubmit() {

    let error = this.$v.signup.$error || this.$v.signup.$invalid
    return !error
  }

  /*
  validations: {
    isAsync: true,
    form: {
      email: {
        required, email,
        isUnique: value => {
          if (value === '') return true;
          return axios.get(process.env.MONGODB_HOST + '/email/' + value)
            .then(res => {
              return (res.status !== 200)
            }).catch((e) => {
              return true;
            })
        }
      },
      password: {required, minLength: minLength(8), maxLength: maxLength(20)},
      username: {
        required, minLength: minLength(6), maxLength: maxLength(20),
        isUnique: value => {
          if (value === '') return true;
          return axios.get(process.env.MONGODB_HOST + '/users/' + value)
            .then(res => {
              return (res.status !== 200)
            }).catch((e) => {
              return true;
            })
        }
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      },
      terms: {required},

    }
  }, */
  env() {
    return process.env
  }

  showNotif(msg: any) {
    this.$q.notify(msg)
  }

  /*
  errorMsg(cosa: string, item: string) {
    try {
      if (!item.$error) return ''
      if (item.$params.email && !item.email) return this.$t('reg.err.email')

      if (cosa === 'repeatpassword') {
        if (!item.sameAsPassword) {
          return this.$t('reg.err.sameaspassword')
        }
      }

      if (cosa === 'email') {
        //console.log("EMAIL " + item.isUnique);
        //console.log(item);
        if (!item.isUnique) return this.$t('reg.err.duplicate_email')
      } else if (cosa === 'username') {
        //console.log(item);
        if (!item.isUnique) return this.$t('reg.err.duplicate_username')
      }

      if (!item.required) return this.$t('reg.err.required')
      if (!item.minLength) return this.$t('reg.err.atleast') + ` ${item.$params.minLength.min} ` + this.$t('reg.err.char')
      if (!item.maxLength) return this.$t('reg.err.notmore') + ` ${item.$params.maxLength.max} ` + this.$t('reg.err.char')
      return ''
    } catch (error) {
      //console.log("ERR : " + error);
    }
  }

  checkErrors(riscode) {
    //console.log("RIS = " + riscode);
    if (riscode === ErroriMongoDb.DUPLICATE_EMAIL_ID) {
      this.showNotif(this.$t('reg.err.duplicate_email'))
    } else if (riscode === ErroriMongoDb.DUPLICATE_USERNAME_ID) {
      this.showNotif(this.$t('reg.err.duplicate_username'))
    } else if (riscode === ErroriMongoDb.OK) {
      this.$router.push('/')
    } else {
      this.showNotif("Errore num " + riscode)
    }

  }


  submit() {
    this.$v.user.$touch()

    this.duplicate_email = false
    this.duplicate_username = false

    if (!this.user.terms) {
      this.showNotif(this.$t('reg.err.terms'))
      return
    }

    if (this.v.user.$error) {
      this.showNotif(this.$t('reg.err.errore_generico'))
      return
    }

    this.$q.loading.show({ message: this.$t('reg.incorso') })

    console.log(this.user)
    UserModule.signup(this.user)
      .then((riscode) => {
        this.checkErrors(riscode)
        this.$q.loading.hide()
      }).catch(error => {
      console.log("ERROR = " + error)
      this.$q.loading.hide()
    })


    // ...
  }
  */
}
