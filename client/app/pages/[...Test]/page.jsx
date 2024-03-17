"use client";

import PageId from "./PageId";
// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   const paths = data.map((user) => {
//     return {
//       params: { id: user.id.tostring() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps(context) {
//   const Test = context.params.id;
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await res.json();
//   return {
//     props: { users: data },
//   };
// }
function Page({ params }) {
  return (
    <div>
      <div> my post : {params.Test}</div>
      {/* <div> my post : {user.Test}</div> */}
      {/* <div> my post : {user.name}</div> */}
      <PageId />
    </div>
  );
}

export default Page;
