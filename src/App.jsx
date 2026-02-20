import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Produse from './Components/Produse/produse'
import Promotii from './Components/Promotii/Promotii'
import DespreNoi from './Components/DespreNoi/DespreNoi'
import Footer from './Components/Footer/Footer'
import PromotiiPage from './Components/PromotiiPage/PromotiiPage' 
import ProdusePage from './Components/ProdusePage/ProdusePage'
import DespreNoiPage from './Components/DespreNoiPage/DespreNoiPage'
import ContactePage from './Components/ContactePage/ContactePage'
import AfiseazaProduse from './Components/AfiseazaProduse/AfiseazaProduse'
import DetaliiProdus from './Components/DetaliiProdus/DetaliiProdus'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Produse />
              <Promotii />
              <DespreNoi />
            </>
          } />
          
          <Route path="/promotii" element={<PromotiiPage />} />
          <Route path="/produse" element={<ProdusePage />} />
          <Route path="/despreNoi" element={<DespreNoiPage />} />
          <Route path="/contacte" element={<ContactePage />} />
          <Route path="/afiseazaProduse/:categorie" element={<AfiseazaProduse />} />
          <Route path="/detaliiProdus" element={<DetaliiProdus />} />
        </Routes>
      
        <Footer />
      </div>
    </Router>
  )
}

export default App;
