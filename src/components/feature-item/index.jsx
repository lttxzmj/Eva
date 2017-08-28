import React from 'react'
import Detail from '../../containers/detail/index.jsx'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.sass'

class FeatureItem extends React.Component{
  render() {
    return(
      //点击图片进入相应的详情页
      <Link to={`/detail/${this.props.item.id}`}>
        <div className="item">
          <div className="item__photo">
            <img src={this.props.item.imageUrl}/>
          </div>
          <div className="item__describe">
            <div className="item__name">
              {this.props.item.name}
            </div>
            <div className="item__info">
              {this.props.item.info}
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

FeatureItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    info: PropTypes.string,
    imageUrl: PropTypes.string,
    fontSize: PropTypes.number
  }),
};

export default FeatureItem;
