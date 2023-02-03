function Button({operador, fn}) {
  return (
    <button
        type="button"
        className="h-10 w-10 flex items-center justify-center font-bold text-slate-50 text-2xl bg-green-500 rounded-lg hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-600"
        onClick={fn}>
        {operador}
    </button>
  )
}

export default Button