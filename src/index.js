/**
 * Created by dell on 2017/3/7.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute, applyRouterMiddleware} from 'react-router';
import {useScroll} from 'react-router-scroll'
import store from './redux/store'
import {connect,Provider} from 'react-redux'
import { createStore } from 'redux'
import {increaseAction} from './redux/actions'


import './css/common.scss';

import Page1 from './pages/page1/index'
import Page2, {IndexPage2} from './pages/page2/index'
import Page3 from './pages/page3/index'


class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          app is my life!
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <IndexLink to="/page1" activeClassName="active">Page1</IndexLink>
          <IndexLink to="/page2" activeClassName="active">Page2</IndexLink>
          <IndexLink to="/page2/page3" activeClassName="active">Page3</IndexLink>
        </div>
        <Counter />
        {this.props.children}
      </div>
    )
  }
}


// React component
class Counter extends Component {
  handleClick(e){
    // this.props.onIncreaseClick();
    this.props.dispatch(increaseAction());
  }
  render() {
    return (
      <div>
        <span>{this.props.count}</span>
        <button onClick={e=>this.handleClick(e)}>Increase</button>
      </div>
    )
  }
}

// Map Redux state to component props,将state中的数据映射到counter组件中
function mapStateToProps(state) {
  return {
    count:state.counter.count
  }
}

// Map Redux actions to component props，将action映射到counter组件中，非必须，也可以直接在组建中直接调用this.props.dispatch(action())来完成状态的改变
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction())
//   }
// }

// Connected Component，将redux与react组件绑定，返回新的容器组件
Counter = connect(
  mapStateToProps
  // mapDispatchToProps
)(Counter);

App=connect()(App);


render(
  (
    <Provider store={store}>
      <Router history={browserHistory}  render={applyRouterMiddleware(useScroll())}>
        <route path="/" component={App}>
          <IndexRoute component={Home}/>
          <route path="page1" component={Page1}/>
          <route path="page2" component={Page2}>
            <IndexRoute component={IndexPage2}/>
            <route path="page3" component={Page3}/>
          </route>
        </route>
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);