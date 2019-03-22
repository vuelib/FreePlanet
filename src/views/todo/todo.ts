import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

import { IDrag, ITodo, ITodosState } from '../../model/index'
import { SingleTodo } from '../../components/todos/SingleTodo/index'

import { tools } from '../../store/Modules/tools'
import * as ApiTables from '../../store/Modules/ApiTables'

import { GlobalStore, Todos } from '@store'
import { UserStore } from '@store'

import { Getter } from 'vuex-class'

const namespace: string = 'Todos'

@Component({

  components: { SingleTodo },
  filters: {
    capitalize(value) {
      if (!value) {
        return ''
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
export default class Todo extends Vue {
  public $q: any
  public todotop: string = ''
  public todobottom: string = ''
  public polling = null
  public service: any
  public scrollable = true
  public categoryAtt: string = ''
  public dragname: string = 'first'

  public $refs: {
    single: SingleTodo[]
  }

  get tools() {
    return tools
  }

  get showtype() {
    return Todos.state.showtype
  }

  set showtype(value) {
    console.log('showtype', value)
    GlobalStore.mutations.setShowType(value)
  }

  get doneTodosCount() {
    return Todos.getters.doneTodosCount(this.categoryAtt)
  }

  get menuPopupConfigTodo() {
    return tools.menuPopupConfigTodo[UserStore.state.lang]
  }

  get listOptionShowTask() {
    return tools.listOptionShowTask[UserStore.state.lang]
  }

  get TodosCount() {
    return Todos.getters.TodosCount(this.categoryAtt)
  }

  @Getter('todos_dacompletare', { namespace })
  public todos_dacompletare: (state: ITodosState, category: string) => ITodo[]

  @Getter('todos_completati', { namespace })
  public todos_completati: (state: ITodosState, category: string) => ITodo[]

  @Watch('$route.params.category')
  public changecat() {
    this.categoryAtt = this.$route.params.category
  }

  public getmyid(id) {
    return 'row' + id
  }

  public showTask(field_value) {
    return field_value === tools.MenuAction.SHOW_TASK
  }

  public async onEnd(itemdragend) {
    await Todos.actions.swapElems(itemdragend)
  }

  public created() {
    const $service = this.$dragula.$service
    tools.dragula_option($service, this.dragname)

    $service.eventBus.$on('dragend', (args) => {

      const itemdragend: IDrag = {
        category: this.categoryAtt,
        newIndex: this.getElementIndex(args.el),
        oldIndex: this.getElementOldIndex(args.el)
      }

      this.onEnd(itemdragend)
    })

    $service.eventBus.$on('drag', (el, source) => {
      this.scrollable = false
    })
    $service.eventBus.$on('drop', (el, source) => {
      this.scrollable = true
    })

    this.load()
  }

  public mounted() {
    this.categoryAtt = this.$route.params.category

    tools.touchmove(this.scrollable)
  }

  public async load() {
    console.log('LOAD TODO....')
    this.categoryAtt = this.$route.params.category

    // Set last category selected
    localStorage.setItem(tools.localStorage.categorySel, this.categoryAtt)

    this.checkUpdate_everytime()
  }

  // Call to check if need to refresh
  public checkUpdate_everytime() {
    this.polling = setInterval(() => {
      this.checkUpdate()
    }, 60000)
  }

  public beforeDestroy() {
    clearInterval(this.polling)
  }

  public mydeleteItem(idobj: string) {
    // console.log('mydeleteItem', idobj)
    return Todos.actions.deleteItem({ cat: this.categoryAtt, idobj })
  }

  public insertTodo(atfirst: boolean = false) {
    let descr = this.todobottom.trim()
    if (atfirst) {
      descr = this.todotop.trim()
    }

    if (descr === '') {
      return
    }

    if (!tools.checkIfUserExist(this)) {
      return
    }

    const myobj: ITodo = {
      descr,
      category: this.categoryAtt
    }

    // empty the field
    if (atfirst) {
      this.todotop = ''
    }
    else {
      this.todobottom = ''
    }

    return Todos.actions.insertTodo({ myobj, atfirst })
  }

  public async updateitem({ myitem, field }) {
    console.log('calling MODIFY updateitem', myitem, field)

    const itemdragend: IDrag = {
      category: this.categoryAtt,
      field,
      idelemtochange: myitem._id,
      prioritychosen: myitem.priority,
      atfirst: false
    }

    await Todos.actions.swapElems(itemdragend)

    await Todos.actions.modify({ myitem, field })

  }

  public deselectAllRows(item: ITodo, check, onlythis: boolean = false) {
    // console.log('deselectAllRows : ', item)

    for (let i = 0; i < this.$refs.single.length; i++) {

      const contr = this.$refs.single[i] as SingleTodo
      // @ts-ignore
      const id = contr.itemtodo._id
      // Don't deselect the actual clicked!
      let des = false
      if (onlythis) {
        des = item._id === id
      } else {
        des = ((check && (item._id !== id)) || (!check))
      }
      if (des) {
        // @ts-ignore
        contr.deselectAndExitEdit()
      }
    }
  }

  public checkUpdate() {
    ApiTables.waitAndcheckPendingMsg()
  }

  private getElementIndex(el: any) {
    return [].slice.call(el.parentElement.children).indexOf(el)
  }

  private getElementOldIndex(el: any) {
    return parseInt(el.attributes.index.value, 10)
  }

}