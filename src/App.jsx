import { Routes,Route } from "react-router-dom"
import HomePage from "./PAGES/home-page/HomePage"
import Header from "./components/header/Header"
import { Provider } from "react-redux"
import { store } from "./redux"
import GamePage from "./PAGES/game-page/Game.page"
import OrderPage from "./PAGES/order-page/OrderPage"
const App=()=>{
  return (
    <Provider store={store}>
    <div>
      <Header/>
        <Routes>
          <Route path={'/home'} element={<HomePage/>}/>
          
          <Route path={'/app/:title'} element={<GamePage/>}/>
        <Route path={'/order'} element={<OrderPage/>}/>
        </Routes>
    </div>
    </Provider>
  )
}

export default App