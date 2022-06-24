import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CamionServiceService } from 'src/app/Services/camion-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';
export interface PeriodicElement {
  id: number;
  immatricule: string;
  type: string;
  taille: string;
  Chauffeur: string;
  datecreation: string;
}

@Component({
  selector: 'app-modifier-camion',
  templateUrl: './modifier-camion.component.html',
  styleUrls: ['./modifier-camion.component.scss']
})

export class ModifierCamionComponent implements OnInit {

  id:any;
  immatricule: any;
  type: any;
  taille: any;
  chauffeur: any;
  datecreation: any;
  dataSource: any;
  listechau: any;



  constructor(public dialogRef: MatDialogRef<ModifierCamionComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private camionservice:CamionServiceService ,public load: LoadserviceService) {
      console.log(data);


    }
    ngOnInit(): void {

      this.camionservice.getCamionById(this.data).subscribe(cam=>{
        console.log(cam)
        this.taille=cam.taille
        this.datecreation=cam.datecreation
        this.chauffeur=cam.chauffeur
        this.immatricule=cam.immatricule
        this.id=cam.id
        this.type=cam.type
      },error=>console.log(error));

    this.camionservice.getAllchau().subscribe(data=>{
      console.log(data)
      this.listechau=data;
      console.log(this.listechau)
      console.log(this.listechau)
    },error=>console.log(error));

    }
    getAll (){
      this.load.get("AllCamion").then(
        (data:any) => {
          //this.ELEMENT_DATA=data;
          console.log(data);
          this.dataSource = new MatTableDataSource<PeriodicElement>(data);
        }
    );}
  affiche(){

  }
  close() {
    this.dialogRef.close();
    this.getAll()
    window.location.reload()
  }

   update() {
    console.log(this.data)
    let senddata =
    {

      "camionid": this.data,
      "immatricule": this.immatricule,
      "type": this.type,
      "taille": this.taille,
      "chauffeur": this.chauffeur,
      "datecreation": this.datecreation,

    };


    this.camionservice.updateCamion(senddata,this.data).subscribe(data=>{
      console.log(data)
      this.load.openSnackBar("Mise à jour effectué avec succé");
       this.close();
    },error=>{ console.log(error)
      this.load.openSnackBar("Erreur");})

  }



}
