import React, { useState } from 'react';

export function SgEnquiryForm({ onAction, collegeName = 'our' }) {
  const [form, setForm] = useState({
    studentName: '', parentName: '', phone: '', email: '', programme: '', qualification: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px', background: 'var(--color-sg-sage, #EAF2EE)', borderRadius: '16px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--color-primary, #172A43)' }}>Enquiry Submitted</h3>
        <p style={{ color: 'var(--color-muted, #657080)', fontSize: '15px' }}>Thank you for reaching out. The {collegeName} admissions team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="sg-form" onSubmit={handleSubmit}>
      <div className="sg-form-row">
        <div className="sg-form-group">
          <label className="sg-form-label" htmlFor="studentName">Student Name *</label>
          <input id="studentName" name="studentName" className="sg-form-input" type="text" placeholder="Full Name" required value={form.studentName} onChange={handleChange} />
        </div>
        <div className="sg-form-group">
          <label className="sg-form-label" htmlFor="parentName">Parent / Guardian Name</label>
          <input id="parentName" name="parentName" className="sg-form-input" type="text" placeholder="Full Name" value={form.parentName} onChange={handleChange} />
        </div>
      </div>
      <div className="sg-form-row">
        <div className="sg-form-group">
          <label className="sg-form-label" htmlFor="phone">Phone Number *</label>
          <input id="phone" name="phone" className="sg-form-input" type="tel" placeholder="+91 00000 00000" required value={form.phone} onChange={handleChange} />
        </div>
        <div className="sg-form-group">
          <label className="sg-form-label" htmlFor="email">Email Address</label>
          <input id="email" name="email" className="sg-form-input" type="email" placeholder="email@example.com" value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="sg-form-row">
        <div className="sg-form-group">
          <label className="sg-form-label" htmlFor="programme">Interested Programme</label>
          <select id="programme" name="programme" className="sg-form-select" value={form.programme} onChange={handleChange}>
            <option value="">Select a Programme</option>
            <option value="MPC">MPC — Mathematics, Physics, Chemistry</option>
            <option value="BiPC">BiPC — Biology, Physics, Chemistry</option>
            <option value="MEC">MEC — Mathematics, Economics, Commerce</option>
            <option value="CEC">CEC — Civics, Economics, Commerce</option>
            <option value="unsure">Not Sure Yet</option>
          </select>
        </div>
        <div className="sg-form-group">
          <label className="sg-form-label" htmlFor="qualification">Current Qualification</label>
          <input id="qualification" name="qualification" className="sg-form-input" type="text" placeholder="e.g. Class X / SSC" value={form.qualification} onChange={handleChange} />
        </div>
      </div>
      <div className="sg-form-group">
        <label className="sg-form-label" htmlFor="message">Message / Question</label>
        <textarea id="message" name="message" className="sg-form-textarea" placeholder="Tell us anything you'd like to know..." value={form.message} onChange={handleChange} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <p className="sg-form-microcopy">Your details will be used only to respond to your enquiry.</p>
        <button type="submit" className="sg-btn-primary">Submit Enquiry</button>
      </div>
    </form>
  );
}
