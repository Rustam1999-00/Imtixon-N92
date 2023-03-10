import Privet from "./pages/privet/Privet"
import Public from "./pages/public/Public"

function App() {

const token = localStorage.getItem('token')

if(token){
  return (
    <div className="App">
      <Privet/>
   
    </div>
  )
}else{
  return (
    <div className="App">
   <Public/>
    </div>
  )
}

 
}

export default App
