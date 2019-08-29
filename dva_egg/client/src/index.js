import dva from 'dva';
import RouterView from '@/router';
import { createModel } from '@/store';
import "./assets/css/app.css"
const createBrowserHistory = require('history').createBrowserHistory;
const app = dva({
    history: createBrowserHistory()
})
createModel(app)
app.router(RouterView)
app.start('#root')