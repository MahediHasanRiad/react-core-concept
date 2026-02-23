import { useContext, useState } from 'react'
import userContext from '../context/context'


function LogIn() {

  const {setUser} = useContext(userContext) // import context file not provider

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    setUser({email, password})
  }

  return (
    <>
      <input className='border p-2 m-2' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='border p-2 m-2' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleInput} className='border p-2'>Submit</button>
    </>
  )
}

export default LogIn
