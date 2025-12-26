/*
 * Success page shown after contract submission
 */
export default function Success({ onNewContract }) {
  return (
    <section>
      <h1>Contract successfully submitted 🎉</h1>
      <p>Your artist contract has been saved.</p>

      <button onClick={onNewContract}>
        Create new contract
      </button>
    </section>
  );
}
