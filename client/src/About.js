import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <Navbar />
      
      <div style={{ flex: 1, padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                M
              </div>
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold', 
                margin: 0,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                MCity
              </h1>
            </div>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              About Us
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#6c757d', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Revolutionizing the way you shop, connect, and experience e-commerce in the digital age
            </p>
          </div>

          {/* Mission Section */}
          <div style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '3rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Our Mission
              </h3>
            </div>
            <div style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#495057',
              textAlign: 'justify'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                At MCity, we believe that shopping should be more than just a transaction—it should be an experience that brings people together. Our mission is to create a vibrant digital marketplace where technology meets human connection, where every click leads to discovery, and where every purchase supports a community of passionate sellers and satisfied buyers.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We're not just another e-commerce platform; we're a digital city where commerce thrives, relationships flourish, and innovation never stops. Our cutting-edge microservices architecture ensures that your shopping experience is seamless, secure, and lightning-fast, while our commitment to user privacy and data protection gives you peace of mind.
              </p>
              <p>
                From the moment you enter MCity, you become part of a global community that values quality, authenticity, and customer satisfaction above all else. We're building the future of online shopping, one transaction at a time.
              </p>
            </div>
          </div>

          {/* What We Do Section */}
          <div style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '3rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                What We Do
              </h3>
            </div>
            <div style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#495057',
              textAlign: 'justify'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                MCity operates as a comprehensive e-commerce ecosystem that connects buyers and sellers through an intuitive, feature-rich platform. Our Dockerized microservices architecture ensures scalability, reliability, and performance that adapts to your needs. We provide everything from user authentication and profile management to product cataloging, shopping cart functionality, and secure payment processing.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Our platform leverages the latest technologies including React.js for a responsive frontend experience, Node.js and Express for robust backend services, MongoDB for flexible data management, and Docker for seamless deployment and scaling. This modern tech stack enables us to deliver a shopping experience that's not just functional, but delightful.
              </p>
              <p>
                Beyond just selling products, we create opportunities for businesses to grow, for entrepreneurs to thrive, and for customers to discover unique items that enhance their lives. Our admin panel provides comprehensive user management capabilities, while our advanced search and filtering systems help customers find exactly what they're looking for.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Smart Shopping
              </h4>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                Advanced search algorithms, personalized recommendations, and intelligent filtering help you discover products that match your preferences and lifestyle.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Secure Transactions
              </h4>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                State-of-the-art encryption and security protocols ensure that your personal information and payment details are always protected and secure.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Lightning Fast
              </h4>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                Our microservices architecture ensures blazing-fast performance, with pages loading in milliseconds and transactions processing instantly.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Community Driven
              </h4>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                Built for the community, by the community. We foster connections between buyers and sellers, creating a vibrant marketplace ecosystem.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Mobile First
              </h4>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                Responsive design ensures a perfect shopping experience across all devices, from smartphones to desktop computers.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Sustainable Growth
              </h4>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                Our scalable architecture grows with your business, supporting everything from small startups to enterprise-level operations.
              </p>
            </div>
          </div>

          {/* Technology Section */}
          <div style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '3rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Our Technology Stack
              </h3>
            </div>
            <div style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#495057',
              textAlign: 'justify'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                MCity is built on a modern, cloud-native architecture that combines the best of frontend and backend technologies. Our React.js frontend delivers a smooth, interactive user experience with real-time updates and dynamic content loading. The Node.js and Express backend provides robust API endpoints, efficient data processing, and seamless integration with our MongoDB database.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We leverage Docker containerization to ensure consistent deployment across environments, making our platform highly scalable and maintainable. Our microservices architecture allows for independent scaling of different components, ensuring optimal performance even during peak traffic periods. The entire system is designed with security, reliability, and user experience in mind.
              </p>
              <p>
                From the database layer to the user interface, every component is optimized for performance and security. We use industry-standard authentication protocols, implement comprehensive error handling, and maintain detailed logging for monitoring and debugging. This robust foundation allows us to continuously innovate and add new features while maintaining the highest standards of quality and reliability.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1rem',
            padding: '3rem',
            textAlign: 'center',
            color: '#fff',
            marginBottom: '2rem'
          }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Join the MCity Community
            </h3>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Experience the future of e-commerce today. Start shopping, start selling, start connecting.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                background: '#fff',
                color: '#667eea',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                🛍️ Start Shopping
              </button>
              <button style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fff';
                e.target.style.color = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#fff';
              }}>
                📞 Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About; 