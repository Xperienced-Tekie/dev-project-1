import Link from "next/link";
import { storiesData } from "../data";

// const storiesData = [
//   { id: 1, image: "/story-images/stories-img-1.jpg", status: "online" },
//   { id: 2, image: "/story-images/stories-img-2.jpg", status: "offline" },
//   { id: 3, image: "/story-images/stories-img-3.jpg", status: "online" },
//   { id: 4, image: "/story-images/stories-img-4.jpg", status: "online" },
//   { id: 5, image: "/story-images/stories-img-5.jpg", status: "online" },
//   { id: 6, image: "/story-images/stories-img-6.jpg", status: "online" },
//   { id: 7, image: "/story-images/stories-img-7.jpg", status: "online" },
//   { id: 8, image: "/story-images/stories-img-8.jpg", status: "online" },
//   { id: 9, image: "/story-images/stories-img-1.jpg", status: "online" },
//   { id: 10, image: "/story-images/stories-img-2.jpg", status: "offline" },
//   { id: 11, image: "/story-images/stories-img-3.jpg", status: "online" },
//   { id: 12, image: "/story-images/stories-img-4.jpg", status: "online" },

//   // Add more stories as needed
// ];

const StoriesList = () => {
  return (
    <section
      className={`grid grid-cols-4 place-items-center gap-4 p-5 mt-10 rounded shadow-md  w-5/6 bg-white mx-auto md:w-1/2`}
    >
      {storiesData.map((stories) => {
        const { id, prof_img } = stories;
        return (
          <Link href={`/stories/${id}`}>
            <div
            // className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
            //   story.status === "online" ? "border-green-500" : "border-red-500"
            // }`}
            >
              <img
                className="w-full h-full object-cover"
                src={prof_img}
                alt="Story"
              />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default StoriesList;
