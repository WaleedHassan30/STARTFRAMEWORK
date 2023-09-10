import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import About from './Components/Pages/About/About';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Contact from './Components/Pages/Contact/Contact';
import Start from './Components/Pages/Start/Start';


function App() {

  const route = createBrowserRouter(
    [
      {path:"/",element:<Layout/>  ,children:
      [
        {index: true , element: <Start/> },
        {path: "Start" , element: <Start/> },
        {path: "ABOUT" , element: <About/> },
        {path: "PORTFOLIO" , element: <Portfolio/> },
        {path: "Contact" , element: <Contact/> },
      ]
    
    }
    ]
  )
  return (
    <div className="App">

      <RouterProvider router={route}/>
     
    </div>
  );
}

export default App;
