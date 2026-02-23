import LogIn from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/user.context'

function FormHandleWithContext() {
  return (
    <UserContextProvider>
      <LogIn />
      <Profile />
    </UserContextProvider>
  )
}

export default FormHandleWithContext
