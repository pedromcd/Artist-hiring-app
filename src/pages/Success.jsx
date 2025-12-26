/**
 * Success page shown after contract submission
 */
export default function Success({ onNewContract, onViewContracts }) {
  return (
    <section>
      <h1>Contract successfully submitted 🎉</h1>
      <p>Your artist contract has been saved.</p>

      <button onClick={onNewContract}>
        Create new contract
      </button>

      <button onClick={onViewContracts}>
        View submitted contracts
      </button>
    </section>
  );
}
