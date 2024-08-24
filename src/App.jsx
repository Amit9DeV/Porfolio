import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { TransitionProvider } from "./transitions/ContentTransition"
import TransitionComponent from "./transitions/Transiton"

import "./App.css"
import {Routes,  Route } from "react-router-dom"
function App() {

  return (
    <>
     <div className=" bg-black h-screen ">
    <NavBar/>
    <TransitionProvider>
         <Routes>
          <Route path=""  element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          } />
          <Route path="About" element = {    
                        <TransitionComponent>
                        <About/>
                      </TransitionComponent> } />
          <Route path="Projects" element = {                        
                         <TransitionComponent>
                       <Projects/>
                      </TransitionComponent> } /> 
          <Route path="Contact" element = {                       
                      <TransitionComponent>
                          <Contact/>
                      </TransitionComponent> } />

         </Routes>
       </TransitionProvider>

    </div>
    </>
  )
}

export default App
