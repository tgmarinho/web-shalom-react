import React from 'react'
import NavBar from "../components/NavBar";
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
            <NavBar />
            <Header />
            <About />
            <Services />
            <Calendar />
            <Photos />
            <Map containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                mapElement={<div style={{ height: `100%` }} />} />
            <Footer />
        </div>
    )

}

export default Home