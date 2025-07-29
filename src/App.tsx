import { useState } from 'react';
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

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex flex-1 flex-col overflow-hidden">
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
