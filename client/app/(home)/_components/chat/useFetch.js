import { useEffect, useState } from "react";

const UseFetch = () => {
  const [check, setCheck] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data") // to run the server npx json-server --watch data/db.json --port 8000
      .then((res) => res.json())
      .then((fetchedData) => setCheck(fetchedData));
  }, []);

  return { check };
};

export default UseFetch;
