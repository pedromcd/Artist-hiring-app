/*
 * Displays success feedback after form submission
 *
 * Provides option to restart and create a new contract
 */
export default function SuccessMessage({ onRestart }) {
  return (
    <div className="success-container">
      <h2>Contract successfully submitted 🎉</h2>
      <p>Your artist hiring request has been saved.</p>
      <button onClick={onRestart}>Create a new contract</button>
    </div>
  );
}
