import { useEffect, useState } from "react";

export const useFetch = () => {
  const [check, setCheck] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading state to true initially
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/data");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCheck(data);
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        setError(error);
        setLoading(false); // Set loading state to false on error
      }
    };

    fetchData(); // Call fetchData function to trigger data fetching
  }, []);

  return { check, loading, error }; // Return check, loading, and error states
};

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json()
//   return{
//     props:{ data}
//   }
// };
