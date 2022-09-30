import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Event} from './pages/Event'
function App() {
 

  return (
    <div>
  <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/event" element={<Event/>}/>
  <Route path="/event/lesson/:slug" element={<Event/>}/>
</Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
