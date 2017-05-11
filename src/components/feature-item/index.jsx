import React from 'react';

class FeatureItem extends React.Component{
  render() {
    return(
      <div>
        <div className="item">
          <div className="item__photo">
            <img src={source}/>
          </div>
          <div className="item__describe">
            <div className="item__name">
              {this.props.name}
            </div>
            <div className="item__info">
              {this.props.info}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FeatureItem;
