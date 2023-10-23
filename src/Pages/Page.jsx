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
            <h2>Our Comprehensive Services</h2>
            <p>At Ultra Premiun, we're committed to providing an array of services designed to cater to your specific needs. With years of experience and a dedicated team of experts, we've developed a comprehensive suite of solutions to help you succeed in the digital world.</p>
        </section>
        <section id="section2" className="content-section">
            <h2>Custom Solutions</h2>
            <p>We understand that each business is unique, and one-size-fits-all solutions don't always work. That's why we offer custom solutions tailored to your specific requirements. We take the time to understand your business, goals, and industry, ensuring that the services</p>
        </section>
        <section id="section3" className="content-section">
            <h2>Affordable Excellence</h2>
            <p>Quality doesn't have to come with a hefty price tag. We're committed to offering affordable excellence. Our competitive pricing model makes top-tier web design, development, and digital marketing services accessible to businesses of all sizes.</p>
        </section>
        <section id="section1" className="content-section">
            <h2>Innovation and Technology</h2>
            <p>Our team is dedicated to staying at the forefront of industry innovation and technology. We use cutting-edge tools and the latest trends to create solutions that are both up-to-date and future-ready. This ensures that your online presence remains competitive and adaptive in a rapidly evolving digital landscape.</p>
        </section>
        <section id="section2" className="content-section">
            <h2>Your Success is Our Success</h2>
            <p>At Ultra Premiun, your success is our ultimate goal. We believe in forming long-lasting partnerships with our clients, based on trust, open communication, and delivering measurable results. Your satisfaction is the driving force behind everything we do.</p>
        </section>
    </main>
    <Footer/>
    </div>
  )
}

export default Page;