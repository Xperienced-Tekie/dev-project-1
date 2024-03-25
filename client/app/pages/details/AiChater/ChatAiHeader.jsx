import Image from "next/image";
import { TextContainer } from "../../../../components/reuseables/Avatar";

function ChatAiHeader({ iconInfo, iconUser }) {
  return (
    <div>
      <section>
        <header className="bg-red-400 flex items-center justify-between">
          <Image alt="userIcon" src={iconUser} />
          <TextContainer text="chat bot i1" />
          <Image alt="Icon-info" src={iconInfo} />
        </header>
      </section>
    </div>
  );
}

export default ChatAiHeader;
