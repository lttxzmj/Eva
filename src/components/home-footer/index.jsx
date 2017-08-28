import React from 'react';
import './index.sass';

export default class Footer extends React.Component {
  render(){
    return(
      <div className="footer-bar">
        <ul className="footer-nav center">
          <li className="search__icon"><i className="fa fa-search"></i></li>
          <li className="home__icon"><i className="fa fa-home"></i></li>
          <li className="user__icon"><i className="fa fa-user-o"></i></li>
        </ul>
      </div>
    )
  }
}
