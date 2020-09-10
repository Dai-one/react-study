import loadable from '@loadable/component'

//代码分割（也就是路由懒加载）
const TestJsx = loadable(()=>import('./study/TestJsx.js'))
const TestCondition = loadable(()=>import('./study/TestCondition.js'))
const TestProps = loadable(()=>import('./study/TestProps.js'))
const TestEvent = loadable(()=>import('./study/TestEvent.js'))
const TestLanguage = loadable(()=>import('./study/TestLanguage.js'))

// import TestList from './study/TestList'
// import TestForm from './study/TestForm'
// import TestLife from './study/TestLife'
// import TestLift from './study/TestLift'
// import TestComposition from './study/TestComposition';
// import TestContext from './study/TestContext';
// import TestHoc from './study/TestHoc'
// import TestFrag from './study/TestFrag'
// import TestHooks from './study/TestHooks'
//商品
const Good = loadable((()=>import('./good/Goods')))
const GoodDetail = loadable(()=>import('./good/Detail'))

const routes = [
  {id:1,path:'/jsx',component:TestJsx,text:'测试Jsx',icon:""},
  {id:2,path:'/props',component:TestProps,text:'props传值',icon:""},
  {id:3,path:'/event',component:TestEvent,text:'事件绑定',icon:""},
  {id:4,path:'/lang',component:TestLanguage,text:'语言选择',icon:""},
  {id:5,path:'/cond',component:TestCondition,text:'条件渲染',icon:""},
  {id:6,path:'/good',component:Good,text:'商品列表',icon:"",children:[
    {id:6-1,path:'/good/detail/:id/:name', //动态路由
    component:GoodDetail,text:'商品详情',icon:""}
  ]},
  
]

export default routes