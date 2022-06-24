import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChauffeurServiceService } from 'src/app/Services/chauffeur-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-modifier-chauffeur',
  templateUrl: './modifier-chauffeur.component.html',
  styleUrls: ['./modifier-chauffeur.component.scss']
})
export class ModifierChauffeurComponent implements OnInit {



  nomchauffeur: any;
  prenomchauffeur: any;
  site:any;
  cin: any;
  tel: any;
  createdat:any;


  constructor(public dialogRef: MatDialogRef<ModifierChauffeurComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private chauffeurservice:ChauffeurServiceService , public load: LoadserviceService) {
      console.log(data);
      this.chauffeurservice.getChauffeurById(this.data).subscribe(chau=>{
        console.log(chau)
        this.nomchauffeur=chau.nomchauffeur
        this.prenomchauffeur=chau.prenomchauffeur
        this.site=chau.site
        this.cin=chau.cin
        this.tel=chau.tel
        this.createdat=chau.createdat
      },error=>console.log(error));


    }
  affiche(){

  }

  close() {
    this.dialogRef.close();
  }

   update() {
    console.log(this.data)
    let senddata =
    {

      "chauffeurId": this.data,
      "nomchauffeur": this.nomchauffeur,
      "prenomchauffeur": this.prenomchauffeur,
      "site": this.site,
      "cin": this.cin,
       "createdat":this.createdat,
       "tel":this.tel

    };
    if(this.data==null && this.nomchauffeur=="" && this.prenomchauffeur=="" && this.site=="" && this.cin=="" && this.createdat=="" )
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.chauffeurservice.updateChauffeur(senddata,this.data).subscribe(data=>{
      console.log(data)
      console.log(data)
      this.load.openSnackBar("Mise à jour effectué avec succé");
      window.location.reload()
      this.close()


    },error=>{this.load.openSnackBar("Erreur");
    console.log(error)

    })
   }
  }

  ngOnInit(): void {
  }

}
