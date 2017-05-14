import React from 'react';
import FeatureItem from '../feature-item/index.jsx';

export default function FeaturedToday(props){
  const itemList = [
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://d3dr1ze7164817.cloudfront.net/items/2A3d3y0G3E3N3Z3X1M3i/1.JPG?X-CloudApp-Visitor-Id=2756471",
    },
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://d3dr1ze7164817.cloudfront.net/items/2h3k3t071O0y0F0P1b3L/2.JPG?X-CloudApp-Visitor-Id=2756471",
    },
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://d3dr1ze7164817.cloudfront.net/items/0x3v1m341f220G1R1u3K/3.JPG?X-CloudApp-Visitor-Id=2756471",
    },
    {
      "name": "Cosmo Black",
      "info": "Modern black armchair",
      "imageUrl": "https://d3dr1ze7164817.cloudfront.net/items/2h3k3t071O0y0F0P1b3L/2.JPG?X-CloudApp-Visitor-Id=2756471",
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
