import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { useCategoryContext } from "../../context"

const ChoosePracticeMode = () => { 
    const [clickedLink, setClickedLink] = useState<boolean>(false)
    const {setCategoryStart, setCategoryEnd} = useCategoryContext()
    return (
        <>
        {!clickedLink ? <div>
            <h1>Choose a category!</h1>
            <Link to='all-gens' onClick={() => {setCategoryStart(0), setCategoryEnd(1015), setClickedLink(true)}}>All Generations</Link>
            <Link to='gen-1' onClick={() => {setCategoryStart(0), setCategoryEnd(151), setClickedLink(true)}}>Gen 1</Link>
            <Link to='gen-2' onClick={() => {setCategoryStart(152), setCategoryEnd(251), setClickedLink(true)}}>Gen 2</Link>
            <Link to='gen-3' onClick={() => {setCategoryStart(252), setCategoryEnd(386), setClickedLink(true)}}>Gen 3</Link>
            <Link to='gen-4' onClick={() => {setCategoryStart(387), setCategoryEnd(493), setClickedLink(true)}}>Gen 4</Link>
            <Link to='gen-5' onClick={() => {setCategoryStart(494), setCategoryEnd(649), setClickedLink(true)}}>Gen 5</Link>
            <Link to='gen-6' onClick={() => {setCategoryStart(650), setCategoryEnd(721), setClickedLink(true)}}>Gen 6</Link>
            <Link to='gen-7' onClick={() => {setCategoryStart(722), setCategoryEnd(809), setClickedLink(true)}}>Gen 7</Link>
            <Link to='gen-8' onClick={() => {setCategoryStart(810), setCategoryEnd(905), setClickedLink(true)}}>Gen 8</Link>
            <Link to='gen-9' onClick={() => {setCategoryStart(906), setCategoryEnd(1010), setClickedLink(true)}}>Gen 9 - A few pokemon are missing</Link>
        </div> :
        <Outlet />}
        </>
    )
}

export default ChoosePracticeMode