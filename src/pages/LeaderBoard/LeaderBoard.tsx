import { useNavigate } from "react-router-dom"

const LeaderBoard = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-row justify-center">
        <button
          className="flex flex-row justify-center text-xl font-bold xl:text-4xl 2xl:text-6xl"
          type="button"
          onClick={() => navigate(-1)}
        >
          Get outta here
        </button>
      </div>
      <div className="flex flex-row justify-center text-xl font-bold xl:text-4xl 2xl:text-6xl h-screen">
        <h1>LeaderBoard Coming Soon!</h1>
      </div>
    </>
  )
}

export default LeaderBoard
