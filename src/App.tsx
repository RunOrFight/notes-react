import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotesPage } from './pages';
import { NotesService, PreviewPanelService } from './services';

function App() {
  return (
    <BrowserRouter>
      <PreviewPanelService.Provider>
        <NotesService.Provider>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </NotesService.Provider>
      </PreviewPanelService.Provider>
    </BrowserRouter>
  );
}

export default App;
