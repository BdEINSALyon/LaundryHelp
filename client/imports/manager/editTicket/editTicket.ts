import { Component, NgZone }   from '@angular/core';
import { Tickets }     from '../../../../collections/tickets';
import { Mongo }       from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { RouteParams, RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'editTicket',
  templateUrl: '/client/imports/manager/editTicket/editTicket.html',
  directives: [RouterLink]
})
export class EditTicket extends MeteorComponent {

  ticket: Ticket;
  sent:boolean;

  constructor(params: RouteParams, private zone:NgZone) {
    super();
    let ticketId = params.get('ticketId');


    this.subscribe('ticket', ticketId, () => {
      this.autorun(() => {
        this.ticket = Tickets.findOne(ticketId);
      },   true);
    });

    document.title = "Editer un ticket - BDE - Support des laveries";
  }

  send() {
    let t = this.ticket;

    if(!t.nbTokensToGive && !t.answerComment) {
      alert("Merci de rentrer un commentaire ou un nombre de jetons à rendre.");
      return;
    }
    else if(!t.nbTokensToGive)
      t.nbTokensToGive=0;
    else if(!t.answerComment)
      t.answerComment="";


    this.call('sendAnswer', t, (error) => {


      this.zone.run(() => {
        if (error) {
          alert(`Une erreur est survenue : ${error}.`);
          return;
        }
        this.sent=true;
      });

    });
  }
}
