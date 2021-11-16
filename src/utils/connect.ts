import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

function connect() {
  const dbUri = config.get<string>('dbUri');

  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info('DB connected');
    })
    .catch((error) => {
      logger.error('Could not connect to DB');
      process.exit(1);
    });
}

export default connect;
