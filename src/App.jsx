import Header from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>feed</main>
      </div>  
    </div>
  )
}

export default App
