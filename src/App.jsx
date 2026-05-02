import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Rooms from './components/Rooms';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const ChatBubble = () => (
  <div className="chat-bubble" title="Chat with us">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  </div>
);

const GoTop = () => (
  <div className="go-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    GO BACK TOP
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Testimonials />
      </main>
      <Footer />
      <ChatBubble />
      <GoTop />
    </>
  );
}

export default App;
