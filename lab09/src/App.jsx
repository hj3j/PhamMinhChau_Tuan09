import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import RecipeCard from './component/RecipeCard '
import Content from './component/Content '
import Footer from './component/Footer'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
       <>
   
          <div className="app-container">
              <Header />
              <div className="top-section-background">
                <RecipeCard />
              </div>
              <Content />
              
              <Footer />
        </div>
</>
    </BrowserRouter>
   
  )
}

export default App
