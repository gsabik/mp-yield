"use client";

import { useState } from "react";
import { calculateYield } from "@/utils/utils";

interface Props {
  dataYield: number
}

const FormYield = ({ dataYield }: Props) => {
  const [investment, setInvestment] = useState<number>(0);
  const [yieldObtained, setYieldObtained] = useState<number>(0);

  const handleInputChange = (e: any) => {
    setInvestment(e.target.value);
  }

  const handleSubmit = (e: any ) => {
    e.preventDefault();
    const resultOfInvestement = calculateYield(investment, dataYield);
    setYieldObtained(resultOfInvestement);
  }

  return (
    <div className="space-y-4">
      <h3>Calculá tu rendimiento</h3> 
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input 
          className="px-4 py-1 truncate" 
          onChange={handleInputChange}
          placeholder="Ingresá el monto de la inversión" 
          type="number"
          value={investment}
        />
        <button className="border-2 py-1">Calcular</button>
      </form>
      <p>El rendimiento obtenido es: <span className="font-semibold">{yieldObtained.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span></p>
    </div>
  );
}

export default FormYield;