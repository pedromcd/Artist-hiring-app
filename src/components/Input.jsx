/*
 * Reusable input component
 *
 * Handles label, required field, read-only state, and error display
 */
export default function Input({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  readOnly = false,
}) {
  return (
    <div className="form-group">
      <label>
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        className={error ? "input-error" : ""}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
