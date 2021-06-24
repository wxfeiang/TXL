//  引入组件

import {
  Button,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Form,
  FormItem,
  Input,
  Message,
  Notification,
  Option,
  OptionGroup,
  Row,
  Select,
  Table,
  TableColumn,
  Tag,
} from 'element-ui'
import Vue from 'vue'
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Select)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
