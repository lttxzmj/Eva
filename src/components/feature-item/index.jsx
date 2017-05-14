import React from 'react';
import PropTypes from 'prop-types';

class FeatureItem extends React.Component{
  render() {
    return(
      <div>
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
      </div>
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
