import React from "react"
import { createBrowserRouter, useRouteError, Navigate } from "react-router-dom"
import ClassicMode from "./pages/AllGensHardMode/StartPage"

import MainPage from "./pages/MainPage"
import SignUpPage from "./pages/SignUp"
import LoginPage from "./pages/Login"
import LeaderBoard from "./pages/LeaderBoard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "classic",
    element: <ClassicMode />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
])

function ErrorPage() {
  const error = useRouteError()

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
