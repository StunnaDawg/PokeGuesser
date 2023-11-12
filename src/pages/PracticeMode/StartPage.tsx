import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ChoosePracticeMode = () => { 
    const [clickedLink, setClickedLink] = useState<boolean>(false)
    return (
        <>
        {!clickedLink ? <div>
            <h1>Choose a category!</h1>
            <Link to='all-gens' onClick={() => setClickedLink(true)}>All Generations</Link>
        </div> :
        <Outlet />}
        </>
    )
}

export default ChoosePracticeMode