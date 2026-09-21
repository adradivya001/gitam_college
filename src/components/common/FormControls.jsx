import React from 'react';
import './FormControls.css';

export function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
  helperText,
  icon: Icon = null,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label} {required && <span className="form-required">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {Icon && <Icon className="input-icon" size={18} />}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`form-input ${Icon ? 'has-icon' : ''}`}
          {...props}
        />
      </div>
      {error && <span className="form-error-text">{error}</span>}
      {!error && helperText && <span className="form-helper-text">{helperText}</span>}
    </div>
  );
}

export function Select({
  label,
  name,
  options = [],
  value,
  onChange,
  required = false,
  placeholder = 'Select an option',
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label} {required && <span className="form-required">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-select"
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value ?? opt.id ?? opt} value={opt.value ?? opt.id ?? opt}>
            {opt.label ?? opt.name ?? opt}
          </option>
        ))}
      </select>
      {error && <span className="form-error-text">{error}</span>}
    </div>
  );
}

export function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows = 3,
  required = false,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label} {required && <span className="form-required">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className="form-textarea"
        {...props}
      />
      {error && <span className="form-error-text">{error}</span>}
    </div>
  );
}
