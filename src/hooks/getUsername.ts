import { collection, getDocs } from "firebase/firestore";
import { username } from "../@types/pokemon";
import { FIREBASE_AUTH, db } from "../../firebase";
export const getUsername = async (setState: (value: string)=> void): Promise<username> => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
        try {
        const userNameCollectionRef = collection(db, "usernames"); 
        const userNameDoc = await getDocs(userNameCollectionRef);   
        const filteredData = userNameDoc.docs
        .filter(doc => doc.data().userId === FIREBASE_AUTH?.currentUser?.uid || doc.data().public === true)
        .map((doc) => ({
          username: doc.data()?.username
        }))
        console.log(filteredData[0].username);
        setState(filteredData[0].username);
    } catch (error) {
        console.log(error);
    }   
    }
    setState("");
    return {username: ""};
}