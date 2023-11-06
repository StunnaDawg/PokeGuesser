import { doc, getDoc } from "firebase/firestore";
import { username } from "../@types/pokemon";
import { FIREBASE_AUTH, db } from "../../firebase";
export const getUsername = async (setState: (value: string)=> void): Promise<username> => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
        try {
        const userNameCollectionRef = doc(db, "usernames", user.uid); 
        const userNameDoc = await getDoc(userNameCollectionRef);   
        if(userNameDoc.exists()) {
            const data = userNameDoc.data() as username;
            setState(data.username);
            return data
        }
    } catch (error) {
        console.log(error);
    }   
    }
    setState("");
    return {username: ""};
}