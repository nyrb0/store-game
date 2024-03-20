import { Routes } from "react-router-dom"
import HomePage from "./PAGES/home-page/HomePage"

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
