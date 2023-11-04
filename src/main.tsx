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
} from "./context"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>
)
