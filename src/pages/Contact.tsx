import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { Words } from '../components/common/Words';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [sent, setSent] = useState(false);
  const [prefilledSource, setPrefilledSource] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Food',
    project: '1. Understand Needs & Consultation',
    message: '',
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const productParam = searchParams.get('product') || searchParams.get('machine');
    const projectParam = searchParams.get('project');
    const industryParam = searchParams.get('industry');
    const subjectParam = searchParams.get('subject');
    const messageParam = searchParams.get('message');
    const nameParam = searchParams.get('name');
    const companyParam = searchParams.get('company');

    let matchedProject = formData.project;
    let matchedIndustry = formData.industry;
    let sourceLabel = '';
    let autoMessage = '';

    // 1. Service / Step pre-filling
    if (serviceParam) {
      sourceLabel = `Service Step: ${serviceParam}`;
      const lower = serviceParam.toLowerCase();
      if (lower.includes('1') || lower.includes('consultation') || lower.includes('needs')) {
        matchedProject = '1. Understand Needs & Consultation';
      } else if (lower.includes('2') || lower.includes('sourcing') || lower.includes('selection')) {
        matchedProject = '2. Machinery Selection & Sourcing';
      } else if (lower.includes('3') || lower.includes('fat') || lower.includes('inspection')) {
        matchedProject = '3. Pre-Shipment Inspection / FAT';
      } else if (lower.includes('4') || lower.includes('shipping') || lower.includes('customs')) {
        matchedProject = '4. Shipping & Customs Delivery';
      } else if (lower.includes('5') || lower.includes('installation') || lower.includes('setup')) {
        matchedProject = '5. Installation & Setup';
      } else if (lower.includes('6') || lower.includes('commissioning') || lower.includes('testing')) {
        matchedProject = '6. Testing & Commissioning';
      } else if (lower.includes('7') || lower.includes('training')) {
        matchedProject = '7. Staff Training';
      } else if (lower.includes('8') || lower.includes('validation') || lower.includes('calibration')) {
        matchedProject = '8. Calibration & Validation';
      } else if (lower.includes('9') || lower.includes('spare') || lower.includes('support')) {
        matchedProject = '9. Ongoing Support & Spare Parts';
      } else if (lower.includes('10') || lower.includes('turnkey')) {
        matchedProject = '10. Complete Turnkey Project';
      } else {
        matchedProject = serviceParam;
      }
      autoMessage = `I would like to discuss ${serviceParam} for our facility.`;
    }

    // 2. Product / Machinery pre-filling
    if (productParam) {
      sourceLabel = `Machinery: ${productParam}`;
      matchedProject = '2. Machinery Selection & Sourcing';
      autoMessage = `Requesting technical configuration, capacity specifications, and pricing for: ${productParam}.`;
    }

    // 3. Project pre-filling
    if (projectParam && !serviceParam) {
      sourceLabel = `Project: ${projectParam}`;
      matchedProject = '10. Complete Turnkey Project';
      autoMessage = `I would like to enquire about the project scope and specifications for: ${projectParam}.`;
    }

    // 4. Industry matching
    if (industryParam) {
      const indLower = industryParam.toLowerCase();
      if (indLower.includes('food')) matchedIndustry = 'Food';
      else if (indLower.includes('bev')) matchedIndustry = 'Beverages';
      else if (indLower.includes('cosm')) matchedIndustry = 'Cosmetics';
      else if (indLower.includes('pack')) matchedIndustry = 'Packaging';
      else if (indLower.includes('clean') || indLower.includes('pharma')) matchedIndustry = 'Cleanroom / Pharma';
      else matchedIndustry = 'Other';

      if (!sourceLabel) {
        sourceLabel = `Industry: ${industryParam}`;
      }
      if (!autoMessage) {
        autoMessage = `We are looking for turnkey equipment and engineering solutions for the ${industryParam} sector.`;
      }
    }

    // 5. Subject / Message override
    if (subjectParam && !sourceLabel) {
      sourceLabel = subjectParam;
    }
    if (messageParam) {
      autoMessage = messageParam;
    }

    if (sourceLabel) {
      setPrefilledSource(sourceLabel);
    }

    setFormData((prev) => ({
      ...prev,
      name: nameParam || prev.name,
      company: companyParam || prev.company,
      industry: matchedIndustry,
      project: matchedProject,
      message: autoMessage || prev.message,
    }));
  }, [searchParams]);

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
          {prefilledSource && (
            <div
              className="full"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: 'rgba(255, 189, 53, 0.12)',
                border: '1px solid rgba(255, 189, 53, 0.4)',
                borderRadius: '6px',
                fontSize: '11px',
                color: '#2a2618',
                marginBottom: '4px',
              }}
            >
              <Sparkles size={14} style={{ color: '#b57a07', flexShrink: 0 }} />
              <span>
                Auto-populated from selection: <strong>{prefilledSource}</strong>
              </span>
            </div>
          )}
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
