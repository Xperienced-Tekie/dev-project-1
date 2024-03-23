import { useEffect, useState } from "react";

const useFetch = () => {
  const [check, setCheck] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCheck(data))
      .catch((error) => error);
  }, []);
  // Return check state
  return { check };
};

export default useFetch;
