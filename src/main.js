import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// view ui
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)
app.use(ViewUIPlus)
app.mount('#app')

// createApp(App).mount('#app')
