import { Routes,Route } from "react-router-dom"
import HomePage from "./PAGES/home-page/HomePage"
import Header from "./components/header/Header"
import { Provider } from "react-redux"
import { store } from "./redux"
import GamePage from "./PAGES/game-page/Game.page"
const App=()=>{
  return (
    <Provider store={store}>
    <div>
      <Header/>
        <Routes>
          <Route path={'/home'} element={<HomePage/>}/>
          <Route path={'/app/:title'} element={<GamePage/>}/>
        </Routes>
    </div>
    </Provider>
  )
}

export default App