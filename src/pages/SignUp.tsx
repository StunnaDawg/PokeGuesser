import { useEffect, useState } from "react"
import { FIREBASE_AUTH } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { redirect, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context"

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { isSignedIn, setIsSignedIn } = useUserAuth()
  const auth = FIREBASE_AUTH
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginRedirect = () => {
    navigate("/login")
  }
  
  useEffect(() => {
    if (isSignedIn) {
      navigate("/")
    }
  }, [isSignedIn, navigate])
  return (
    <>
      <h1>Sign Up Page</h1>
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

      <button onClick={handleSignUp}>Sign up</button>

      <button onClick={handleLoginRedirect}>Already have an account?</button>
    </>
  )
}

export default SignUpPage
