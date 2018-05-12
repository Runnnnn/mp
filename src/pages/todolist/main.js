import Vue from 'vue'
import App from './index'
import { Button } from 'element-ui';

Vue.use(Button)

const app = new Vue(App)
app.$mount()
export default {
    config: {
        navigationBarTitleText: 'TODO list'
    },
}
  