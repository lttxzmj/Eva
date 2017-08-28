import React from 'react'
import dataList from '../../data/data.js'
import Deatil from '../../containers/detail/index.jsx'
import FeatureItem from '../feature-item/index.jsx'
import './style.sass'

export default function FeaturedToday(data){
    return(
      <div className="feature">
        <div className="feature__title">FEATURED TODAY</div>
          <div className="feature__goods">
            {dataList.map((item,index) =>
              <FeatureItem key={index} item={item} />
          )}
          </div>
      </div>
    )
}
