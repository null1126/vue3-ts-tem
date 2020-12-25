
import {
  ElAlert
} from 'element-plus'

const element = {
  install: function (app:any) {
    app.use(ElAlert)
  }
}

export default element
