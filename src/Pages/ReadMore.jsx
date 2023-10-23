import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { AppContext } from '../contextapi/Context'

function ReadMore() {
    const {title,img,content} = useContext(AppContext);
    console.log(img);
  return (
    <div>
        <Navbar/>
        <header className="page-header">
          <h1>{title}</h1>
        </header>
        <div className='readmore-content'>
            <p className="meta">Posted on June 15, 2023 by Himanshu</p>
            <div className='readmore-img'>
            <img src={img} alt="img"/>
            </div>
            <p className='r-m-content'>{content}</p>
            <div className='r-m-content-2'>
            <p>
            In the ever-evolving digital age, software development plays a vital role in shaping our technological landscape. From the early days of basic programming to the complex, cutting-edge applications we see today, the field of software development has undergone a remarkable transformation. This blog explores the evolution of software development, highlighting how innovation has spurred its growth and examining the key trends that have revolutionized the industry.
            </p>
            <p>
           The advent of Agile methodologies revolutionized software development practices by emphasizing collaboration, flexibility, and iterative development. Agile methodologies like Scrum and Kanban enable teams to respond to changing requirements and deliver high-quality software faster than ever before. Today, Agile has become the go-to approach for many software development projects.
            </p>
            <p>
            The rise of cloud computing has transformed software development by providing scalable and accessible computing resources. Developers can now build, test, and deploy applications in the cloud, reducing infrastructure costs and increasing efficiency. Cloud platforms also enable the integration of advanced technologies like Machine Learning and Internet of Things, opening new possibilities for software innovation.
            </p>
            <p>
            DevOps merges development and operations, facilitating seamless collaboration between teams and accelerating the software development lifecycle. Automation, continuous integration, and continuous delivery (CI/CD) have become integral to the DevOps philosophy, empowering developers to release software quickly and efficiently while ensuring stability and quality.
            </p>
            <p>
            The emergence of low-code development platforms has democratized software development, allowing non-technical users to build functional applications with minimal coding. Low-code platforms enable rapid application development, reduce development costs, and provide a robust toolset to create custom software solutions.
            </p>
            <p>
            Software development has come a long way from its humble beginnings, driven by innovation and fueled by the demands of the digital age. Agile methodologies, cloud computing, DevOps, and low-code development have all played a pivotal role in shaping the software development landscape, enabling faster, more efficient, and scalable applications. As technology continues to advance, software developers must stay adaptable, embracing new trends and tools to harness the power of innovation and drive future progress in the field. 
            </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ReadMore