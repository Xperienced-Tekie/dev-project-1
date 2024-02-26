
const dummyUsers = require("./dummyUsers");

const dummyMessages = [
  {
    id: 1,
    senderId: dummyUsers[0].id,
    recipientId: dummyUsers[1].id,
    content: "Hello, Jane!",
  },
  {
    id: 2,
    senderId: dummyUsers[1].id,
    recipientId: dummyUsers[0].id,
    content: "Hi, John! How are you?",
  },
];

module.exports = dummyMessages;


