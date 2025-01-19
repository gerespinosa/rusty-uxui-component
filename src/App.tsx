import Container from "./assets/components/Container"
import Navbar from "./assets/components/Navbar"

function App() {
  

  return (
    <div className="w-[100vw] h-[100vh]">
      <header className="w-full h-[50px] fixed top-0 left-0">
        <Navbar />
      </header>
      <body className="w-full h-[100vh]">
        {/* Products Container */}
        <Container />
      </body>
    </div>
  )
}

export default App
