import React from 'react'
// import { ArtTrackOutlined, Home, MusicNote, Slideshow, Sports, SportsEsports, Subscriptions, VideoLibrary } from "@material-ui/icons";
// import { NavLink } from "react-router-dom";
import crazy from '../assets/Images/Crazy XYZ Shorts.jpg'
import mrbeast from '../assets/Images/Mr Beast Clothing.jpg'
import techno from '../assets/Images/Techno Gamerz .jpg';
import mrindian from '../assets/Images/Mr_ Indian Hacker Youtube Channel Full Details.jpg'
import { CastForEducation, Home, HowToRegOutlined, MovieCreationOutlined, MusicNote, Slideshow, Sports, SportsEsports } from '@material-ui/icons';

const Navbar = ({isOpen, category, setCategory}) => {
  // console.log(open);
  // console.log(isOpen);
  return (
    <>
        {
          isOpen? 
          <>
            <div className={`full-navbar`}>
              <span className={`${category===0? "active-c": ""}`} onClick={()=> setCategory(0)}> <Home/> Home </span>
              <span className={`${category===30? "active-c": ""}`} onClick={()=> setCategory(1)}> <MovieCreationOutlined/> Movies </span>
              <span className={`${category===17? "active-c": ""}`} onClick={()=> setCategory(17)}> <Sports/> Sports </span>
              <span className={`${category===20? "active-c": ""}`} onClick={()=> setCategory(20)}> <SportsEsports/> Gaming </span>
              <span className={`${category===25? "active-c": ""}`} onClick={()=> setCategory(25)}> <Slideshow/> News </span>
              <span className={`${category===10? "active-c": ""}`} onClick={()=> setCategory(10)}> <MusicNote/> Music </span>
              <span className={`${category===26? "active-c": ""}`} onClick={()=> setCategory(26)}> <HowToRegOutlined/> How to </span>
              <span className={`${category===27? "active-c": ""}`} onClick={()=> setCategory(24)}> <CastForEducation/> Comedy </span>
              <hr />
              <h4>{isOpen? 'Subscribed': 'Sub.'}</h4>
              <p><img src={crazy} alt="random"/> Crazy XYZ</p>
              <p><img src={mrbeast} alt="random"/> Mr Beast</p>
              <p><img src={techno} alt="random"/> Techno Gamerz</p>
              <p><img src={mrindian} alt="random"/> Mr Indian Hacker</p>
        </div>
          </> :
          <>
            <div className={`small-navbar`}>
              <span className={`${category===0? "active-c": ""}`} onClick={()=> setCategory(0)}> <Home/></span>
              <span className={`${category===30? "active-c": ""}`} onClick={()=> setCategory(1)}> <MovieCreationOutlined/></span>
              <span className={`${category===17? "active-c": ""}`} onClick={()=> setCategory(17)}> <Sports/></span>
              <span className={`${category===20? "active-c": ""}`} onClick={()=> setCategory(20)}> <SportsEsports/></span>
              <span className={`${category===25? "active-c": ""}`} onClick={()=> setCategory(25)}> <Slideshow/></span>
              <span className={`${category===10? "active-c": ""}`} onClick={()=> setCategory(10)}> <MusicNote/></span>
              <span className={`${category===26? "active-c": ""}`} onClick={()=> setCategory(26)}> <HowToRegOutlined/></span>
              <span className={`${category===27? "active-c": ""}`} onClick={()=> setCategory(24)}> <CastForEducation/></span>
        </div>
          </>
        }
    </>
  )
}

export default Navbar



// {/* <div className={`Navbar ${isOpen? 'navbar-open': 'navbar-not-open'}`}>
//               <span className={`${category===0? "active-c": ""}`} onClick={()=> setCategory(0)}> <Home/> Home </span>
//               <span className={`${category===30? "active-c": ""}`} onClick={()=> setCategory(1)}> <MovieCreationOutlined/> Movies </span>
//               <span className={`${category===17? "active-c": ""}`} onClick={()=> setCategory(17)}> <Sports/> Sports </span>
//               <span className={`${category===20? "active-c": ""}`} onClick={()=> setCategory(20)}> <SportsEsports/> Gaming </span>
//               <span className={`${category===25? "active-c": ""}`} onClick={()=> setCategory(25)}> <Slideshow/> News </span>
//               <span className={`${category===10? "active-c": ""}`} onClick={()=> setCategory(10)}> <MusicNote/> Music </span>
//               <span className={`${category===26? "active-c": ""}`} onClick={()=> setCategory(26)}> <HowToRegOutlined/> How to </span>
//               <span className={`${category===27? "active-c": ""}`} onClick={()=> setCategory(24)}> <CastForEducation/> Comedy </span>
//               <hr />
//               <h4>{isOpen? 'Subscribed': 'Sub.'}</h4>
//               <p><img src={crazy} alt="random"/> Crazy XYZ</p>
//               <p><img src={mrbeast} alt="random"/> Mr Beast</p>
//               <p><img src={techno} alt="random"/> Techno Gamerz</p>
//               <p><img src={mrindian} alt="random"/> Mr Indian Hacker</p>
//         </div> */}