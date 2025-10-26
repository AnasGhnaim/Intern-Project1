
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
//import NavBar from './components/NavBar'

// Create a new router instance
const router = createRouter({ routeTree })

function App() {
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
