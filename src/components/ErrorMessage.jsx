/*
 * Displays form error messages
 *
 * Receives a message string and shows it below the input
 */
export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <p className="error-text">{message}</p>;
}
