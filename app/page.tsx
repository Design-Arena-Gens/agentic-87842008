export default function Home() {
  return (
    <>
      <header>
        <nav className="container">
          <div className="logo">🌍 Global Export Solutions</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Your Gateway to Global Markets</h1>
            <p>Connecting businesses worldwide with premium products and seamless export solutions</p>
            <a href="#contact" className="cta-button">Get Started Today</a>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive export solutions tailored to your business needs</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>Product Sourcing</h3>
                <p>We connect you with verified suppliers and manufacturers, ensuring quality products that meet international standards for your export needs.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🚢</div>
                <h3>Logistics & Shipping</h3>
                <p>End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery worldwide.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📋</div>
                <h3>Documentation</h3>
                <p>Complete documentation support including export licenses, certificates of origin, and compliance with international trade regulations.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Trade Consulting</h3>
                <p>Expert guidance on market entry strategies, trade finance, risk management, and international business development.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔍</div>
                <h3>Quality Control</h3>
                <p>Rigorous quality inspection and testing services to ensure products meet destination country standards and specifications.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🤝</div>
                <h3>Market Research</h3>
                <p>In-depth market analysis, competitor research, and identification of lucrative opportunities in target export markets.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section stats-section">
          <div className="container">
            <h2 className="section-title">Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">75+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Shipments Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="container">
            <h2 className="section-title">Export Categories</h2>
            <p className="section-subtitle">Wide range of products available for international markets</p>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">🌾</div>
                <div className="product-content">
                  <h3>Agricultural Products</h3>
                  <p>Fresh produce, grains, spices, and organic farming products exported worldwide.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">🏭</div>
                <div className="product-content">
                  <h3>Industrial Goods</h3>
                  <p>Machinery, equipment, tools, and industrial supplies for global markets.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">👔</div>
                <div className="product-content">
                  <h3>Textiles & Apparel</h3>
                  <p>Fabrics, garments, fashion accessories, and home textiles of premium quality.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">💊</div>
                <div className="product-content">
                  <h3>Pharmaceuticals</h3>
                  <p>Generic medicines, medical supplies, and healthcare products with certifications.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">💎</div>
                <div className="product-content">
                  <h3>Handicrafts</h3>
                  <p>Artisanal products, traditional crafts, and unique cultural items for export.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">⚡</div>
                <div className="product-content">
                  <h3>Electronics</h3>
                  <p>Consumer electronics, components, and technology products for international trade.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section" style={{background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'}}>
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">Your trusted partner in international trade</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">✓</div>
                <h3>Global Network</h3>
                <p>Extensive network of partners, suppliers, and logistics providers across 75+ countries worldwide.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✓</div>
                <h3>Competitive Pricing</h3>
                <p>Best-in-class pricing through our established relationships and bulk shipping capabilities.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✓</div>
                <h3>Timely Delivery</h3>
                <p>Reliable and punctual delivery schedules with real-time tracking for complete peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Ready to expand your business globally? Contact us today</p>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <p>info@globalexportsolutions.com<br/>sales@globalexportsolutions.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Location</h3>
                <p>123 Export Plaza, Trade District<br/>International Business Hub</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🕐</div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Global Export Solutions is a leading export business dedicated to facilitating international trade with reliability, efficiency, and excellence.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Product Sourcing</a></li>
                <li><a href="#services">Logistics</a></li>
                <li><a href="#services">Documentation</a></li>
                <li><a href="#services">Consulting</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <p>Stay connected on social media for updates and export insights.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Global Export Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
