/**
 * Created by dell on 2017/3/7.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import '../../css/common.scss'
import './index.scss'

export default class Page1 extends Component {

  static defaultProps={
    data:{
      name:'kai'
    }
  }

  componentWillMount(){
    console.log(1);
  }

  constructor(props){
    super(props);
    this.state={
      data:{
        name:'yang'
      }
    }

    console.log(2);
  }

  render() {
    return (
      <div className="page1">
        page1
        <br/>
        {this.state.data.name}
        {this.props.data.name}
      </div>
    )
  }
}

