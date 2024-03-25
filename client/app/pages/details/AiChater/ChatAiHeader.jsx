import Image from "next/image";
import { TextContainer } from "../../../../components/reuseables/Avatar";

function ChatAiHeader({ iconInfo, iconUser }) {
  return (
    <div>
      <header className="bg-red-400 flex items-center justify-between w-full">
        <Image alt="userIcon" src={iconUser} />
        <TextContainer text="chat bot i1" />
        <Image alt="Icon-info" src={iconInfo} />
      </header>
    </div>
  );
}

export default ChatAiHeader;
