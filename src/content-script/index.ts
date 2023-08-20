import './index.scss'

const src = chrome.runtime.getURL('src/content-script/iframe/index.html')

const iframe = new DOMParser().parseFromString(
  `<iframe class="crx-iframe" src="${src}"></iframe>`,
  'text/html'
).body.firstElementChild

if (iframe) {
  document.body?.append(iframe)
}

const script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', chrome.runtime.getURL('src/inject/index.js'))
document.documentElement.appendChild(script)

// const input = document.createElement('input')
// input.setAttribute('id', 'xxxxx')
// input.setAttribute('style', 'display:none')
// document.documentElement.appendChild(input)
