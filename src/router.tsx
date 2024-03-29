import { createBrowserRouter, Navigate } from "react-router-dom"
import ClassicMode from "./pages/AllGensHardMode/ClassicMode"

import MainPage from "./pages/MainPage"
import SignUpPage from "./pages/SignUp"
import LoginPage from "./pages/Login"
import GameOver from "./pages/GameOver"
import RootLayout from "./pages/RootLayout"
import ChoosePracticeMode from "./pages/PracticeMode/StartPage"
import AllGensPracticeMode from "./pages/PracticeMode/categories/AllGens"
import ChooseClassicMode from "./pages/AllGensHardMode/StartPage"
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard"
import ProfileChanges from "./pages/ProfileChanges"
import ChooseLeaderBoard from "./pages/LeaderBoard/ChooseLeaderBoard"

function ErrorPage() {
  // const error  = useRouteError()

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {/* {import.meta.env.MODE !== "production" && (
          <>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
          </>
        )} */}
    </>
  )
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/main-menu" /> },
          { path: "main-menu", element: <MainPage /> },
          {
            path: "classic",
            element: <ChooseClassicMode />,
            children: [
              { path: "all-gens", element: <ClassicMode /> },
              { path: "gen-1", element: <ClassicMode /> },
              { path: "gen-2", element: <ClassicMode /> },
              { path: "gen-3", element: <ClassicMode /> },
              { path: "gen-4", element: <ClassicMode /> },
              { path: "gen-5", element: <ClassicMode /> },
              { path: "gen-6", element: <ClassicMode /> },
              { path: "gen-7", element: <ClassicMode /> },
              { path: "gen-8", element: <ClassicMode /> },
              { path: "gen-9", element: <ClassicMode /> },
            ],
          },
          {
            path: "gameover",
            element: <GameOver />,
          },
          {
            path: "signup",
            element: <SignUpPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "leaderboard",
            element: <ChooseLeaderBoard />,
            children: [
              {
                path: "all-gens",
                element: <LeaderBoard />,
              },
              { path: "gen-1", element: <LeaderBoard /> },
              { path: "gen-2", element: <LeaderBoard /> },
              { path: "gen-3", element: <LeaderBoard /> },
              { path: "gen-4", element: <LeaderBoard /> },
              { path: "gen-5", element: <LeaderBoard /> },
              { path: "gen-6", element: <LeaderBoard /> },
              { path: "gen-7", element: <LeaderBoard /> },
              { path: "gen-8", element: <LeaderBoard /> },
              { path: "gen-9", element: <LeaderBoard /> },
            ],
          },
          {
            path: "profile-updates",
            element: <ProfileChanges />,
          },
          {
            path: "practice-mode",
            element: <ChoosePracticeMode />,
            children: [
              {
                path: "all-gens",
                element: <AllGensPracticeMode />,
              },
              { path: "gen-1", element: <AllGensPracticeMode /> },
              { path: "gen-2", element: <AllGensPracticeMode /> },
              { path: "gen-3", element: <AllGensPracticeMode /> },
              { path: "gen-4", element: <AllGensPracticeMode /> },
              { path: "gen-5", element: <AllGensPracticeMode /> },
              { path: "gen-6", element: <AllGensPracticeMode /> },
              { path: "gen-7", element: <AllGensPracticeMode /> },
              { path: "gen-8", element: <AllGensPracticeMode /> },
              { path: "gen-9", element: <AllGensPracticeMode /> },
            ],
          },
        ],
      },
    ],
  },
])
