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
import CRMsection from './pages/CRMsection';
import ContactUs from './components/ContactUs';
import ProductivitySuite from './pages/ProductivitySuite';
import WhyGoodDay from './pages/WhyGoodDay';
import Login from './components/Login';
import GetStarted from './pages/GetStarted';

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
                <Route path='/why-goodday/' element={<WhyGoodDay />}/>
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path='/login/' element={<Login />}/>
                <Route path='sign-up' element={<GetStarted />}/>
                <Route path='/features/crm' element={<CRMsection />} />
                <Route path='/features/productivity-suite' element={<ProductivitySuite/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;