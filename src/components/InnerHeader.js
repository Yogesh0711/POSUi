import { IconButton } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Theme from './Theme';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
const InnerHeader = ({ heading }) => {
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '15px' }}>
                <IconButton sx={{ backgroundColor: Theme.secondary, color: Theme.primarytext }}><ChevronLeftIcon /></IconButton>
                <h4 style={{ color: Theme.primarytext, fontSize: '25px' }}>{heading}</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <IconButton sx={{ color: Theme.primarytext }}><NotificationsIcon/></IconButton>
                <IconButton sx={{ color: Theme.primarytext }}>|</IconButton>
                <IconButton sx={{ color: Theme.primarytext }}><PersonIcon/></IconButton>
            </div>
        </div>
    )
}

export default InnerHeader