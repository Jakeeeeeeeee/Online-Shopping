import React from 'react';
import './homePage.styles.scss';
import Directory from '../../components/Directory/Directory';
import { HomePageContainer } from './HomePageStyles';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
