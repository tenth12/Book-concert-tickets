// app/types.ts
export type User = {
  id: string;
  username: string;
  password: string;
  bookedConcerts: string[];
};

export const mockConcerts = [
  { id: "1", name: "PLAVE Asia Tour" },
  { id: "2", name: "BLACKPINK WORLD TOUR" },
  { id: "3", name: "MAGICMAN 2 WORLD TOUR" },
];
