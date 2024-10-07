import { useState } from 'react'
import React from 'react'
import { createContext } from 'react'
import { Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Background from './components/Background'
import Home from './pages/Home'
import Header from './components/Header'
import Works from './pages/Works'
import Contact from './pages/Contact'
import { ThemeContextType } from './components/ThemeContextType'
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setTheme((current) => current === 'light' ? 'dark' : 'light');
    
  }
  
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div  id={theme}>
    <ChakraProvider>
    <BrowserRouter>
    <Background />
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
