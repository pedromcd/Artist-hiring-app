/*
 * Success page
 * Displays confirmation after contract submission
 */
export default function Success({ onNewContract, onViewContracts }) {
  return (
    <section>
      <h1>Success!</h1>
      <p>Your artist contract was successfully submitted.</p>

      <button onClick={onNewContract}>Create new contract</button>
      <button onClick={onViewContracts}>View contracts</button>
    </section>
  );
}
