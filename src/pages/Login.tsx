import { useEffect, useState, useContext } from "react"
import { FIREBASE_AUTH } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useUserAuth } from "../context"
import { redirect, useNavigate } from "react-router-dom"
import signInWithGoogle from "../hooks/signInWithGoogle"

const LoginPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { isSignedIn, setIsSignedIn } = useUserAuth()
  const auth = FIREBASE_AUTH
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignUpRedirect = () => {
    navigate("/signup")
  }

  useEffect(() => {
    if (isSignedIn) {
      navigate("/main-menu")
    }
  }, [isSignedIn, navigate])
  return (
    <>
      <h1>Log in Page</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(text) => setEmail(text.target.value)}
      />

      <input
        placeholder="Password"
        value={password}
        onChange={(text) => setPassword(text.target.value)}
      />

      <button onClick={handleSignUp}>Log in</button>

      <button onClick={signInWithGoogle}>Log in with Google</button>

      <button onClick={handleSignUpRedirect}>Don't have any account?</button>
    </>
  )
}

export default LoginPage
