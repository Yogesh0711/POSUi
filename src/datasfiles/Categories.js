import CakeIcon from '@mui/icons-material/Cake';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import EggIcon from '@mui/icons-material/Egg';
import BlenderIcon from '@mui/icons-material/Blender';
import SetMealIcon from '@mui/icons-material/SetMeal';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

const categories = [
    { name: "Pizza", icon: <LocalPizzaIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Burger", icon: <LunchDiningIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Meat", icon: <KebabDiningIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Desserts", icon: <CakeIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Beverage", icon: <BlenderIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Seafood", icon: <SetMealIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Soup", icon: <SoupKitchenIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Fried Rice", icon: <RiceBowlIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Noodles", icon: <RamenDiningIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Egg", icon: <EggIcon sx={{ fontSize: 30 }} />, items: 0 },
    { name: "Naan", icon: <BakeryDiningIcon sx={{ fontSize: 30 }} />, items: 0 }
];
export default categories;