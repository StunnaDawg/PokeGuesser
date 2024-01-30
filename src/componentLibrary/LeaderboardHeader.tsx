import { useLeaderBoardId } from "../context/leaderBoardContext"

type LeaderboardHeaderProps = {
  allGenId: string
  gen1Id: string
  gen2Id: string
  gen3Id: string
  gen4Id: string
  gen5Id: string
  gen6Id: string
  gen7Id: string
  gen8Id: string
  gen9Id: string
}

const LeaderboardHeader = ({
  allGenId,
  gen1Id,
  gen2Id,
  gen3Id,
  gen4Id,
  gen5Id,
  gen6Id,
  gen7Id,
  gen8Id,
  gen9Id,
}: LeaderboardHeaderProps) => {
  const { setBoardId } = useLeaderBoardId()
  return (
    <div className="flex flex-row flex-wrap justify-between text-xl xl:text-2xl 2xl:text-4xl underline overflow-hidden max-w-full">
      <button onClick={() => setBoardId(allGenId)} className="px-4 py-2">
        All Gens
      </button>
      <button onClick={() => setBoardId(gen1Id)} className="px-4 py-2">
        Gen 1
      </button>
      <button onClick={() => setBoardId(gen2Id)} className="px-4 py-2">
        Gen 2
      </button>
      <button onClick={() => setBoardId(gen3Id)} className="px-4 py-2">
        Gen 3
      </button>
      <button onClick={() => setBoardId(gen4Id)} className="px-4 py-2">
        Gen 4
      </button>
      <button onClick={() => setBoardId(gen5Id)} className="px-4 py-2">
        Gen 5
      </button>
      <button onClick={() => setBoardId(gen6Id)} className="px-4 py-2">
        Gen 6
      </button>
      <button onClick={() => setBoardId(gen7Id)} className="px-4 py-2">
        Gen 7
      </button>
      <button onClick={() => setBoardId(gen8Id)} className="px-4 py-2">
        Gen 8
      </button>
      <button onClick={() => setBoardId(gen9Id)} className="px-4 py-2">
        Gen 9
      </button>
    </div>
  )
}

export default LeaderboardHeader
