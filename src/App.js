import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //effect with empty dependency array
  //run after first render only
  // useEffect(() => {
  //   const fetchData = () => {
  //     console.log("fetch data");
  //   };
  //   fetchData();
  // }, []);

  //effect with dependency array
  //run after first render
  //run if dependency has been changed
  // useEffect(() => {
  //   const fetchData = () => {
  //     console.log("fetch data");
  //   };
  //   fetchData();
  // }, [name]);

  //effect without dependency array
  //after first render
  //run if any change happen
  useEffect(() => {
    const fetchData = () => {
      console.log("fetch data");
    };
    fetchData();
  });

  return (
    <div className="App">
      <label>Name </label>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <br />
      <label>phone </label>
      <input onChange={(e) => setPhone(e.target.value)} value={phone} />

      <p>
        name: {name} <br /> phone: {phone}
      </p>
    </div>
  );
}