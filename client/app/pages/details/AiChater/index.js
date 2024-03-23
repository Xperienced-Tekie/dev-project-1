import ChatAiHeader from "./ChatAiHeader";
import rectangle from "../../../../public/rectangle.png";
import iconInfo from "../../../../public/icon-info.png";
import ChatAiInput from "./ChatAiInput";
function page() {
  return (
    <div>
      <section>
        <ChatAiHeader iconInfo={iconInfo} iconUser={rectangle} />
        <ChatAiInput />
      </section>
    </div>
  );
}

export default page;
