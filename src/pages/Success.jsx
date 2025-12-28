/*
 * Success page
 * Displays confirmation after contract submission
 * Provides options to create a new contract or view existing contracts
 */
export default function Success({ onNewContract, onViewContracts }) {
  return (
    <section>
      <h1>Sucesso!</h1>
      <h2>Contrato realizado e salvo 🎉</h2>

      <button onClick={onNewContract}>Realizar novo contrato</button>
      <button onClick={onViewContracts}>Visualizar contratos existentes</button>
    </section>
  );
}
