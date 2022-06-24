import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LogbookServiceService } from 'src/app/Services/logbook-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

export interface PeriodicElement {
  id:number;
  Code:String;
  dates: string;
  Immatricule : string;
  Nom_chauffeur: string;
  Heure_sortie: string;
  N_plombage_sortie: number;
  Kilometrage_sortie:number;
  Heure_entre:string;
  N_plombage_entre:number;
  kilometrage_entre:number;
 }
@Component({
  selector: 'app-logbsparcr',
  templateUrl: './logbsparcr.component.html',
  styleUrls: ['./logbsparcr.component.scss']
})
export class LogbsparcrComponent implements OnInit {
  Code:String;
  dates: string;
  Immatricule : string;
  Nom_chauffeur: string;
  Heure_sortie: string;
  N_plombage_sortie: number;
  Kilometrage_sortie:number;
  Heure_entre:string;
  N_plombage_entre:number;
  kilometrage_entre:number;
  dymdm = new Date();
  type:any;
  etat:any

  constructor(public load: LoadserviceService, private logbokk:LogbookServiceService,) { }

  ngOnInit(): void {

  }

  create(){
    if(this.type=="ok"){
      this.etat="true"
    }
    else{this.etat="false"}
    let senddata =
    {
      "code":5000,
     "chaufeur":this.Nom_chauffeur,
      "camion":this.Immatricule,
      "etat-proprete":this.etat ,
      "kilometrageE": this.kilometrage_entre,
      "kilometrageS": this.Kilometrage_sortie,
      "nplombageE": this.N_plombage_entre,
      "nplombageS": this.N_plombage_sortie,
      "date": this.dates,
      "heureE": this.Heure_entre,
      "heureS": this.Heure_sortie,


    };
    console.log(senddata);
    if(this.kilometrage_entre==null || this.dates=="" ||this.Kilometrage_sortie==null || this.Heure_entre==""
    || this.Heure_sortie==""|| this.N_plombage_entre==null|| this.N_plombage_sortie==null )
    {this.load.openSnackBar("Please Fill in all inputs");}
    else {
      console.log(senddata);
      this.logbokk.Insertparcroulant(senddata).subscribe(data=>{
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


