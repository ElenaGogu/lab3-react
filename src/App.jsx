import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavBar} from './Components/NavBar'
import {Header} from './Components/Header'
import {Produse} from './Components/Produse'
import {Promotii} from './Components/Promotii'
import {DespreNoi} from './Components/DespreNoi'
import {Footer} from './Components/Footer'
import {PromotiiPage} from './Components/PromotiiPage' 
import {ProdusePage} from './Components/ProdusePage'
import {DespreNoiPage} from './Components/DespreNoiPage'
import {ContactePage} from './Components/ContactePage'
import {AfiseazaProduse} from './Components/AfiseazaProduse'
import {DetaliiProdus} from './Components/DetaliiProdus'



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
