import React, { useState } from "react";
import "../../style/css/topbar.css";
import { NotificationsNone } from "@mui/icons-material";
import { Select, MenuItem, Badge } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const Topbar = () => {
  const currentLanguage = "english";
  const [language, setLanguage] = useState(currentLanguage);
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src="/img/nouba.png" alt="" />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-standard"
                className="selectLanguage"
                value={language}
                onChange={handleChange}
              >
                <MenuItem value="english">{currentLanguage}</MenuItem>
                <MenuItem value="french">french</MenuItem>
                <MenuItem value="arabic">arabic</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="topbarIconContainer">
            <Badge
              color="secondary"
              overlap="circular"
              max={99}
              badgeContent=""
            >
              <NotificationsNone />
            </Badge>
          </div>

          <img
            src="https://i.pinimg.com/564x/09/ad/09/09ad090ac1209b3430f36c7bed975d5a.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
