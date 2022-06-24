import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FournisseurServiceService } from 'src/app/Services/fournisseur-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.scss'],
  providers:[DatePipe]
})
export class AjouterFournisseurComponent implements OnInit {

  nom: any="";
  code: any="";
  type:any="";
  typefrn
  datecreation: any="";
  date=new Date();
  constructor(private datepipe:DatePipe,public dialogRef: MatDialogRef<AjouterFournisseurComponent>,

  public load: LoadserviceService,private Fournisseurservice:FournisseurServiceService)
  {
    this.datecreation=this.datepipe.transform(this.date,"yyyy-MM-dd")

   }
  close() {
    this.dialogRef.close();
  }
  create() {
    console.log(this.nom)
    let senddata =
    {
      "nom":this.nom,
      "code": this.code,
      "type": this.type,
      "datecreation": this.datecreation,

    };
    console.log(senddata);
    if(this.nom=="" || this.code=="" || this.type=="" )
    {this.load.openSnackBar("Please Fill in all inputs");}
   else {
    console.log(senddata);
    this.Fournisseurservice.insertFournisseur(senddata).subscribe(data=>{
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
