import { Component, Prop, Watch } from 'vue-property-decorator'

import { tools } from '../../store/Modules/tools'
import { toolsext } from '@src/store/Modules/toolsext'

import { QEditor } from 'quasar'
import { CMyEditor } from '../CMyEditor'
import MixinBase from '../../mixins/mixin-base'
import { fieldsTable } from '../../store/Modules/fieldsTable'
import { IColGridTable } from '../../model'
import { CMySelect } from '../CMySelect'

@Component({
  name: 'CMyFieldDb',
  components: { CMyEditor, CMySelect }
})

export default class CMyFieldDb extends MixinBase {
  @Prop({ required: true }) public title
  @Prop({ required: true }) public mykey: string
  @Prop({ required: true }) public type: number
  @Prop({ required: false, default: false }) public serv: boolean
  @Prop({ required: false, default: false }) public disable: boolean
  @Prop({ required: false, default: '' }) public jointable: string

  public $t
  public myvalue = ''
  public col: IColGridTable = { name: 'test' }
  public canEdit: boolean = true

  public created() {
    this.myvalue = this.getValDb(this.mykey, this.serv)
    this.col.jointable = this.jointable
    this.col.fieldtype = this.type
    this.col.label = this.title
    // console.log('created', this.myvalue)
  }

  public visuValByType(val) {
    if (this.col.fieldtype === tools.FieldType.date) {
      if (val === undefined) {
        return '[]'
      } else {
        return tools.getstrDateTime(val)
      }
    } else if (this.col.fieldtype === tools.FieldType.boolean) {
      return (val) ? this.$t('dialog.yes') : this.$t('dialog.no')
    } else if (this.col.fieldtype === tools.FieldType.binary) {
      if (val === undefined)
        return '[---]'
      else
        return fieldsTable.getArrStrByValueBinary(this, this.col, val)
    } else if (this.col.fieldtype === tools.FieldType.select) {
      if (val === undefined)
        return '[---]'
      else
        return fieldsTable.getValueByTable(this.col, val)
    } else if (this.col.fieldtype === tools.FieldType.multiselect) {
      if (val === undefined)
        return '[---]'
      else
        return fieldsTable.getMultiValueByTable(this.col, val)
    } else if (this.col.fieldtype === tools.FieldType.password) {
      if (val === undefined)
        return '[---]'
      else
        return '***************'
    } else {
      if (val === undefined)
        return '-'
      else if (val === '') {
        return '-'
      } else {
        let mystr = tools.firstchars(val, 5000)
        if (val) {
          if (val.length > 5000)
            mystr += '...'
        } else {
          return val
        }
        return mystr
      }
    }
  }

  get mycl() {
    if (this.disable) {
      return 'cldisable'
    }
  }

  get myvalprinted() {
    return this.visuValByType(this.myvalue)
  }

  public savefield(value, initialval) {
    this.myvalue = value
    this.setValDb(this.mykey, this.myvalue, this.type, this.serv)
  }

}
