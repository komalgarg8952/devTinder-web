
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Body from './body'
import Login from './login'
import Profile from './profile'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
   
  )
}

export default App
