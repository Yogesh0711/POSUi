import React from 'react'
import './menu.css'
import Theme from '../../components/Theme'
const AddCategory = ({ onClose, categoryVisible }) => {
    return (
        <>
            {categoryVisible &&
                <div className='addCategoryOverlay' style={{ backgroundColor: Theme.overlaycolor }} onClick={() => onClose(false)}>
                    
                </div>
            }
            <div className='addCategoryInMenu' onClick={() => onClose(false)} style={{ backgroundColor: Theme.secondary }}></div>
        </>
    )
}

export default AddCategory