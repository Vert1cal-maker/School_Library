console.log("Cron service started");

import cron from 'node-cron';
import DataBaseRepository from './DataBaseRepository';


cron.schedule('* * * * *', DataBaseRepository.createDatabaseDump);
cron.schedule('* * * * ', DataBaseRepository.removeOrphansFromDatabase);
