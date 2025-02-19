import React, { useState } from "react";
import Theme from "../components/Theme";
import './../App.css';
import { SideBarData } from "../datasfiles/SideBarData";
import { Divider, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SideNavBar = ({ setSelectedpage, selectedPage }) => {
    const navigate = useNavigate();

    return (
        <div className="sideBar" style={{ "--sidebar-bg": Theme.secondary }}>
            <Typography sx={{ marginTop: '20px', textAlign: 'center', color: Theme.maintheme, fontWeight: 'bold' }}>COSYPOS</Typography>
            <ul>
                {SideBarData.map((value, key) => {
                    return (
                        <React.Fragment key={key}>

                            <li
                                className="sideBarlist"
                                style={{
                                    backgroundColor: (selectedPage === value.link) ? Theme.maintheme : "transparent"
                                }}
                                onClick={() => {
                                    console.log(value.link)
                                    setSelectedpage(value.link);
                                    navigate(value.link)
                                }}>
                                <div><IconButton size="small" sx={{
                                    color: Theme.maintheme,
                                    backgroundColor: Theme.primarytext,
                                    pointerEvents: selectedPage === value.link ? 'none' : 'auto',
                                    cursor: selectedPage === value.link ? 'default' : 'pointer'
                                }}>{value.icon}</IconButton></div>
                                <p style={{ color: (selectedPage === value.link) ? Theme.secondarytext : Theme.primarytext }}>{value.title}</p>
                            </li>
                            <Divider sx={{ borderColor: Theme.primarydivider, width: '70%' }} />

                        </React.Fragment>
                    )
                })}
            </ul>

        </div>
    )
}

export default SideNavBar;