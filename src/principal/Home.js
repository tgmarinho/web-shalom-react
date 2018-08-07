import React from 'react'
import Navigator from "./Navigator";
import Header from "../components/Header";
import About from "./About";
import Services from "./Services";
import Calendar from "./Calendar";
import Photos from "./Photos";
import Map from "./Map";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <div>
            <Navigator />
            <Header />
            <About />
            <Services />
            <Calendar />
            <Photos />
            <Map />
            <Footer />
        </div>
    )

}

export default Home