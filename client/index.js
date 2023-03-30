import './promise-polyfill'
import { app } from './app'

global.Self = {hp: 10, score: 0};
global.Players = [];
global.Bullets = [];

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

app.$mount('#app')
