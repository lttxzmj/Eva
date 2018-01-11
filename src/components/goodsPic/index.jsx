import React from 'react'
import FeatureItem from '../feature-item/index.jsx'
import './index.sass'

class GoodsPic extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const imageUrl = this.props.item.imageUrl;
    console.log(imageUrl);
    return(
      <div>
        <div className='pic-container'>
          <img />
        </div>
      </div>
    )
  }
}

export default GoodsPic
