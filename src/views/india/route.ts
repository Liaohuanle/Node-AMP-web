import { RouterInterface } from '../../declare/index'

const a: RouterInterface = {
  path: 'India',
  isOnline: false,
  data: {},
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: ''
}

const b: RouterInterface = {
  path: 'India/English',
  isOnline: false,
  data: {},
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: ''
}

const c: RouterInterface = {
  path: 'India/termofuse',
  isOnline: true,
  isApi: true,
  data: {},
  cssSrc: '',
  containerSrc: './components/termofuser/termofuse-content',
  jsSrc: '',
  title: ''
}

const d: RouterInterface = {
  path: 'India/Hindi/rule',
  isOnline: false,
  data: {},
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: ''
}

const e: RouterInterface = {
  path: 'India/English/rule',
  isOnline: false,
  data: {},
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: ''
}

const f: RouterInterface = {
  path: 'India/fetchWinnerList',
  isOnline: false,
  data: {},
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: ''
}

export default [
  a,
  b,
  c,
  d,
  e,
  f
] as RouterInterface[]