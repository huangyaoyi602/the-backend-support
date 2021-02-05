// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportNews from '../../../app/service/News';
import ExportTest from '../../../app/service/Test';
import ExportWaitNew from '../../../app/service/WaitNew';
import ExportLogin from '../../../app/service/login';
import ExportRegister from '../../../app/service/register';
import ExportSome from '../../../app/service/some';

declare module 'egg' {
  interface IService {
    news: AutoInstanceType<typeof ExportNews>;
    test: AutoInstanceType<typeof ExportTest>;
    waitNew: AutoInstanceType<typeof ExportWaitNew>;
    login: AutoInstanceType<typeof ExportLogin>;
    register: AutoInstanceType<typeof ExportRegister>;
    some: AutoInstanceType<typeof ExportSome>;
  }
}
