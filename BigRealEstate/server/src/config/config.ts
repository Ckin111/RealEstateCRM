import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;

  db: {
    mongo: {
      dbName: string;
      id: string;
      pwd: string;
    };
  };
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'dev',

  db: {
    mongo: {
      dbName: process.env.MONGO_DBNAME || '',
      id: process.env.MONGO_ID || '',
      pwd: process.env.MONGO_PWD || '',
    },
  },
};

export default config;
