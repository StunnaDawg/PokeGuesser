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
      <div className="flex-1 flex flex-col items-center justify-center h-screen text-xl xl:text-4xl">
        <div className="flex flex-col items-center">
          <h1 className="font-pokemon-solid">Log in to PokeGuesser</h1>
          <input
            className="border-2 border-black my-1 p-1"
            placeholder="Email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
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
            <button onClick={handleSignUp}>Log in</button>

            <button onClick={signInWithGoogle}>Log in with Google</button>

            <button onClick={handleSignUpRedirect}>
              Don't have any account?
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
