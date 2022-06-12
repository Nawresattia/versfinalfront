import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-logbfournisseuraz',
  templateUrl: './logbfournisseuraz.component.html',
  styleUrls: ['./logbfournisseuraz.component.scss']
})
export class LogbfournisseurazComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  create(){
    
    };
  }
  export class CreatelogbookgrDialog {
    Entrepot: any="";
    date: any="";
    Heure_arrive: any="";
    Heure_entre: any="";
    Heure_depart: any="";
    
    constructor(public dialogRef: MatDialogRef<CreatelogbookgrDialog>,
      
    public load: LoadserviceService) { }
    close() {
      this.dialogRef.close();
    }
  
  create() {
    
    let senddata =
    {
      "Entrepot": this.Entrepot,
      "date": this.date,
      "Heure_arrive": this.Heure_arrive,
      "Heure_entre": this.Heure_entre,
      "Heure_depart": this.Heure_depart,
      
    };
    console.log(senddata);
    if(this.Entrepot=="" || this.date=="" ||this.Heure_arrive=="" || this.Heure_entre=="" || this.Heure_depart=="" )
    {this.load.openSnackBar("Please Fill in all inputs");}
   else {
    console.log(senddata);
    this.load.post(senddata, "CreateReception").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Create Done"); }
        else this.load.openSnackBar("Error");

      });
   }
  }
}
