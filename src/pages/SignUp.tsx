import { useEffect, useState } from "react"
import { FIREBASE_AUTH } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { redirect, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context"
import signInWithGoogle from "../hooks/signInWithGoogle"

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
      navigate("/create-username")
    }
  }, [isSignedIn, navigate])
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center h-screen text-xl xl:text-4xl">
        <div className="flex flex-col items-center">
          <h1 className="font-pokemon-solid">Create an Account</h1>
          <input
            className="border-2 border-black my-1 p-1"
            placeholder="Email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
            size={20}
          />

          <input
            className="border-2 border-black my-1 p-1"
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
            type="password"
          />
        </div>

        <div className="flex flex-row justify-center font-bold text-xl xl:text-2xl">
          <div className="flex flex-col">
            <button onClick={handleSignUp}>Sign up</button>

            <button onClick={signInWithGoogle}>Sign up with Google</button>

            <button onClick={handleLoginRedirect}>
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
