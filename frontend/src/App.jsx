
import { UserAuth } from './context/UserAuth'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/router'

function App() {
  const router = createBrowserRouter(routes)

  return (
    <>
     <UserAuth.Provider>
      <RouterProvider router={router}/>
     </UserAuth.Provider>
    </>
  )
}

export default App
