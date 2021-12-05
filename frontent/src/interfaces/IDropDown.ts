import { Props } from "react-select";
export interface IOption {
  value: string;
  label: string;
}

export interface IOptions extends Props {
  options: IOption[];
}
