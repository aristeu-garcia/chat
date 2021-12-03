import { IMessage } from "../interfaces/IMessage";
export class Messages {
  public static messages = [] as IMessage[];

  public static addMessages(message: IMessage) {
    this.messages.push(message);
  }

  public static getMessages() {
    return this.messages;
  }

  public static setMessages(newMessages: IMessage[]): void {
    this.messages = newMessages;
  }
}

// import { IMessage } from "../interfaces/IMessage";
// let messages: IMessage[];

// function getMessages() {
//   return messages;

// function addMessages(message: IMessage) {
//   messages.push(message);
// }

// function setMessages(newMessages: IMessage[]) {
//   messages = newMessages;
// }

// export { getMessages, setMessages, addMessages, messages };
