import { Component }   from '@angular/core';
import { Laundries }     from '../../../collections/laundries';
import { Tickets }     from '../../../collections/tickets';
import { Mongo }       from 'meteor/mongo';
import { RouterLink }  from '@angular/router-deprecated';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

@Component({
  selector: 'user-form',
  templateUrl: '/client/imports/user-form/user-form.html',
  directives: [RouterLink]
})
export class UserForm {
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
  constructor() {
    this.laundries = Laundries.find();

    let fb = new FormBuilder();

    this.userInfosForm = fb.group({
      firstName: [''],
      lastName: [''],
      room: [''],
      phone: [''],
      email: ['', Validators.required],
    });
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

  sendTicket(userForm) {
    alert("wow");
  if (this.userInfosForm.valid) {
    this.sendState="Votre demande est en cours de traitement...";
    var that=this;
    Tickets.insert({
      date: new Date(),
      laundry: this.selectedLaundry,
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
    }, function() {
      that.sendState=true;
    });


  }
}
}
