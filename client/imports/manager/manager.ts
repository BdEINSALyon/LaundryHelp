import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink } from '@angular/router-deprecated';
import { TicketsList } from './ticketsList/ticketsList.ts';
import { EditTicket } from './editTicket/editTicket.ts';

@Component({
  selector: 'manager',
  templateUrl: '/client/imports/manager/manager.html',
  directives: [ROUTER_DIRECTIVES, RouterLink]
})

@RouteConfig([
  { path: '/', as: 'TicketsList', component: TicketsList, useAsDefault: true },
  { path: '/edit/:ticketId', as: 'EditTicket', component: EditTicket }
])

export class Manager extends MeteorComponent {}
