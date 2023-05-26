export type UniverseType = {
  name: string;
  description: string;
  objectID: string | number;
};

export type UniverseProps = {
  first?: boolean;
  name: string;
  description: string;
  objectID: string | number;
  selected: boolean;
};
