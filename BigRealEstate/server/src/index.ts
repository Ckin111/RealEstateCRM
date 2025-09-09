import app from './app';
import { Config } from './config';
import DBServices from './db/DBServices';
import { Log } from './utils';

DBServices.connect().then(() => {
  Log.green(`Database connected...`, false);
  app.listen(Config.port, () => {
    Log.green(`Server running on port ${Config.port}`);
  });
});
