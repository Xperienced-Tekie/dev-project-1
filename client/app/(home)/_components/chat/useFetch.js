import { useEffect, useState } from "react";

const UseFetch = () => {
  const [check, setCheck] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((fetchedData) => setCheck(fetchedData));
  }, []);

  return { check };
};

export default UseFetch;
