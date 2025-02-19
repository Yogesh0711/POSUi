import React from 'react'
import InnerHeader from '../../components/InnerHeader'
import MenuTopCategory from './MenuTopCategory'

const Mainmenu = () => {
    return (
        <div className='innerMainContainer'>
            <InnerHeader heading={'Menu'} />
            <MenuTopCategory />
        </div>
    )
}

export default Mainmenu