import { TURNS } from "./constants";
export type boardType = (typeof TURNS.X | typeof TURNS.O | null)[];
