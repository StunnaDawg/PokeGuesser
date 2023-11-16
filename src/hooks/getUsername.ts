// import { collection, getDocs, query, where } from "firebase/firestore";
// import { FIREBASE_AUTH, db } from "../../firebase";
// export const getUsername = async (setState: (value: string) => void): Promise<string | null> => {
//     const user = FIREBASE_AUTH.currentUser;
//     if (user) {
//         try {
//             const userNameCollectionRef = collection(db, "usernames");
//             const q = query(userNameCollectionRef, where("userId", "==", user.uid));
//             const userNameDoc = await getDocs(q);

//             return userNameDoc.username
//     } catch (error) {
//         console.log(error);
//         return null
//     }   
//     } 
// }