import '../css/style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    Welcome
  </div>
`

setupCounter(document.querySelector('#counter'))
