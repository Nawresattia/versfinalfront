import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-modifier-directeur-site',
  templateUrl: './modifier-directeur-site.component.html',
  styleUrls: ['./modifier-directeur-site.component.scss']
})
export class ModifierDirecteurSiteComponent implements OnInit {


  nom: any="";
  email: any="";
  prenom: any="";
  site: any="";
  tel: any="";
  date: any="";
  password: any="";
  constructor(public dialogRef: MatDialogRef<ModifierDirecteurSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public load: LoadserviceService,private userservice:UserServiceService) {
      console.log(data)
      this.userservice.getUserById(this.data).subscribe(dirs=>{
        console.log(dirs)
        this.prenom=dirs.prenom
        this.nom=dirs.nom
       // this.datecreat=dirs.datecreat
        this.email=dirs.email
        this.site=dirs.site
        this.tel=dirs.tel
        this.password=dirs.password
      },error=>console.log(error));
    }
  close() {
    this.dialogRef.close();
  }
  update() {
    console.log(this.data)
    console.log('test')
    let senddata =
  {

    "nom": this.nom,
    "email": this.email,
    "prenom": this.prenom,
    "tel": this.tel,
    "site": this.site,
    "role": "directeur-site",
    "password": this.password,
  };
    if(this.data==null && this.nom==""&& this.email==""&& this.prenom=="" && this.tel=="" && this.site==""  && this.password=="")
    {this.load.openSnackBar("mettre à jour au moin un champ");}

   else {
    this.userservice.updateUser(senddata,this.data).subscribe(data=>{
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
