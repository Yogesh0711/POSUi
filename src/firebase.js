import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoYTkTYTwLvQuNuBNhFBQF54zatysxO4s",
    authDomain: "pointofsales-939f4.firebaseapp.com",
    projectId: "pointofsales-939f4",
    storageBucket: "pointofsales-939f4.firebasestorage.app",
    messagingSenderId: "635562143142",
    appId: "1:635562143142:web:99ede719cb992679e0f367",
    measurementId: "G-7L7XN4XENP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
// const [data, setData] = useState([]);

// useEffect(() => {
//     const fetchData = async () => {
//         const querySnapshot = await getDocs(collection(db, "test"));
//         const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.log(items)
//         setData(items);
//     };

//     fetchData();
// }, []);