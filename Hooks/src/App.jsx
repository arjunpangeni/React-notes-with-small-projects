import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumber) {
      str += "0123456789";
    }
    if (isChar) str += "@#$%^&*(){}[]";
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, isNumber, isChar]);

  function handleCopy() {
    navigator.clipboard.writeText(password);
    inputRef.current?.select();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, isChar, isNumber]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-10 bg-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-center text-2xl font-semibold mb-4 animate-fade-in gradient-text text-orange-400">
          Password Generator
        </h1>
        <div className="flex shadow-inner rounded-lg overflow-hidden mb-4">
          <input
            ref={inputRef}
            type="text"
            value={password}
            placeholder="Generated Password"
            className="outline-none w-full py-2 px-4 text-gray-800 bg-gray-200 transition-colors duration-300 ease-in-out"
            readOnly
          />
          <button
            className={`outline-none px-4 py-2 transition-all duration-300 ease-in-out transform ${
              copied ? "bg-green-500" : "bg-blue-700 hover:bg-blue-800"
            } text-white hover:scale-110`}
            onClick={handleCopy}
          >
            {copied ? "copied!" : "copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer "
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <label className="text-white">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isChar}
              id="charInput"
              className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
              onChange={() => setIsChar((prev) => !prev)}
            />
            <label className="text-white ml-1">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
