import ChessboardWrapper from "./components/ChessboardWrapper"
import { SocketProvider } from "./components/SocketProvider"
import Lobby from "./components/Lobby"
import Game from "./components/Game.jsx"
import { Analytics } from "@vercel/analytics/react"
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout/Layout.jsx"
import HomePage from "./components/HomePage.jsx"
import Guide from "./components/Guide.jsx"
function App() {
  const routes = createBrowserRouter([{
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/lobby',
        element: <Lobby />
      },
      {
        path: '/playGame/:roomId',
        element: <Game />
      },
      {
        path: '/guide',
        element: <Guide />
      }
    ]
  }])

  return (
    <>
      <SocketProvider>
        <RouterProvider router={routes} />
        <Analytics />
      </SocketProvider>

    </>
  )
}

export default App
