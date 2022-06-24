import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-ajouter-gardien',
  templateUrl: './ajouter-gardien.component.html',
  styleUrls: ['./ajouter-gardien.component.scss']
})
export class AjouterGardienComponent implements OnInit {


  nom: any="";
  email: any="";
  prenom: any="";
  site: any="";
  tel: any="";
  date: any="";

  password: any="";

  constructor(public dialogRef: MatDialogRef<AjouterGardienComponent>,

  public load: LoadserviceService,private userservice:UserServiceService) { }
  close() {
    this.dialogRef.close();
  }
  //
  create() {

    let senddata =
    {

      "nom": this.nom,
      "email": this.email,
      "prenom": this.prenom,
      "tel": this.tel,
      "site": this.site,
      "role": "gardien",
      "password": this.password,
    };
    console.log(senddata);
    if(this.nom=="" || this.email=="" || this.prenom=="" || this.tel=="" || this.site==""|| this.password=="")
    {this.load.openSnackBar("Veuillez remplir toutes les entrées");}
   else {
    console.log(senddata);
    this.userservice.InsertUser(senddata).subscribe(data=>{
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
