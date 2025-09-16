import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ClientLogos from './components/ClientLogos';
import Team from './components/Team';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Partnerships from './components/Partnerships';
import Careers from './components/Careers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// Service Pages
import WebDevelopment from './pages/WebDevelopment';
import MobileApps from './pages/MobileApps';
import AIMachineLearning from './pages/AIMachineLearning';
import DevOps from './pages/DevOps';
import QA from './pages/QA';
import Marketing from './pages/Marketing';
// Focus Area Pages
import EnterpriseApplications from './pages/EnterpriseApplications';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import DigitalCommerce from './pages/DigitalCommerce';
import TechnologyIntegration from './pages/TechnologyIntegration';
import BusinessAutomation from './pages/BusinessAutomation';
import BIAnalytics from './pages/BIAnalytics';
// About Pages
import TeamPage from './pages/Team';
import HowWeWork from './pages/HowWeWork';
import CareersPage from './pages/Careers';
// Industry Pages
import Healthcare from './pages/Healthcare';
import Education from './pages/Education';
import Finance from './pages/Finance';
import Retail from './pages/Retail';
import Manufacturing from './pages/Manufacturing';
import Travel from './pages/Travel';
import Logistics from './pages/Logistics';
import Sports from './pages/Sports';
import Marketplace from './pages/Marketplace';
import Construction from './pages/Construction';
import MediaOTT from './pages/MediaOTT';
import SocialMedia from './pages/SocialMedia';
import BeautyLifestyle from './pages/BeautyLifestyle';
import Insurance from './pages/Insurance';
import Legal from './pages/Legal';
import ITTelecom from './pages/ITTelecom';
import OnDemand from './pages/OnDemand';
import { motion } from 'framer-motion';

// Home Page Component
const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <ClientLogos />
    <CaseStudies />
    <Testimonials />
    <Contact />
  </main>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/ai-ml" element={<AIMachineLearning />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/qa" element={<QA />} />
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/focus/enterprise-applications" element={<EnterpriseApplications />} />
            <Route path="/focus/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/focus/digital-commerce" element={<DigitalCommerce />} />
            <Route path="/focus/technology-integration" element={<TechnologyIntegration />} />
            <Route path="/focus/business-automation" element={<BusinessAutomation />} />
            <Route path="/focus/bi-analytics" element={<BIAnalytics />} />
            <Route path="/about/team" element={<TeamPage />} />
            <Route path="/about/how-we-work" element={<HowWeWork />} />
            <Route path="/about/careers" element={<CareersPage />} />
            <Route path="/industry/healthcare" element={<Healthcare />} />
            <Route path="/industry/education" element={<Education />} />
            <Route path="/industry/finance" element={<Finance />} />
            <Route path="/industry/retail" element={<Retail />} />
            <Route path="/industry/manufacturing" element={<Manufacturing />} />
            <Route path="/industry/travel" element={<Travel />} />
            <Route path="/industry/logistics" element={<Logistics />} />
            <Route path="/industry/sports" element={<Sports />} />
            <Route path="/industry/marketplace" element={<Marketplace />} />
            <Route path="/industry/construction" element={<Construction />} />
            <Route path="/industry/media-ott" element={<MediaOTT />} />
            <Route path="/industry/social-media" element={<SocialMedia />} />
            <Route path="/industry/beauty-lifestyle" element={<BeautyLifestyle />} />
            <Route path="/industry/insurance" element={<Insurance />} />
            <Route path="/industry/legal" element={<Legal />} />
            <Route path="/industry/it-telecom" element={<ITTelecom />} />
            <Route path="/industry/on-demand" element={<OnDemand />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
