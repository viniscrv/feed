import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"
import "./global.css"
import styles from "./App.module.css"

function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <Post/>
      </div>  
    </div>
  )
}

export default App
