"use client";

import { useState } from "react";
import { calculateYield } from "@/utils/utils";
import { Button } from "./ui/button";

interface Props {
  dataYield: number
}

interface Form extends HTMLFormElement {
  investment: HTMLInputElement;
}

const FormYield = ({ dataYield }: Props) => {
  const [investment, setInvestment] = useState<number>(0);
  const [yieldObtained, setYieldObtained] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(parseFloat(e.target.value));
  }

  const handleSubmit = (e: React.ChangeEvent<Form>) => {
    e.preventDefault();
    const resultOfInvestement = calculateYield(investment, dataYield);
    setYieldObtained(resultOfInvestement);
  }

  return (
    <div className="space-y-4">
      <h3>Calculá tu rendimiento</h3> 
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input 
          className="px-4 py-2 rounded truncate" 
          onChange={handleInputChange}
          placeholder="Ingresá el monto de la inversión" 
          type="number"
          value={investment}
        />
        <Button variant="outline">Calcular</Button>
      </form>
      <p>El rendimiento obtenido es: <span className="font-semibold">{yieldObtained.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span></p>
    </div>
  );
}

export default FormYield;