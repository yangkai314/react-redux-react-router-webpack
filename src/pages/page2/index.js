/**
 * Created by dell on 2017/3/7.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import '../../css/common.scss'

class IndexPage2 extends Component {
  render() {
    return (
      <div className="page2">page2</div>
    )
  }
}

export default class Page2 extends Component {
  render() {
    return (
      <div>
        {/*<IndexPage2 />*/}
        {this.props.children}
      </div>
    )
  }
}
export {IndexPage2}