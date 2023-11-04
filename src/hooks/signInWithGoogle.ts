import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      
      const user = result.user;

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export default signInWithGoogle;