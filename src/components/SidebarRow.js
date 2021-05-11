import React from 'react';
import "./styles/SidebarRow.css";
import {Avatar} from "@material-ui/core";

const SidebarRow = ({src, Icon, title}) => {
    return (
        <div className="sidebarRow">
             {/*if we have src props, so we render the icon too*/}
            {src && <Avatar src={src} />}
            {/* if we have an icon prop, so we render the icon too!*/}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;
