import React from 'react';
import Home from './pages/home/Home'
import PostDetail from './pages/postdetails/PostDetail'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
export default App;
