import { Injectable } from '@angular/core';

const APP_CONFIG = {
  server_host: 'mpcore-server-1',
  server_protocol: 'http://',
  server_port: '4000'
};

@Injectable()
export class AppConfig {
  private configs = APP_CONFIG;

  public get(key: any) {
    return this.configs[key];
  }

  public getServer() {
    const c = this.configs;
    const res = `${c['server_protocol']}${c['server_host']}:${c[
      'server_port'
    ]}/`;
    return res;
  }
}
