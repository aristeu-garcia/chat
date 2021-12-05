export interface IMessage {
  user?: string | number;
  text: string;
  room?: string;
  ownedByCurrentUser?: string;
}
export interface IText {
  body: string;
}
export interface IOption {
  value: string;
  label: string;
}

export interface IMessageObject {
  ownedByCurrentUser?: string | undefined;
  body: string;
  room?: string;
}

export interface ISendMessage {
  body: string;
  room: string;
}