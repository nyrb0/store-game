import { Routes,Route } from "react-router-dom"
import HomePage from "./PAGES/home-page/HomePage"
import Header from "./components/header/Header"
import { Provider } from "react-redux"
import { store } from "./redux"
const App=()=>{
  return (
    <Provider store={store}>
    <div>
      <Header/>
        <Routes>
          <Route path={'/home'} element={<HomePage/>}/>
          {/* <Route path={'/'} element={}/> */}
        </Routes>
    </div>
    </Provider>
  )
}

export default App