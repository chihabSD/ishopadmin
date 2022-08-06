import React, { useContext } from "react";
import "./style.scss";
import { Language, Search, DarkModeOutlined , FullscreenExitOutlined, NotificationsOutlined, ListOutlined, ChatBubbleOutlined, Brightness1Outlined} from "@mui/icons-material";
import { DarkModeContext } from "../../contexts/darkModeContext";
const Nabar = () => {
  const {dark, toggleDarkMode} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <Language className="icon"/>
          English
          </div>
          <div className="item">
            
            <DarkModeOutlined className="icon" onClick={()=>toggleDarkMode()}/>
        
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
          <img src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabar;
