import { Welcome, Navbar, Footer, Services, Transaction } from "./Parts"

const App = () => {
  

  return (
    <div className="screen-m-h">
     <div className="bg-grad">
          <Navbar/>
          <Welcome/>
     </div>
          <Services/>
          <Transaction/>
          <Footer/>

    </div>
  )
}

export default App
