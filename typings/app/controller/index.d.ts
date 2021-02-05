// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/base_controller';
import ExportCookies from '../../../app/controller/cookies';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportNext from '../../../app/controller/next';
import ExportRegister from '../../../app/controller/register';
import ExportTest from '../../../app/controller/test';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    cookies: ExportCookies;
    home: ExportHome;
    login: ExportLogin;
    next: ExportNext;
    register: ExportRegister;
    test: ExportTest;
  }
}
