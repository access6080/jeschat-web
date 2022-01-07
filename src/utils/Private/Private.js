import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Private = ({ component:RouteComponent }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
}