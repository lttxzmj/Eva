import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../../home-header/index.jsx';
import FeaturedToday from '../../featured-today/index.jsx';
import Footer from '../../../containers/home-footer/index.jsx';

export default function HomePage(props) {
    return (
      <div>
       <HomeHeader />
       <FeaturedToday />
       <Footer />
      </div>
    )
  }
