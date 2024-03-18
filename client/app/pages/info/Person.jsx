import Image from "next/image";
import Link from "next/link";
import userImage from "../../../public/StatusYes.png";

function Person() {
  return (
    <div className=" ">
      {/* container section */}
      <section className="max-w-[24rem] min-h-[90vh]  bg-slate-800 space-y-[2rem] px-[1rem] text-slate-200 ">
        <Link href="/">
          <button
            className=" m-2 border bg-violet-800 font-bold hover:bg-violet-600 transition"
            type="button"
          >
            {" "}
            a-icon
          </button>
        </Link>
        {/* header for image and image name */}
        <header className="space-y-[1.5rem]  p-1 ">
          <Image
            src={userImage}
            height="140"
            width="151"
            alt="imageName"
            className="m-auto"
          />
          <h4 className="capitalize text-center font-bold">Warmarth Fradday</h4>
        </header>
        {/* user information and bio */}
        <article className="px-2 space-y-[1rem]">
          <h5 className="font-bold capitalize">short bio</h5>
          <p className="tracking-widest text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            ipsum porro. Sequi, sit. Voluptates accusantium tenetur perspiciatis
            voluptatibus error nulla odio aperiam, numquam mollitia esse, totam
            praesentium repellendus suscipit fugit.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Person;
