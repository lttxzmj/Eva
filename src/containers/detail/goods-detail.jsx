import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './index.sass'

import dataList from '../../data/data.js'
import GoodsPic from '../../components/goodsPic/index.jsx'

class GoodsDeail extends React.Component{
  render(){
    //找到商品的路由
    const commodityNumber = parseInt(this.props.match.params.number);
    //找到与路由相匹配的商品
    const isCommodity = dataList.map((item, index) => item.id ===  commodityNumber);
    console.log(isCommodity);
    return(
      <div>
        {dataList.map((item,index) =>
          <GoodsPic key={index} item={item} />
        )}
      </div>
    )
  }
}

export default GoodsDeail
