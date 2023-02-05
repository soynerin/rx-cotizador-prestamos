import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers"; 

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [plazo, setPlazo] = useState(6);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const handleChangeCantidad = (e) => {
    setCantidad(e.target.value);
  }

  const handleChangePlazo = (e) => {
       setPlazo(e.target.value);
  }

  const handleClickDecrementarCantidad = () => {
    if (cantidad > MIN) {
      setCantidad(cantidad - STEP);
    }
  }

  const handleClickIncrementarCantidad = () => {
    if (cantidad < MAX) {
      setCantidad(cantidad + STEP);        
    }
  }

  return (
    <div className="my-20 mx-auto max-w-lg p-10 bg-violet-700 text-center shadow-lg rounded-lg">
      <Header />

      <div className="flex justify-between my-5">
        <Button operador="-" fn={handleClickDecrementarCantidad} />
        <Button operador="+" fn={handleClickIncrementarCantidad}/>
      </div>

      <input 
        type="range" 
        className="w-full h-6 bg-gray-900 accent-green-500 hover:accent-green-700"
        onChange={handleChangeCantidad}
        value={cantidad}
        min={MIN}
        max={MAX}
        step={STEP} />

        <p className="text-green-500 font-bold text-5xl my-5">{formatearDinero(cantidad)}</p>

        <h2 className="mt-10 text-2xl font-extrabold text-slate-50 text-center">Elije un <span className="text-green-500 font-bold text-2xl">plazo</span> a pagar</h2>

        <select 
          className="mt-5 w-full text-center text-2xl text-gray-900 rounded-lg shadow-lg border border-gray-900" 
          value={plazo} 
          onChange={handleChangePlazo}>
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
        </select>
    </div>    
  )
}

export default App
