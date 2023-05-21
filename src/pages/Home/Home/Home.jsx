import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import { Helmet } from 'react-helmet-async';
import SubCategory from '../SubCategoty/SubCategory';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | BOOM Auto</title>
            </Helmet>
           <Banner></Banner>
           <Gallery></Gallery>
           <SubCategory></SubCategory>
        </div>
    );
};

export default Home;