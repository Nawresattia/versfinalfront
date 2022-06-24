import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FournisseurServiceService } from 'src/app/Services/fournisseur-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.scss']
})
export class ModifierFournisseurComponent implements OnInit {

  id:any;
  nom: any;
  code: any;
  type:any;
  datecreation: any;



  constructor(public dialogRef: MatDialogRef<ModifierFournisseurComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private Fournisseurservice:FournisseurServiceService, public load: LoadserviceService) {
      console.log(data);
      this.Fournisseurservice.getFournisseurById(this.data).subscribe(four=>{
        console.log(four)
        this.id=four.id
        this.nom=four.nom
        this.code=four.code
        this.type=four.type
        this.datecreation=four.datecreation


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

      "fournisseurid": this.data,
      "nom": this.nom,
      "code": this.code,
      "type": this.type,

       "datecreation":this.datecreation,

    };
    if(this.data==null && this.nom=="" && this.code=="" && this.type==""&&this.datecreation=="" )
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.Fournisseurservice.updateFournisseur(senddata,this.data).subscribe(data=>{
      console.log(data)
      console.log(data)
      this.load.openSnackBar("Mise à jour effectué avec succé");
      window.location.reload()
      this.close()


    },error=>{this.load.openSnackBar("Erreur");
    console.log(error)

    })
   // this.load.post(senddata, "UpdateFournisseur").then(
     // (data: any) => {
       // console.log(data);
        //if (data.key == "true") { this.load.openSnackBar("Updated Done"); }
        //else this.load.openSnackBar("Error");

      //});
   }
  }

  ngOnInit(): void {
  }

}
