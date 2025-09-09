import { IHour } from '../interfaces';

export type IHoursDBService = {
  getHour: (hourId: string) => Promise<IHour>;
  getHours: (hourIds: string[]) => Promise<IHour[]>;

  getAll: () => Promise<IHour[]>;

  createHour: (hour: IHour) => Promise<IHour>;
  editHour: (hourId: string, hour: IHour) => Promise<IHour>;

  deleteHour: (hourId: string) => Promise<string>;
};
