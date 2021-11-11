import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import Navbar from "../components/Navbar/Navbar.Component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
const DefaultLayout = (props) => {
    return(
        <div>
            <Navbar/>
            
        
        <HeroCarousel/>

            {
               props.children
            }   
        </div>

    );
};
export default DefaultLayout;