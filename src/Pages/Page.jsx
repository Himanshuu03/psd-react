import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Page() {
  return (
    <div className='back'>
    <Navbar path="/pages"/>
    <header className="page-header">
        <h1>Welcome to Our Content Page</h1>
    </header>
    <main>
        <section id="section1" className="content-section">
            <h2>Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor vel velit iaculis tincidunt.</p>
        </section>
        <section id="section2" className="content-section">
            <h2>Section 2</h2>
            <p>Integer a libero sed lorem convallis suscipit. Sed eu neque neque. Duis non sem non tortor congue euismod.</p>
        </section>
        <section id="section3" className="content-section">
            <h2>Section 3</h2>
            <p>Fusce viverra ante eget tortor vestibulum ultricies. Vivamus ac urna vel ligula pharetra rhoncus.</p>
        </section>
        <section id="section1" className="content-section">
            <h2>Section 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor vel velit iaculis tincidunt.</p>
        </section>
        <section id="section2" className="content-section">
            <h2>Section 5</h2>
            <p>Integer a libero sed lorem convallis suscipit. Sed eu neque neque. Duis non sem non tortor congue euismod.</p>
        </section>
        <section id="section3" className="content-section">
            <h2>Section 6</h2>
            <p>Fusce viverra ante eget tortor vestibulum ultricies. Vivamus ac urna vel ligula pharetra rhoncus.</p>
        </section>
    </main>
    <Footer/>
    </div>
  )
}

export default Page;