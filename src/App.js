import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LanguageProvider } from './components/languageSelector/availableLanguageContext';
import LanguageSelector from './components/languageSelector/languageSelector';
import Homepage from './components/pages/homepage';

function App() {
  return (
    <LanguageProvider>
      <div>
        <header>
          <LanguageSelector />
        </header>
        
        <Homepage />
      </div>
    </LanguageProvider>
  );
}

export default App;
