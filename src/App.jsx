import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewNavbar from './components/NewNavbar';
import Pricing from './pages/Pricing';
import HeroSection from './components/HeroSection';
import CTABanner from './components/CTABanner';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import IntegrationSection from './components/IntegrationSection';
import CRMsection from './pages/CRMsetion';
import ContactUs from './components/ContactUs';

function Home() {
    return (
    <>
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <IntegrationSection />
        <Testimonials />
        <CTABanner />
    </>
    );
}
// ...import other pages...

function App() {
    return (
        <>
            <NewNavbar />
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path='/features/crm' element={<CRMsection />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;