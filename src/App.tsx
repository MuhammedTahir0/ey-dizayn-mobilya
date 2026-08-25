import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import MaterialsPage from './pages/MaterialsPage';
import QuoteWizardPage from './pages/QuoteWizardPage';
import AboutPage from './pages/AboutPage';
import ReviewsFaqPage from './pages/ReviewsFaqPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-950 font-sans text-stone-100 antialiased selection:bg-amber-400 selection:text-stone-950 flex flex-col justify-between pb-16 lg:pb-0">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <Route path="/projelerimiz" element={<ProjectsPage />} />
            <Route path="/malzemelerimiz" element={<MaterialsPage />} />
            <Route path="/fiyat-hesapla" element={<QuoteWizardPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/yorumlar-ve-sss" element={<ReviewsFaqPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </BrowserRouter>
  );
}
