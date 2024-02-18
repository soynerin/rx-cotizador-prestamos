import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalAPagar, calcularPagoMensual } from "./helpers"; 

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [plazo, setPlazo] = useState(6);
  const [total, setTotal] = useState(0);
  const [pagoMensual, setPagoMensual] = useState(0);

  useEffect(() => {
    setTotal(calcularTotalAPagar(cantidad, plazo));
  }, [cantidad, plazo]);

  useEffect(() => {
    setPagoMensual(calcularPagoMensual(total, plazo));
  }, [total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const handleChangeCantidad = (e) => {
    setCantidad(+e.target.value);
  }

  const handleChangePlazo = (e) => {
    setPlazo(+e.target.value);
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

        <div className="mt-5 space-y-3 bg-violet-700 p-5">
        <h2 className="mt-10 text-2xl font-extrabold text-slate-50 text-center">Resumen <span className="text-green-500 font-bold text-2xl">de pagos</span></h2>
          <p className="text-slate-50 text-2xl">Plazo: {plazo} meses</p>
          <p className="text-slate-50 text-2xl">Monto a pagar: {formatearDinero(total)}</p>         
          <p className="text-slate-50 text-2xl">Mensuales: {formatearDinero(pagoMensual)}</p>
        </div>
    </div>    
  )
}

export default App
