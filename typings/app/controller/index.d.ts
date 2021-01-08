// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportNext from '../../../app/controller/next';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    next: ExportNext;
  }
}
