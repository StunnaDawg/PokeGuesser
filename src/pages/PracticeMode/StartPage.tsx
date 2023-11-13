import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ChoosePracticeMode = () => { 
    const [clickedLink, setClickedLink] = useState<boolean>(false)
    return (
        <>
        {!clickedLink ? <div>
            <h1>Choose a category!</h1>
            <Link to='all-gens' onClick={() => { setClickedLink(true)}}>All Generations</Link>
            <Link to='gen-1' onClick={() => {setClickedLink(true)}}>Gen 1</Link>
            <Link to='gen-2' onClick={() => {setClickedLink(true)}}>Gen 2</Link>
            <Link to='gen-3' onClick={() => {setClickedLink(true)}}>Gen 3</Link>
        </div> :
        <Outlet />}
        </>
    )
}

export default ChoosePracticeMode