//  引入组件

import { Button, Form, FormItem, Input, Message, Notification, Table, TableColumn, Tag } from 'element-ui'
import Vue from 'vue'
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$notify = Notification

Vue.prototype.$message = Message
