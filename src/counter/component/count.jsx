function Count({ handleInc, handleDec, count }) {
  return (
    <div className="m-4">
      <button
        onClick={handleInc}
        className="bg-blue-500 text-white text-2xl px-4 py-2 rounded border-none"
      >
        +
      </button>
      <span className="px-4 py-2">{count}</span>
      <button
        onClick={handleDec}
        className="bg-blue-500 text-white text-2xl rounded px-4 py-2 border-none"
      >
        -
      </button>
    </div>
  );
}

export default Count;
