import React from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import TableBarRoundedIcon from '@mui/icons-material/TableBarRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
export const SideBarData = [
    {
        title: "Dashboard",
        icon: <GridViewRoundedIcon />,
        link: "/dashboard",
    },
    {
        title: "Menu",
        icon: <RestaurantMenuIcon/>,
        link: "/menu",
    },
    {
        title: "Inventory",
        icon: <Inventory2RoundedIcon />,
        link: "/inventory",
    },
    {
        title: "Order/Table",
        icon: <TableBarRoundedIcon />,
        link: "/orderortable",
    },
    {
        title: "Reports",
        icon: <AssessmentRoundedIcon />,
        link: "/reports",
    },
    {
        title: "Staff",
        icon: <AssignmentIndRoundedIcon />,
        link: "/staffs",
    },

]

