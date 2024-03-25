import ChatAiHeader from "./ChatAiHeader";
import rectangle from "../../../../public/rectangle.png";
import iconInfo from "../../../../public/icon-info.png";
import ChatAiInput from "./ChatAiInput";

function page() {
  return (
    <div>
      <section className="h-full bg-slate-900">
        <div className="top-0">
          <ChatAiHeader iconInfo={iconInfo} iconUser={rectangle} />
        </div>
        <div className="bottom-0">
          <ChatAiInput />
        </div>
      </section>
    </div>
  );
}

export default page;
