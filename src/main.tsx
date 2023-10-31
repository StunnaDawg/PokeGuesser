import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AnswerStatusContextProvider, PokemonContextProvider, UserGuessContextProvider, UserScoreContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonContextProvider>
        <UserScoreContextProvider>
          <AnswerStatusContextProvider>
            <UserGuessContextProvider>
              <RouterProvider router={router} />
            </UserGuessContextProvider>
          </AnswerStatusContextProvider>
        </UserScoreContextProvider>
      </PokemonContextProvider>
    
  </React.StrictMode>,
)
