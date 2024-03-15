"use client";

import PageId from "./PageId";

function Page({ params }) {
  return (
    <div>
      <div> my post : {params.Test}</div>
      <PageId />
    </div>
  );
}

export default Page;
