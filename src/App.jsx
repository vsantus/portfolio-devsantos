import { RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { router } from './route/router'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
}

export default App
