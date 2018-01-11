import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FeatureItem from '../../components/feature-item/index.jsx'
import GoodsDeail from './goods-detail.jsx'
import './index.sass'

import dataList from '../../data/data.js'
import GoodsPic from '../../components/goodsPic/index.jsx'

class Detail extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path='/detail' component={FeatureItem}></Route>
        <Route path='/detail/:number' component={GoodsDeail}></Route>
      </Switch>
    )
  }
}

export default Detail
