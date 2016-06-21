import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import { UserForm } from './imports/user-form/user-form.ts';
import { Manager } from './imports/manager/manager.ts';
import '../collections/methods.ts';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', as: 'UserForm', component: UserForm , useAsDefault: true},
  { path: '/manager/...', as: 'Manager', component: Manager }
])

class LaundryHelp {}

bootstrap(LaundryHelp, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
