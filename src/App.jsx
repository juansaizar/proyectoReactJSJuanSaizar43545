
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      
      <NavBar />
      <Routes >
        <Route path='/' element={ <ItemListContainer greeting='Proxima parada...'/> } />
        <Route path='/category/:id' element={ <ItemListContainer greeting='Proxima parada...'/> } />
        <Route path='/detail/:productId' element={ <ItemDetailContainer /> } />
        <Route path='/cart' element={  <CartContainer />  } />
        
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>

    </BrowserRouter>
  ) 
}

export default App





//import { useState } from 'react'
//import reactLogo from './assets/react.svg'


//function App() {
//  const [count, setCount] = useState(0)
//
//
//  return (
//<div className="App">
//      <div>
//        <a href="https://vitejs.dev" target="_blank">
//          <img src="/vite.svg" className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://reactjs.org" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </div>
//)
//}
//
//export default App

