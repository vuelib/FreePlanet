export interface ITodo {
  _id?: any,
  userId?: string
  category?: string
  descr?: string,
  priority?: number,
  completed?: boolean,
  created_at?: Date,
  modify_at?: Date,
  completed_at?: Date,
  expiring_at?: Date,
  enableExpiring?: boolean,
  id_prev?: string,
  modified?: boolean,
  pos?: number,
  order?: number,
  progress?: number
}

export interface IParamTodo {
  categorySel?: string
  checkPending?: boolean
  id?: string
  objtodo?: ITodo
  atfirst?: boolean
}

export interface IDrag {
  field?: string
  idelemtochange?: string
  prioritychosen?: number
  oldIndex?: number
  newIndex?: number
  category?: string
  id_proj?: string
  atfirst?: boolean
}

export interface ITodosState {
  showtype: number
  todos: {}
  categories: string[]
  // todos_changed: number
  reload_fromServer: number
  testpao: string
  insidePending: boolean
  visuLastCompleted: number
}
