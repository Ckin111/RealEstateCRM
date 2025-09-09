import { IFourUp } from '../interfaces';

export type IFourUpService = {
  getFourUp: (fourUpId: string) => Promise<IFourUp>;
  getFourUps: (fourUpIds: string[]) => Promise<IFourUp[]>;

  getAll: () => Promise<IFourUp[]>;

  createFourUp: (fourUpData: IFourUp) => Promise<IFourUp>;
  editFourUp: (fourUpId: string, fourUpData: IFourUp) => Promise<IFourUp>;

  deleteFourUp: (fourUpId: string) => Promise<string>;
};
