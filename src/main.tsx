import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import {
  AnswerStatusContextProvider,
  PokemonContextProvider,
  UserAuthContextProvider,
  UserGuessContextProvider,
  UserScoreContextProvider,
  ClassicModeLifeContextProvider,
  CategoryContextProvider,
} from "./context"
import { LeaderBoardIdContextProvider } from "./context/leaderBoardContext"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LeaderBoardIdContextProvider>
      <CategoryContextProvider>
        <PokemonContextProvider>
          <UserScoreContextProvider>
            <ClassicModeLifeContextProvider>
              <AnswerStatusContextProvider>
                <UserGuessContextProvider>
                  <UserAuthContextProvider>
                    <RouterProvider router={router} />
                  </UserAuthContextProvider>
                </UserGuessContextProvider>
              </AnswerStatusContextProvider>
            </ClassicModeLifeContextProvider>
          </UserScoreContextProvider>
        </PokemonContextProvider>
      </CategoryContextProvider>
    </LeaderBoardIdContextProvider>
  </React.StrictMode>
)
