import { Routes, Route} from 'react-router-dom';

// Components
import CategoriesPreview from '../categories-preview/categories-preview.component';

// Assets Styles
import './shop.styles.scss'

const Shop = ()=>{
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
    </Routes>
  )
}

export default Shop;