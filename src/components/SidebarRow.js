import React from 'react';
import "./styles/SidebarRow.css";

const SidebarRow = ({src, Icon, title}) => {
    return (
        <div className="sidebarRow">
            <p>{title}</p>
        </div>
    );
};

export default SidebarRow;
