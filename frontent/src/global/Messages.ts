import { IMessage } from "../interfaces/IMessage";
let messages = [] as IMessage[];

function getMessages() {
  return messages;
}

function addMessages(message: IMessage) {
  messages.push(message);
}

function setMessages(newMessages: IMessage[]) {
  messages = newMessages;
}

export { getMessages, setMessages, addMessages };
