import { IFourUp } from '../../../interfaces';
import UniqueId from '../../../utils/UniqueId';
import { IFourUpService } from '../../FourUpDBService';
import { FourUpClass, FourUpModel } from '../models';

const getFourUp = async (fourUpId: string) => {
  const fourUp = await FourUpModel.findOne({ fourUpId });
  if (!fourUp) throw new Error(`Could not found tracked hour ${fourUpId}`);
  return fourUp.toClass();
};

const getFourUps = async (fourUpIds: string[]) => {
  return await Promise.all(
    fourUpIds.map(async (fourUpId) => await getFourUp(fourUpId)),
  );
};

const getAll = async () => {
  return (await FourUpModel.find({})).map((fourUpClass) =>
    fourUpClass.toClass(),
  );
};

const createFourUp = async (fourUpData: IFourUp) => {
  const fourUpClass = new FourUpClass()
    .setClass(fourUpData)
    .setFourUpId(UniqueId());

  fourUpClass.mustBeValid();
  await FourUpModel.create([fourUpClass]);

  return fourUpClass;
};

const editFourUp = async (fourUpId: string, fourUpData: IFourUp) => {
  const fourUpClass = await getFourUp(fourUpId);

  fourUpClass.setClass(fourUpData).setFourUpId(fourUpId);

  fourUpClass.mustBeValid();

  await FourUpModel.findOneAndUpdate({ fourUpId }, fourUpClass);

  return fourUpClass;
};

const deleteFourUp = async (fourUpId: string) => {
  await getFourUp(fourUpId);
  await FourUpModel.deleteOne({ fourUpId });
  return fourUpId;
};

const MongoFourUpDBService: IFourUpService = {
  getFourUp: getFourUp,
  getFourUps: getFourUps,

  getAll: getAll,

  createFourUp: createFourUp,
  editFourUp: editFourUp,
  deleteFourUp: deleteFourUp,
};

export default MongoFourUpDBService;
