//  引入组件

import {
  Aside,
  Button,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Header,
  Input,
  Main,
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
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
