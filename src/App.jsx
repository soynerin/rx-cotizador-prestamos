import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers"; 

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const handleChangeCantidad = (e) => {
    setCantidad(e.target.value);
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
    </div>
  )
}

export default App
