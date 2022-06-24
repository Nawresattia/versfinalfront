import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { CreateUserDialog } from '../directeur-general/directeur-general.component';

@Component({
  selector: 'app-ajout-directeur-generals',
  templateUrl: './ajout-directeur-generals.component.html',
  styleUrls: ['./ajout-directeur-generals.component.scss'],
  providers:[DatePipe]
})
export class AjoutDirecteurGeneralsComponent implements OnInit {
  nomca:any="";
   nomfr:  any="";
   emailfr: any="";
   prenomfr:  any="";
   telfr:  any="";
   sitefr:  any="";
   creatdate:  any="";
   passwordfr:  any="";
   date=new Date();
  constructor(private datepipe:DatePipe,public dialogRef: MatDialogRef<CreateUserDialog>,

    public load: LoadserviceService,private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.creatdate=this.datepipe.transform(this.date,"yyyy-MM-dd")
  }







close() {
this.dialogRef.close();
}
create(){

let senddata =
{
   "nom": this.nomfr,
   "email": this.emailfr,
   "prenom": this.prenomfr,
   "tel": this.telfr,
   "site": this.sitefr,
   "role": "directeur-general",
   "datecreat": this.creatdate,
   "password": this.passwordfr,

};
console.log(senddata);
 if(this.nomfr=="" && this.prenomfr=="" && this.telfr=="" && this.sitefr=="" && this.creatdate=="" && this.passwordfr=="")
{this.load.openSnackBar("Veuillez remplir toutes les entrées");}
else {
console.log(senddata);
this.userservice.InsertUser(senddata).subscribe(data=>{
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
