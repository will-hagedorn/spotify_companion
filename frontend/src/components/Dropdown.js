import React from "react";
import DropdownItem from "./DropdownItem";
import { ReactComponent as GearIcon } from '../icons/cog.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';

function Dropdown() {

    return (
        <div className="dropdown">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
                leftIcon={<GearIcon />}
                rightIcon={<BoltIcon />}>
                Settings
            </DropdownItem>

        </div>
    )
}

export default Dropdown;