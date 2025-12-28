/*
 * Primary button component
 *
 * Reusable button with default submit type and disabled state
 */
export default function Button({ text, type = "submit", disabled = false }) {
  return (
    <button type={type} disabled={disabled} className="btn-primary">
      {text}
    </button>
  );
}
