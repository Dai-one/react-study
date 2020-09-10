import React from 'react';
import 'antd/dist/antd.css';
// import TestJsx from './views/TestJsx'
// import TestProps from './views/TestProps'
// import TestEvent from './views/TestEvent'
// import TestLanguage from './views/TestLanguage'
// import TestCondition from './views/TestCondition'
// import TestList from './views/TestList'
// import TestForm from './views/TestForm'
// import TestLife from './views/TestLife'
// import { Checkbox } from './components'
// import TestLift from './views/TestLift'
// import TestComposition from './views/TestComposition';
// import TestContext from './views/TestContext';
// import ThemeCtx from './utils/theme'
// import TestHoc from './views/TestHoc'
// import TestFrag from './views/TestFrag'
// import TestHooks from './views/TestHooks'
import { Layout } from './components'
import { HashRouter/* , BrowserRouter */ } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

// export default class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>测试jsx</h1>
//         <TestJsx />
//       </div>
//     )
//   }
// }
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // 换皮肤
      theme:{
        light: {
          color: '#000000',
          background: '#eeeeee',
        },
        dark: {
          color: '#ffffff',
          background: '#222222',
        },
      }
    }
  }
  render(){
    return(
      // <TestJsx />
      // <TestProps />
      // <TestEvent />
      // <TestLanguage />
      // <TestCondition />
      // <TestList />
      // <TestForm />
      // <TestLife />
      // <Checkbox />
      // <TestLift />
      // <TestComposition />
      // <ThemeCtx.Provider value={this.state.theme.dark}>
      //   <TestContext />
      // </ThemeCtx.Provider>
      // <TestHoc/>
      // <TestFrag />
      // <TestHooks />
      <HashRouter>
        <Layout />
      </HashRouter>
  
    )
  }
  
}
