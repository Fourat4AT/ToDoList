import React from 'react';
import { Routes, Route } from 'react-router';
import HomePages from './pages/HomePages.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import toast from 'react-hot-toast';
const App = () => {
  return (
<div className="relative h-full w-full" data-theme="forest" >
      <Routes >
        <Route path="/" element={<HomePages />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
