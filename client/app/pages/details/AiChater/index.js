import ChatAiHeader from "./ChatAiHeader";
import rectangle from "../../../../public/rectangle.png";
import iconInfo from "../../../../public/icon-info.png";
import ChatAiInput from "./ChatAiInput";

function page() {
  return (
    <div className="absolute border border-zinc-600 h-full bg-slate-900">
      <section className=" w-full">
        <div className="top-0  shadow-xl ">
          <ChatAiHeader iconInfo={iconInfo} iconUser={rectangle} />
        </div>

        <div className=" z-[-10]">
          <ChatAiInput className="absolute bottom-0" />
        </div>
      </section>
    </div>
  );
}

export default page;
