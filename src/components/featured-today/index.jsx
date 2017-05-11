import React from 'react';
import FeatureItem from '../feature-item/index.jsx';
import item1 from './img/1/JPG';

export default function FeaturedToday(props){
  return(
    <div>
      <div className="feature">
        <div className="feature__title">
          <div className="feature__goods">
            <FeatureItem name="Cosmo Black" info="Modern black armchair"/>
            <FeatureItem name="Phux" info="Modern pink armchair"/>
            <FeatureItem />
            <FeatureItem />
          </div>
        </div>
      </div>
    </div>
  )
}
