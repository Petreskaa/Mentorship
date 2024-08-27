export type StateTypes = "to-do" | "in-progress" | "in-testing" | "done";

export type ItemType = {
  id: number;
  title: string;
  points: number;
  description: string;
  state: StateTypes;
};
