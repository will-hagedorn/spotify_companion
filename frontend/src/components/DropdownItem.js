import React from "react";

function DropdownItem(props) {
    return (
        <a href="#" className="drop-item">
            <span className="icon-but">{props.leftIcon}</span>
            {props.children}

            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
}

export default DropdownItem;