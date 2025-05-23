
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import store from './utils/appstore'
import Feed from './components/Feed'
import Connections from './components/Connections'
import Requests from './components/Requests'
import Chat from './components/Chat'

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>}>
        <Route path='/' element={<Feed/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/connection' element={<Connections/>}></Route>
        <Route path='/request' element={<Requests/>}></Route>
        <Route path='/chat/:targetId' element={<Chat/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </>
   
  )
}

export default App
