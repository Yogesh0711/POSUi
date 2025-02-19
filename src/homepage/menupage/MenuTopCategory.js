
import React, { useRef, useState, useEffect } from 'react'
import Theme from '../../components/Theme'
import { Button, IconButton } from '@mui/material'
import './menu.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import categories from '../../datasfiles/Categories';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AddCategory from './AddCategory';


const MenuTopCategory = () => {
    const scrollContainer = useRef(null);
    const [hideArrows, setHideArrows] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All Items")
    const [addNewCategory,setAddNewCategory]=useState(false)
    useEffect(() => {
        const updateVisibility = () => {
            if (scrollContainer.current) {
                const containerWidth = scrollContainer.current.clientWidth;
                const scrollWidth = scrollContainer.current.scrollWidth;
                setHideArrows(scrollWidth <= containerWidth)
            }
        }
        const observer = new ResizeObserver(updateVisibility)
        observer.observe(scrollContainer.current)

        window.addEventListener("resize", updateVisibility)
        updateVisibility();
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateVisibility);
        };

    }, [])
    const scroll = (direction) => {
        if (scrollContainer.current) {
            const scrollAmt = 200;
            scrollContainer.current.scrollBy(
                {
                    left: direction === "left" ? -scrollAmt : scrollAmt,
                    behavior: "smooth",
                }
            )
        }
    }
    return (
        <>
            {addNewCategory && <AddCategory onClose={setAddNewCategory} categoryVisible={addNewCategory}/>}
            

            <div style={{ width: '100%', marginTop: '20px' }}>
                <div className='menuHeaderDiv'>
                    <h3 className='menuInnerHeading' style={{ "--text-color": Theme.primarytext }}>Categories</h3>
                    <Button className='mainButton' onClick={() => setAddNewCategory(true)}>Add New Category</Button>
                </div>
                <div className='carouselMainContainer' >
                    {!hideArrows && (<IconButton sx={{ color: 'white' }} onClick={() => scroll("left")}><KeyboardArrowLeftIcon /></IconButton>)}
                    <div className='carouselContainer' ref={scrollContainer}>
                        <div className='categoryMainDiv' style={{ backgroundColor: selectedCategory === 'All Items' ? Theme.maintheme : Theme.secondary, cursor: 'pointer' }} onClick={() => setSelectedCategory('All Items')}>
                            <span><AllInclusiveIcon sx={{ color: selectedCategory === 'All Items' ? Theme.secondarytext : Theme.maintheme, fontSize: '35px' }} /></span>
                            <span>
                                <h3 style={{ color: selectedCategory === 'All Items' ? Theme.secondarytext : Theme.primarytext }}>All Items</h3>
                                <p style={{ color: selectedCategory === 'All Items' ? Theme.secondarytext : Theme.primarytext }}>0 items</p>
                            </span>
                        </div>

                        {categories.map((category) => (
                            <div key={category.name} className='categoryMainDiv' style={{ backgroundColor: selectedCategory === category.name ? Theme.maintheme : Theme.secondary, cursor: 'pointer' }} onClick={() => setSelectedCategory(category.name)}>
                                <span>
                                    {React.cloneElement(category.icon, {
                                        sx: { color: selectedCategory === category.name ? Theme.secondarytext : Theme.maintheme, fontSize: '35px' }
                                    })}
                                    {/* {category.icon} */}
                                </span>
                                <span>
                                    <h3 style={{ color: selectedCategory === category.name ? Theme.secondarytext : Theme.primarytext }}>{category.name}</h3>
                                    <p style={{ color: selectedCategory === category.name ? Theme.secondarytext : Theme.primarytext }}>{category.items} items</p>
                                </span>
                            </div>
                        ))}
                    </div>
                    {!hideArrows && (<IconButton sx={{ color: 'white' }} onClick={() => scroll("right")}><KeyboardArrowRightIcon /></IconButton>)}

                </div>

            </div>
        </>

    )
}

export default MenuTopCategory