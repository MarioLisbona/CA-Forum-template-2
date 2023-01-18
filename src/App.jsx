import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PreviewCard from './components/PreviewCard'

const App = () => {
  return (
    <>
      <body class="bg-secondary">
        <NavBar />
        <div class="container">
          <Header />
          <div class="row g-2">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
          <hr></hr>
          <Footer />
        </div>
      </body>
    </>
  )
}

export default App