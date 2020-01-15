import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./BottomNav.css"

const BottomNav = props => (
    <BottomNavigation {...props}>
        {props.children}
    </BottomNavigation>
)

export default BottomNav;