import React from 'react'
import { AccountBoxOutlined, ExitToAppOutlined, FeedbackOutlined, GTranslateOutlined, HelpOutline, KeyboardOutlined, LanguageOutlined, MonetizationOnOutlined, PersonPinOutlined, SecurityOutlined, SettingsOutlined} from "@material-ui/icons";
import { useEffect, useRef } from "react";


const IdContent = ( {visible, setVisible} ) => {

    let menuRef = useRef(null);



    useEffect(()=>{
        let handler = (e) =>{
          if(menuRef.current && !menuRef.current.contains(e.target)){
            setVisible(false);
          }
        }
        document.addEventListener('mousedown', handler);
  
        return () => {
          document.addEventListener('mousedown', handler);
        }
    },[])

  return (
    <>
        <div ref={menuRef} className={`id-info ${visible? 'id-content-visible': 'id-content-invisible'}`}>
            <p style={{display: 'flex', flexDirection: 'row', gap: '20px'}}><span className="user-id">H</span> <span>Harshit Sharma <br />@harshitsharma</span></p>
            <span style={{display: 'inline-block',width: "100%", height: '1px', backgroundColor: '#52525286'}}></span>
            <br />
            <span>
                <AccountBoxOutlined/> Switch account
            </span>
            <br />
            <span>
                <ExitToAppOutlined/> Sign out
            </span>
            <br />
            <span>
                <MonetizationOnOutlined/> Purchases
            </span>
            <span style={{display: 'inline-block',width: "100%", height: '1px', backgroundColor: '#52525286'}}></span>
            <span>
                <PersonPinOutlined/> Your data
            </span>
            <br />
            <span>
                <GTranslateOutlined/> Translate
            </span>
            <br />
            <span>
                <SecurityOutlined/> Security
            </span>
            <br />
            <span>
                <LanguageOutlined/> Location: India
            </span>
            <br />
            <span>
                <KeyboardOutlined/> Keyboard shortcuts
            </span>
            <span style={{display: 'inline-block',width: "100%", height: '1px', backgroundColor: '#52525286'}}></span>
            <span>
                <SettingsOutlined/> Setting
            </span>
            <span style={{display: 'inline-block',width: "100%", height: '1px', backgroundColor: '#52525286'}}></span>
            <span>
                <HelpOutline/> Help
            </span>
            <br />
            <span>
                <FeedbackOutlined/> Send feedBack
            </span>
        </div>
    </>
  )
}

export default IdContent;