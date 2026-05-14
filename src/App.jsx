import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Rooms from './components/Rooms';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Gallery from './components/Galary';

const ChatBubble = () => (
  <a href="tel:+919876543210" className="chat-bubble call-bubble" title="Call us">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      width="18"
      height="18"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 
      19.79 19.79 0 01-8.63-3.07 
      19.5 19.5 0 01-6-6 
      19.79 19.79 0 01-3.07-8.67 
      A2 2 0 014.11 2h3a2 2 0 012 1.72 
      c.12.81.32 1.6.59 2.35 
      a2 2 0 01-.45 2.11L8.09 9.91 
      a16 16 0 006 6l1.73-1.16 
      a2 2 0 012.11-.45 
      c.75.27 1.54.47 2.35.59 
      A2 2 0 0122 16.92z"/>
    </svg>
  </a>
);
const WhatsAppBubble = () => (
  <a
    href="https://wa.me/9108066669"
    target="_blank"
    rel="noopener noreferrer"
    className="chat-bubble whatsapp-bubble"
    title="Chat on WhatsApp"
  >
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.5c2.3 1.2 4.9 1.8 7.7 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.3c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.9 1.5 1.6-4.8-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.1 5.8-12.9 12.9-12.9S28.9 8.7 28.9 16 23.1 28.7 16 28.7zm7.1-9.6c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-2.2-1.1-3.7-2-5.2-4.5-.4-.6.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.2 1.3 3.7 1.5 4c.2.3 2.6 4 6.4 5.6.9.4 1.7.7 2.2.9.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"/>
    </svg>

    <span className="chat-number"></span>
  </a>
);

const GoTop = () => (
  <div className="go-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    GO BACK TOP
  </div>
);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <ChatBubble />  
      <WhatsAppBubble />
      <GoTop />
    </>
  );
}

export default App;
