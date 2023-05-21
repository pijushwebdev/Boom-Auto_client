import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import { Helmet } from 'react-helmet-async';
import SubCategory from '../SubCategoty/SubCategory';
import Services from '../Services/Services';
import Partner from '../Partner/Partner';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | BOOM Auto</title>
            </Helmet>
           <Banner></Banner>
           <Gallery></Gallery>
           <SubCategory></SubCategory>
           <Services></Services>
           <Partner></Partner>
        </div>
    );
};

export default Home;