import React from 'react'
import { Menu, Mic, NotificationsNone, Search, VideoCall, YouTube } from "@material-ui/icons"
import { useState } from "react"
// import Navbar from "./Navbar";
import { Content } from "./Content";
import IdContent from "./IdContent";

import { Link } from "react-router-dom";

const Header = ({toggleNavbar}) => {
    // const [open, setOpen] = useState(true);
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    
    const handleClick = () => {
        setValue(inputValue);
    }
    // console.log(inputValue)
    

  return (
    <>
        <div className="header">
            <div className="header-left">
                <span onClick={toggleNavbar} style={{cursor: 'pointer'}}>
                    <Menu/>
                </span>
                <Link to='/' className="youtube-logo" style={{cursor: 'pointer'}}><YouTube/>YouTube</Link>
            </div>
            <div className="header-center">
                <div className="serach-box">
                    <div><input type="text" placeholder="Search" name="search" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/><span onClick={handleClick}><Search/></span></div>
                </div>
                <span className="mic"><Mic/></span> 
            </div>
            <div className="header-right">
                <VideoCall style={{color: 'red'}}/>
                <NotificationsNone/>
                <span className="user-id" onClick={()=> setVisible(!visible)}>H</span>
                <IdContent visible={visible} setVisible={setVisible}/>
            </div>
        </div>
        <div className="props-component" style={{display: 'none'}}>
           {/* <Navbar open={open}/> */}
            <Content searchData={value}/>
        </div>
    </>
  )
}

export default Header