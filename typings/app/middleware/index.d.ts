// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCsrf = require('../../../app/middleware/csrf');
import ExportGzip = require('../../../app/middleware/gzip');
import ExportJwt = require('../../../app/middleware/jwt');
import ExportRobot = require('../../../app/middleware/robot');

declare module 'egg' {
  interface IMiddleware {
    csrf: typeof ExportCsrf;
    gzip: typeof ExportGzip;
    jwt: typeof ExportJwt;
    robot: typeof ExportRobot;
  }
}
