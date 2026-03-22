import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for reaching out! I will get back to you soon.');
  };

  const contactItems = [
    { badge: '01', title: 'Email', value: 'hello@yourname.com' },
    { badge: '02', title: 'Phone', value: '+1 (555) 123-4567' },
    { badge: '03', title: 'Location', value: 'Your City, Your Country' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I am always interested in new product ideas, freelance work, and design-focused
              collaborations. If you have something in mind, send a message.
            </p>
            <div className="contact-details">
              {contactItems.map((item) => (
                <div key={item.title} className="detail">
                  <span className="detail-badge">{item.badge}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell me about your project"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
