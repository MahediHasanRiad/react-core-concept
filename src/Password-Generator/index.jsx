import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [range, setRange] = useState(6);
  const [password, setPassword] = useState("");
  const [addNumber, setAddNumber] = useState(false);
  const [addSymbol, setAllSymbol] = useState(false);

  // get referance
  const ref = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (addNumber) str += "1234567890";
    if (addSymbol) str += "@#$&*(_+)(~|}{[]";

    for (let i = 1; i <= range; i++) {
      const num = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(num);
    }
    setPassword(pass);
  }, [range, addNumber, addSymbol, setPassword]);

  // re-render when the value change [range, addNumber, addSymbol]
  useEffect(() => {
    generatePassword();
  }, [range, addNumber, addSymbol]);

  // copy password
  const copyPassword = useCallback(() => {
    ref.current?.select()   // show select in password field
    window.navigator.clipboard.writeText(password)  // copy password
  }, [password]);

  return (
    <section className="w-1/3 m-auto">
      <section>
        <input
          className="px-4 py-2 border"
          type="text"
          value={password}
          ref={ref}
        />
        <button
          onClick={copyPassword}
          className="px-4 py-2 border bg-blue-500 text-black"
        >
          Copy
        </button>
      </section>
      <section className="flex">
        <div className="flex items-center">
          <input
            type="range"
            min={"6"}
            max={"20"}
            onChange={(e) => setRange(e.target.value)}
          />
          <span className="mx-1">{range}</span>
        </div>
        <div className="flex items-center">
          <input
            className="mx-1"
            type="checkbox"
            id="addNumber"
            onChange={() => setAddNumber((prev) => !prev)}
          />
          <label htmlFor="addNumber">Add-Number</label>
        </div>
        <div className="flex items-center">
          <input
            className="mx-1"
            type="checkbox"
            id="addSymbol"
            onChange={() => setAllSymbol((prev) => !prev)}
          />
          <label htmlFor="addSymbol">Add-Symbol</label>
        </div>
      </section>
    </section>
  );
}

export default PasswordGenerator;
