import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'

const RoutesS = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)
export default RoutesS
