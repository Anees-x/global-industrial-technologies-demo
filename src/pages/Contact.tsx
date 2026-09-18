import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';
import { Words } from '../components/common/Words';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Food',
    project: '1. Understand Needs & Consultation',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    const subject = `[Project Enquiry] ${formData.company || formData.name} - ${formData.project}`;
    const body = `From: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.industry}
Project Type: ${formData.project}

Project Requirements:
${formData.message}`;

    const mailtoUrl = `mailto:contact@globalindustrialtechnologies.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <section className="contact-page">
        <div className="contact-copy">
          <div className="eyebrow">CONTACT / 06</div>
          <Words>START WITH THE REQUIREMENT.</Words>
          <p>
            Tell us what you manufacture, what equipment you need and where the project stands.
            We'll take it from there.
          </p>
          <div className="contact-note">
            <span>PROJECT ENQUIRIES</span>
            <strong>Machinery / Service Cycle / Turnkey</strong>
            <a
              href="mailto:contact@globalindustrialtechnologies.com"
              className="contact-direct-email"
            >
              <Mail size={13} />
              contact@globalindustrialtechnologies.com
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Company
            <input
              required
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Industry
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option>Food</option>
              <option>Beverages</option>
              <option>Cosmetics</option>
              <option>Packaging</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Project type
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
            >
              <option>1. Understand Needs & Consultation</option>
              <option>2. Machinery Selection & Sourcing</option>
              <option>3. Pre-Shipment Inspection / FAT</option>
              <option>4. Shipping & Customs Delivery</option>
              <option>5. Installation & Setup</option>
              <option>6. Testing & Commissioning</option>
              <option>7. Staff Training</option>
              <option>8. Calibration & Validation</option>
              <option>9. Ongoing Support & Spare Parts</option>
              <option>10. Complete Turnkey Project</option>
              <option>Cleanroom Solution</option>
              <option>Other</option>
            </select>
          </label>
          <label className="full">
            Project requirements
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Provide specifications, capacity, line speed, or timeline requirements..."
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          {sent && (
            <div className="contact-sent-notice full">
              <CheckCircle2 size={18} />
              <div>
                <strong>Enquiry routing prepared</strong>
                <span>Opening default email client addressed to contact@globalindustrialtechnologies.com</span>
              </div>
            </div>
          )}

          <button className="button dark full" type="submit">
            {sent ? 'Re-open in Mail Client' : 'Send project enquiry'} <ArrowUpRight size={16} />
          </button>
        </form>
      </section>
    </>
  );
}
