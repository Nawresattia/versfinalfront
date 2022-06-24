import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CamionServiceService } from 'src/app/Services/camion-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  id: number;
  immatricule: string;
  type: string;
  taille: string;
  Chauffeur: string;
  datecreation: string;
}


@Component({
  selector: 'app-ajouter-camion',
  templateUrl: './ajouter-camion.component.html',
  styleUrls: ['./ajouter-camion.component.scss'],
  providers:[DatePipe]
})
export class AjouterCamionComponent implements OnInit {

  immatricule: any="";
  type: any="";
  taille: any="";
  chauffeur: any;
  cauf:string
  listechau:any=[];
  datecreat:any;
 date=new Date();
  dataSource: any;
  constructor(private datepipe:DatePipe,

  public load: LoadserviceService,private camionservice:CamionServiceService,private router:Router)
  {
    this.datecreat=this.datepipe.transform(this.date,"yyyy-MM-dd")
    this.camionservice.getAllchau().subscribe(data=>{
      console.log(data)
      this.listechau=data;
      console.log(this.listechau)
      console.log(this.listechau)
    },error=>console.log(error));
   }

   ngOnInit(): void {
this.getAll()
  }
  getAll (){
    this.load.get("AllCamion").then(
      (data:any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}
  close() {
    window.location.reload()
  }
  create(){

    let senddata =
    {
      "immatricule": this.immatricule,
      "type": this.type,
      "taille": this.taille,
      "chauffeur": this.chauffeur,
      "datecreation": this.datecreat,
    };
    console.log(senddata);
    if(this.immatricule=="" || this.type=="" || this.taille==""|| this.chauffeur==""  )
    {this.load.openSnackBar("Veuillez remplir toutes les entrées");}
   else {
    console.log(senddata);
    this.camionservice.insertCammion(senddata).subscribe(data=>{
      console.log(data)

      alert("ajouter")
      this.close ()
    },error=>{
      console.log(error)
      alert("error")
    });

   }
  }
}
