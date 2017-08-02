import React from 'react';

export default function HomeHeader(props){
  return (
    <div className="header-search center">
      <div className="search">
      <i className="search__icon"></i>
      <input type="text" className="search__input" placeholder="Search for a product" />
      </div>
    </div>
  )
}
