import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RoutesS from './routes'
import Footer from './Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesS />
      <Footer />
    </BrowserRouter>
  )
}

export default App
