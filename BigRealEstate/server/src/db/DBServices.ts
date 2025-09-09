import { IFourUpService } from './FourUpDBService';
import { IHoursDBService } from './HoursDBService';
import {
  connectMongo,
  MongoFourUpDBService,
  MongoHoursDBService,
} from './mongo';

class DBServiceManager {
  FourUpDB: IFourUpService;
  HoursDB: IHoursDBService;

  constructor() {
    this.FourUpDB = MongoFourUpDBService;
    this.HoursDB = MongoHoursDBService;
  }

  async connect() {
    await connectMongo();
  }
}

const DBServices = new DBServiceManager();

export default DBServices;
