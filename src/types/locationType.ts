export interface ILocation {
  pathname: string;
  search: string;
  hash: string;
  state: {
    from: string;
  };
  key: string;
}
