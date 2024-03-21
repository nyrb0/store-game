import { Routes,Route } from "react-router-dom"
import HomePage from "./PAGES/home-page/HomePage"
import Header from "./components/header/Header"

const App=()=>{
  return (
    <div>
      <Header/>
        <Routes>
          <Route path={'/home'} element={<HomePage/>}/>
          {/* <Route path={'/'} element={}/> */}
        </Routes>
       
        
    </div>
  )
}

export default App
