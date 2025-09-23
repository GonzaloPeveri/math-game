import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(10);
  const [counts, setCounts] = useState(7);
  const [result, setResult] = useState(0);
  const [sumText, setSumText] = useState(0);
  const [sumResult, setSumResult] = useState(0);
  const [isResulting, setIsResulting] = useState(false);
  const [resultNumber, setResultNumber] = useState("");
  const [resultText, setResultText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    createSum();
    setResult("");
    inputRef.current.focus();
  }, []);

  function createSum() {
    if (isResulting === true) return;
    setResultText("");
    setSumText("...");
    setResult("");
    inputRef.current.focus();
    setIsResulting(true);
    setTimeout(() => {
      let sumCalc = 0;
      let sumTextVar = "";
      let rdm = 0;
      for (let i = 0; i < counts; i++) {
        rdm = getRndInteger(minNumber, maxNumber);
        sumCalc += rdm;
        if (i <= counts - 2) {
          sumTextVar += rdm + " + ";
        } else {
          sumTextVar += rdm;
        }
      }
      setSumText(sumTextVar);
      setSumResult(sumCalc);
      setIsResulting(false);
    }, 600);
  }

  function sendResult() {
    if (result === "" || isResulting === true) return;
    setIsResulting(true);
    setResult("");
    setResultNumber((result != sumResult) ? "False" : "True!");
    setResultText(sumResult);
    setTimeout(() => {
      setResultNumber("");
      setResultText("");
      createSum();
    }, 800);
  }

  return (
    <>
      <div>
        <h1>Math Game</h1>
        <NumberInput label="Min Number" type="Minnumber" number={minNumber} setNumber={setMinNumber} />
        <NumberInput label="Max Number" type="maxnumber" number={maxNumber} setNumber={setMaxNumber} />
        <NumberInput label="Total Counts" type="totalcounts" number={counts} setNumber={setCounts} />
        <NumberInput label="Result" type="result" number={result} setNumber={setResult} inputRef={inputRef} />
        <Buttons createSum={createSum} sendResult={sendResult} />
        <h2>{resultNumber}</h2>
        <h1>{resultText}</h1>
        <p className="sumText">{sumText}</p>
      </div>
    </>
  )
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function NumberInput({ label, type, number, setNumber, inputRef }) {
  const handleChange = (event) => {
    const onlyNumbers = event.target.value.replace(/[^0-9]/g, '');
    setNumber(onlyNumbers);
  };

  return (
    <>
      <label className="label" htmlFor={type}>{label}</label>
      <input
        id={type}
        className="number-input"
        ref={type === 'result' ? inputRef : null}
        type="text"
        value={number}
        onChange={handleChange}
      />
    </>
  );
}

function Buttons({ createSum, sendResult }) {

  return (
    <>
      <button className="button ok-button" onClick={sendResult}>OK</button>
      <button className="button" onClick={createSum}>New Sum</button>
    </>
  )
}

export default App
