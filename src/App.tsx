import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Women from './components/pages/Women';
import Collections from './components/pages/Collections';
import News from './components/pages/News';
import Editorial from './components/pages/Editorial';
import Stories from './components/pages/Stories';
import Editorial_data from './components/pages/Editorial_data';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/news' element={<News />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/asc' element={<Editorial data={Editorial_data.asc} />} />
        <Route path='/bazaar' element={<Editorial data={Editorial_data.bazaar} />} />
        <Route path='/elle' element={<Editorial data={Editorial_data.elle} />} />
        <Route path='/gq' element={<Editorial data={Editorial_data.gq} />} />
        <Route path='/lofficielthailand' element={<Editorial data={Editorial_data.lofficielthailand} />}/>
        <Route path='/lofficielusa' element={<Editorial data={Editorial_data.lofficielusa} />}/>
        <Route path='/numero' element={<Editorial data={Editorial_data.numero} />}/>
        <Route path='/vogue' element={<Editorial data={Editorial_data.vogue} />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
