import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink } from '@angular/router-deprecated';
import { TicketsList } from './ticketsList/ticketsList.ts';

@Component({
  selector: 'manager',
  templateUrl: '/client/imports/manager/manager.html',
  directives: [ROUTER_DIRECTIVES, RouterLink]
})

@RouteConfig([
  { path: '/', as: 'TicketsList', component: TicketsList, useAsDefault: true }
])

export class Manager extends MeteorComponent {}
