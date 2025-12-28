import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

/*
 * Artist contract form
 *
 * Handles form state, validation, and saving contracts to localStorage
 */
export default function ContractForm({ artist, onSuccess }) {
  const [clientName, setClientName] = useState(""); // Client name input
  const [fee, setFee] = useState(""); // Fee input
  const [eventDate, setEventDate] = useState(""); // Event date input
  const [address, setAddress] = useState(""); // Address input
  const [errors, setErrors] = useState({}); // Validation errors

  // Validate required fields
  function validateForm() {
    const newErrors = {};
    if (!clientName.trim()) {
      newErrors.clientName = "Client name is required.";
    }
    if (!eventDate) {
      newErrors.eventDate = "Event date is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    const contractData = {
      id: Date.now(),
      clientName,
      artist: artist.name, // Ensure selected artist name is stored
      fee,
      eventDate,
      address,
    };

    const savedContracts = JSON.parse(localStorage.getItem("contracts")) || [];
    savedContracts.push(contractData);
    localStorage.setItem("contracts", JSON.stringify(savedContracts));

    onSuccess(); // Trigger success callback
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Client Name"
        required
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        error={errors.clientName}
      />
      <Input
        label="Selected Artist"
        value={artist?.name || ""}
        readOnly
        required
      />
      <Input
        label="Fee"
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />
      <Input
        label="Event Date"
        type="date"
        required
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        error={errors.eventDate}
      />
      <div className="form-group">
        <label>Address</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <Button text="Submit Contract" />
    </form>
  );
}
