import Link from "next/link";
import Image from "next/image";
import storiesData from "../data";
import { TopButton } from "../utils";

function StoriesList({ handleHideStory, isHidden }) {
  return (
    <section
      className={`${isHidden ? "block" : "hidden"}  grid md:grid md:grid-cols-4 md:h-auto grid-cols-3 place-items-center md:place-content-start mt-10 md:mt-0 gap-4 p-5 rounded-md shadow-md md:shadow-none md:border-2 md:border-#2D3648 w-5/6  md:bg-[#2D3648] mx-auto md:mx-0 relative md:w-1/2 `}
    >
      <TopButton
        className="absolute w-8 -top-5 left-1/2 duration-200 transform -translate-x-1/2 hover:scale-105 md:hidden"
        onClick={handleHideStory}
      />
      {storiesData.map((stories) => {
        const { id: storyId, profImg } = stories;
        return (
          // {`/stories/${storyId}`}
          <Link href="/stories/story" key={storyId}>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                className={`w-full h-full object-cover `}
                src={profImg}
                alt="Story"
                width={500}
                height={500}
              />
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default StoriesList;
