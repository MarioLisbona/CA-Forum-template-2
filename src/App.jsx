import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PreviewCard from './components/PreviewCard'

const App = () => {
  return (
    <>
      <body>
        <NavBar />
        <div class="container">
          <Header />
          <div class="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
      </body>
    </>
  )
}

export default App