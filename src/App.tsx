import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RoutesS from './routes'
import Footer from './Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesS />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
