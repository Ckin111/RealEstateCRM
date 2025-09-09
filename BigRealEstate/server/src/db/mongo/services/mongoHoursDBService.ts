import { IHour } from '../../../interfaces';
import { Utils } from '../../../utils';
import { IHoursDBService } from '../../HoursDBService';
import { HourClass, HoursModel } from '../models';

const getHour = async (hourId: string) => {
  const hour = await HoursModel.findOne({ hourId });
  if (!hour) throw new Error(`Could not found tracked hour ${hourId}`);
  return hour.toClass();
};

const getHours = async (hourIds: string[]) => {
  const hours = await Promise.all(
    hourIds.map(async (hourId) => await getHour(hourId)),
  );
  return hours;
};

const getAll = async () => {
  return (await HoursModel.find({})).map((hour) => hour.toClass());
};

const createHour = async (hourData: IHour) => {
  const hourClass = new HourClass()
    .setHourId(Utils.genId())
    .setHours(hourData.hours)
    .setDate(hourData.date)
    .setDeveloper(hourData.developer);

  hourClass.mustBeValid();

  await HoursModel.create([hourClass]);

  return hourClass;
};

const editHour = async (hourId: string, hourData: IHour) => {
  const hourClass = await getHour(hourId);

  hourClass
    .setHours(hourData.hours)
    .setDeveloper(hourData.developer)
    .setDate(hourData.date);

  hourClass.mustBeValid();

  await HoursModel.findOneAndUpdate({ hourId }, hourClass);

  return hourClass;
};

const deleteHour = async (hourId: string) => {
  await getHour(hourId);
  await HoursModel.deleteOne({ hourId });
  return hourId;
};

const MongoHoursDBService: IHoursDBService = {
  getHour: getHour,
  getHours: getHours,
  getAll: getAll,
  createHour: createHour,
  editHour: editHour,
  deleteHour: deleteHour,
};

export default MongoHoursDBService;
