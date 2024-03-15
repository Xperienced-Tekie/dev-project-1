import Image from "next/image";
import Link from "next/link";
import userImage from "../../../public/rectangle.png";

function Person() {
  return (
    <div>
      <section>
        <header>
          <Image src={userImage} height="40" width="40" alt="imageName" />
          <h4>Warmarth Fradday</h4>
        </header>
        <article>
          <h5>show information</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            ipsum porro. Sequi, sit. Voluptates accusantium tenetur perspiciatis
            voluptatibus error nulla odio aperiam, numquam mollitia esse, totam
            praesentium repellendus suscipit fugit.
          </p>
        </article>
      </section>
      <Link href="/">
        <p className="p-2 border m-1 bg-violet-800 rounded-b-xl font-bold hover:bg-violet-600 transition">
          home
        </p>
      </Link>
    </div>
  );
}

export default Person;
