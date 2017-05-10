import React from 'react';

export default function HomeHeader(props){
  return (
    <div>
      <div className="header-search">
        <div className="search">
        <i className="search__icon"></i>
        <input type="text" className="search__input" placeholder="Search for a product" />
        </div>
      </div>
    </div>
  )
}
// src/components/home-header/imgs/searchBackground.jpg
// src/components/home-header/index.jsx
