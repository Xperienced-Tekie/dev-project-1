import Profile from "./[ID]";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/data");
  const data = await res.json();
  const paths = data.map((path) => {
    return {
      params: { id: path.id.toString() },
    };
  });
  return {
    paths,
    // fallback: false,
  };
};

export const fetchData = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:8000/data/" + id); 
  const data = await res.json(); 
  return {
    props: { user: data },
  };
};

const Info = ({ user }) => {
  return (
    <>
      <Profile />
      <div>{user.name}</div>
      <div>{user.category}</div>
      <div>{user.id}</div>
    </>
  );
};

export default Info;
