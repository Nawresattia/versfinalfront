import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChauffeurServiceService } from 'src/app/Services/chauffeur-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-ajouter-chauffeur',
  templateUrl: './ajouter-chauffeur.component.html',
  styleUrls: ['./ajouter-chauffeur.component.scss'],
  providers:[DatePipe]
})
export class AjouterChauffeurComponent implements OnInit {

  nomchauffeur: any="";
  prenomchauffeur: any="";
  site:any="";
  cin: any="";
  tel: any="";
  createdat:any="";
  date=new Date();
  constructor(private datepipe:DatePipe,public dialogRef: MatDialogRef<AjouterChauffeurComponent>,

  public load: LoadserviceService, private chauffeurservice:ChauffeurServiceService ) {
    this.createdat=this.datepipe.transform(this.date,"yyyy-MM-dd")
  }
  close() {
    this.dialogRef.close();
  }
  create(){
    console.log(this.nomchauffeur)
    let senddata =
    {
       "nomchauffeur": this.nomchauffeur,
      "prenomchauffeur": this.prenomchauffeur,
      "site": this.site,
      "cin": this.cin,
      "createdat":this.createdat,
      "tel":this.tel,

    };
    console.log(senddata);
    if(this.nomchauffeur=="" || this.prenomchauffeur=="" || this.site==""|| this.cin==""  )
    {this.load.openSnackBar("Veuillez remplir toutes les entrées");}
   else {
    console.log(senddata);
    this.chauffeurservice.insertChauffeur(senddata).subscribe(data=>{
      console.log(data)

      alert("ajouter")
      this.close ()
      window.location.reload()
    },error=>{
      console.log(error)
      alert("error")
    });

   }
  }

  ngOnInit(): void {
  }

}
