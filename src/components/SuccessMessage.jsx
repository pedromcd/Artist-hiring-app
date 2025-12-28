/*
 * Displays success feedback after form submission
 *
 * Provides option to restart and create a new contract
 */
export default function SuccessMessage({ onRestart }) {
  return (
    <div className="success-container">
      <h2>Contrato realizado com sucesso 🎉</h2>
      <p>Seu contrato foi salvo.</p>
      <button onClick={onRestart}>Realizar novo contrato</button>
    </div>
  );
}
