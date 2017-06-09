import React from 'react';
import FeatureItem from '../feature-item/index.jsx';
import './style.sass';

export default function FeaturedToday(props){
  const itemList = [
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://cl.ly/3L2p0T1X452L/1.jpg",
    },
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://cl.ly/132w0H2Z1J1T/3.jpg",
    },
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://cl.ly/0P0p0X2n2O3m/4.jpg",
    },
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://cl.ly/3y3L1I1z3y2W/5.jpg",
    }
  ];

    return(
      <div>
        <div className="feature">
          <div className="feature__title">FEATURED TODAY</div>
            <div className="feature__goods">
              {itemList.map((item,index) =>
                <FeatureItem key={index} item={item}/>
            )}
            </div>
        </div>
      </div>
    )

}
