import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    AppModule, // 客户端应用的 AppModule
    ServerModule, // 服务端的 Angular 模块
    ModuleMapLoaderModule, // 用于实现服务端的路由的惰性加载
    ServerTransferStateModule, // 在服务端导入，用于实现将状态从服务器传输到客户端
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
