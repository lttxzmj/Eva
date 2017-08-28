import React from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route } from 'react-router-dom'
import HomeHeader from '../../components/home-header/index.jsx';
import FeaturedToday from '../../components/featured-today/index.jsx';
import Footer from '../../components/home-footer/index.jsx';

export default function HomePage() {
    return (
      <div>
        <HomeHeader />
        <FeaturedToday />
        <Footer />
      </div>
    )
  }
