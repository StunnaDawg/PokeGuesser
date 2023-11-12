import { Link } from "react-router-dom"
const MainPage = () => {

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="underline font-bold">Welcome to PokeGuesser!</h1>
        <Link to="/classic" className="my-2">
          Classic Mode
        </Link>
        <Link to="/practice-mode" className="my-2">Practice Mode</Link>
        <Link to="/leaderboard" className="my-2">
          LeaderBoard
        </Link>
      </div>
    </>
  )
}

export default MainPage
