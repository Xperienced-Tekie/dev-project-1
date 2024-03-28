export default async function Page({ params }) {
  const route = params.id;
  const res = await fetch(`http://localhost:8000/data/${route}`);
  if (!res.ok) {
    if (res.status === 404) {
      return <div>Page not found</div>;
    }
    return <div>Error loading data for route {route}</div>;
  }
  const data = await res.json();
  return (
    <div>
      {/* My Post: {params.route} */}
      <h1>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </h1>
      {/* <div>{post.title}</div> */}
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const route = params.route;
//   const res = await fetch("http://localhost:8000/data/" + route);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }
// export async function getStaticPaths() {
//   try {
//     const res = await fetch(`http://localhost:8000/data`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();
//     const paths = data.map((post) => {
//       return {
//         params: {
//           post: post.id.toString(),
//         },
//       };
//     });
//     return {
//       paths,
//       fallback: false,
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// }

// export  async function getServerSideProps (context) {
//   const route = context.params.route;
//   const res = await fetch("http://localhost:8000/data/" + route);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       post: data,
//     },
//   };
// };
