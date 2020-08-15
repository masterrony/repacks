import { useSelector } from 'react-redux'

const useCheckAuth = () => {
  const authenticated = useSelector(state => state.app.authenticated)

  return authenticated 
}

export default useCheckAuth