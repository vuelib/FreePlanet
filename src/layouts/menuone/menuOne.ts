import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import { GlobalStore } from '../../store/Modules'
import Component from 'vue-class-component'
import { static_data } from '../../db/static_data'
import { tools } from '../../store/Modules/tools'
import { IListRoutes } from '@src/model'
import { UserStore } from '@modules'

export default class MenuOne extends Vue {

  @Watch('$route.path')
  private modifroute() {
    Object.keys(this.getmenu).forEach((parentName) => {
      this.setParentVisibilityBasedOnRoute(this.getmenu[parentName])
    })
  }

  // get currentRoutePath() {
  //   return this.$route.path
  // }

  get tools() {
    return tools
  }

  get mythis() {
    return this
  }

  get getmenu() {
    return GlobalStore.getters.getmenu
  }

  public visumenu(elem: IListRoutes) {
    return (elem.onlyAdmin && UserStore.state.isAdmin) || (!elem.onlyAdmin)
  }

  public setParentVisibilityBasedOnRoute(parent) {
    parent.routes.forEach((item) => {
      if (this.$route.path === item.path) {
        parent.show = true
        return
      }
    })
  }

  public replaceUnderlineToSpace(text) {
    while (text.indexOf('_') !== -1) {
      text = text.replace('_', ' ')
    }
    return text
  }

  get static_data(){
    return static_data
  }

  public getroute(elem) {
    if (elem.idelem) {
      return tools.getUrlByTipoProj(elem.urlroute) + elem.idelem
    } else {
      return elem.path
    }

  }

}
