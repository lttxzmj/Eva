import React from 'react'
import {Route} from 'react-router-dom'
import './index.sass'

import dataList from '../../data/data.js'
import GoodsPic from '../../components/goodsPic/index.jsx'

class Detail extends React.Component{
  render(){
    return(
      <div>
        <GoodsPic />
      </div>
    )
  }
}

export default Detail
