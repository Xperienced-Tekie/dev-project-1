"use client";

// import { useQuery } from "react-query";

// import { fetchTodos } from "../../../actions/messages";
import FriendSearcher from "./chat/FriendSearcher";

function InfoPage() {
  // eslint-disable-next-line prettier/prettier
  // const { refetch } = useQuery("todos", fetchTodos);

  return (
    <div className=" ">
      <FriendSearcher />
    </div>
  );
}

export default InfoPage;
