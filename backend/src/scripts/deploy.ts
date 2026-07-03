import { deploy } from 'jv-noorm';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  await deploy();
  process.exit(0);
})();