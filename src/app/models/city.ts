import { State } from "./state";

export class City {
  id!: number;
  name!: string;
  state!: number | State;
  state_name!: string;
}
