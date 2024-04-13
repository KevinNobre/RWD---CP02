import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './componentes/Posts';
import Users from './componentes/Users';
import Photos from './componentes/Photos';

function App() {
  return (
    <Router>
      <div className="flex flex-col "> 
        {/* Footer com as informações*/}
        <section className="flex-grow bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-1 text-center">Responsive Web Development - 1TDSZ</h1>
            <p className="text-lg text-center">Kevin Christian Nobre - 552590</p>
          </div>
        </section>
        
        {/* Barra de Navegação */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/posts" className="text-white hover:text-gray-300">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/users" className="text-white hover:text-gray-300">
                Usuários
              </Link>
            </li>
            <li>
              <Link to="/photos" className="text-white hover:text-gray-300">
                Fotos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conteúdo trago conforma API */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
