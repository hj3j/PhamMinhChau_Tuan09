import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import RecipeCard from './component/RecipeCard '
import Content from './component/Content '
import Footer from './component/Footer'

function App() {

  return (
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
  )
}

export default App
