import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Clients } from './pages/Clients';
import { Calendar } from './pages/Calendar';
import { Packages } from './pages/Packages';
import { Invoices } from './pages/Invoices';
import { Contracts } from './pages/Contracts';
import { Tasks } from './pages/Tasks';
import { Settings } from './pages/Settings';
import { Header } from './components/layout/Header';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Fermer automatiquement le menu sur mobile lors d'un changement de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  return (
    <Router>
      <div className="app-container">
        <div className={`sidebar ${sidebarOpen || !isMobile ? 'open' : ''}`}>
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </div>
        
        {/* Overlay pour mobile - uniquement visible quand le menu est ouvert */}
        {sidebarOpen && isMobile && (
          <div 
            className="sidebar-overlay active" 
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <div className={`main-content ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
