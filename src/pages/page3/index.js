/**
 * Created by dell on 2017/3/7.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import '../../css/common.scss'
import {Link} from 'react-router'

export default class Page3 extends Component {
  render() {
    return (
      <div className="page3">
        page3
        <Link to="/page2">page2</Link>
        <Link to="/">home</Link>
        {this.props.children}
      </div>
    )
  }
}