import { LogbookServiceService } from './../../../Services/logbook-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-logbfournisseuraz',
  templateUrl: './logbfournisseuraz.component.html',
  styleUrls: ['./logbfournisseuraz.component.scss']
})
export class LogbfournisseurazComponent implements OnInit {
  Entrepot: any="";
  dates: any="";
  Heure_arrive: any="";
  Heure_entre: any="";
  Heure_depart: any="";
  fournisseur: any;

  constructor(private logbokk:LogbookServiceService, public load: LoadserviceService ) { }

  ngOnInit(): void {
  }
  create(){
    let senddata =
    {
      "fournisseur":this.fournisseur,
      "entrepot": this.Entrepot,
      "date": this.dates,
      "Heure_arrive": this.Heure_arrive,
      "Heure_entre": this.Heure_entre,
      "Heure_depart": this.Heure_depart,

    };
    console.log(senddata);
    if(this.Entrepot=="" || this.dates=="" ||this.Heure_arrive=="" || this.Heure_entre=="" || this.Heure_depart=="" )
    {this.load.openSnackBar("Please Fill in all inputs");}
    else {
      console.log(senddata);
      this.logbokk.InsertReception(senddata).subscribe(data=>{
        console.log(data)

        alert("ajouter")

        window.location.reload()
      },error=>{
        console.log(error)
        alert("error")
      });
     }
  }
  }



















