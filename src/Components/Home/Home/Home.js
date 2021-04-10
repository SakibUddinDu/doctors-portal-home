import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Contact from '../../Contact/Contact';
import Doctors from '../../Doctors/Doctors';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Footer from '../../Footer/Footer';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import Header from '../Header/Header';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;