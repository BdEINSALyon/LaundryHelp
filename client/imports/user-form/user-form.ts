import { Component, NgZone }   from '@angular/core';
import { Laundries }     from '../../../collections/laundries';
import { Tickets }     from '../../../collections/tickets';
import { Mongo }       from 'meteor/mongo';
import { RouterLink }  from '@angular/router-deprecated';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { MeteorComponent } from 'angular2-meteor';

@Component({
  selector: 'user-form',
  templateUrl: '/client/imports/user-form/user-form.html',
  directives: [RouterLink]
})
export class UserForm extends MeteorComponent {
  problemTypes: Array<string> =  [
    "Le linge est bloqué dans la machine",
    "J'ai mis un jeton mais le cycle n'a pas démarré",
    "La laverie est innondée",
    "Le monnayeur a été fracturé"];


    laundries: Mongo.Cursor<Laundry>;
    selectedLaundry: Laundry;
    selectedMachine: string;
    selectedProblemType: string = this.problemTypes[0];
    inputProblemType: string;
    comment: string;
    step3Filled: boolean;
    userInfosForm: ControlGroup;
    sendState: boolean;

    zone: NgZone;

    constructor(zone:NgZone) {
      super();
      this.zone=zone;

      this.subscribe('laundries', () => {
        this.laundries = Laundries.find();
      }, true);

      let fb = new FormBuilder();

      this.userInfosForm = fb.group({
        firstName: [''],
        lastName: [''],
        room: [''],
        phone: [''],
        email: ['', Validators.compose([Validators.required, emailValidator])]
      });
      this.sendState=false;
      this.comment="";
      this.inputProblemType="";
    }

    onSelectLaundry(laundry:Laundry) {
      this.selectedLaundry=laundry;
    }
    onSelectMachine(machine:string) {
      if(this.selectedLaundry)
      this.selectedMachine=machine;
    }
    onFilledStep3() {
      this.step3Filled=true;
    }


    onRemoveLaundry() {
      this.selectedLaundry=null;
      this.selectedMachine=null;
      this.step3Filled=false;
    }
    onRemoveMachine() {
      this.selectedMachine=null;
      this.step3Filled=false;
    }
    onRemoveStep3() {
      this.step3Filled=false;
    }

    setSendState(state: boolean) {
      console.log("oui");
      this.sendState=state;
    }
    sendTicket(userForm) {
      if (this.userInfosForm.valid) {
        let ticket : Ticket = {
          date: null, //Will be inserted by the server
          laundry: this.selectedLaundry.name,
          machine: this.selectedMachine,
          problem: this.selectedProblemType,
          comment: this.comment,
          person: {
            firstName: userForm.firstName,
            lastName: userForm.lastName,
            room: userForm.room,
            phone: userForm.phone,
            email: userForm.email
          }
        };

        this.call('sendTicket', ticket, (error) => {

          this.zone.run(() => {
            if (error) {
              alert(`Une erreur est survenue : ${error}.`);
              this.sendState=false;
              return;
            }
            this.sendState=true;
          });

        });
      }
    }
  }

  function emailValidator(control) {
    var EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!EMAIL_REGEXP.test(control.value)) {
      return {invalidEmail: true};
    }
  }
