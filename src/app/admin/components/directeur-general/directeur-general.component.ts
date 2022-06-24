import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  id: number;
  nom: string;
  prenom:string;
  email: string;
  site:string;
  tel:number;
   dernier_connexion:string;

  }
@Component({
  selector: 'app-directeur-general',
  templateUrl: './directeur-general.component.html',
  styleUrls: ['./directeur-general.component.scss']
})


export class DirecteurGeneralAdminComponent implements OnInit, AfterViewInit {


  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['id', 'email', 'nom', 'prenom', 'tel', 'site', 'logoutdate', "actions"]


  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public load: LoadserviceService, public dialog: MatDialog, private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }


  getAll() {
    this.load.get("Alldirg").then(
      (data: any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
    );
  }
  create(){
    this.dialog.open(CreateUserDialog, {
      height: '95',
      width: '95',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  delet(id) {
    console.log(id)

    if (confirm("Sure You want to delete this directeur general!") == true) {
      this.userservice.DeleteUser(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }
  edit(id) {
    console.log(id)
    this.dialog.open(EditUserDialog, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}

@Component({
  selector: 'dialog-update-user',
  templateUrl: 'edit-pop.html',
})
export class EditUserDialog {
  nom: any="";
  email: any="";
  prenom: any="";
  site: any="";
  tel: any="";
  creatdate: any="";
  passwordfr: any="";
  constructor(public dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data,private userservice:UserServiceService ,public load: LoadserviceService)
    {  console.log(data);
      this.userservice.getUserById(this.data).subscribe(dirg=>{
        console.log(dirg)
        this.prenom=dirg.prenom
        this.nom=dirg.nom
        this.creatdate=dirg.datecreat
        this.email=dirg.email
        this.site=dirg.site
        this.tel=dirg.tel
        this.passwordfr=dirg.password
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
      "userid": this.data,
      "nom": this.nom,
      "email": this.email,
      "prenom": this.prenom,
      "tel": this.tel,
      "site": this.site,
      "creatdate": this.creatdate,
      "password": this.passwordfr,
    };
    if(this.data==null && this.nom=="" && this.prenom=="" && this.tel=="" && this.site=="" && this.creatdate=="" && this.passwordfr=="")
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.load.post(senddata, "UpdateUser").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Updated Done"); }
        else this.load.openSnackBar("Error");

      });
   }
  }
}

@Component({
  selector: 'dialog-create-directeurgeneral',
  templateUrl: 'create-popup.html',
  providers:[DatePipe]
})
export class CreateUserDialog {
 nomca:any="";
      // nomdir:  any="";
      // emailfr: any="";
      // prenomfr:  any="";
      // telfr:  any="";
      // sitefr:  any="";
       creatdate:  any="";
      // passwordfr:  any="";
       date=new Date();
  constructor(private datepipe:DatePipe,public dialogRef: MatDialogRef<CreateUserDialog>,

  public load: LoadserviceService,private userservice:UserServiceService)
  {
    this.creatdate=this.datepipe.transform(this.date,"yyyy-MM-dd")

   }

  close() {
    this.dialogRef.close();
  }
  create(){

    let senddata =
    {
      // "nom": this.nomfr,
      // "email": this.emailfr,
      // "prenom": this.prenomfr,
      // "tel": this.telfr,
      // "site": this.sitefr,
      // "role": "directeur-general",
      // "datecreat": this.creatdate,
      // "password": this.passwordfr,

    };
    console.log(senddata);
     //if(this.nomfr=="" && this.prenomfr=="" && this.telfr=="" && this.sitefr=="" && this.creatdate=="" && this.passwordfr=="")
    {this.load.openSnackBar("Veuillez remplir toutes les entrées");}
   //else {
    console.log(senddata);
    this.userservice.InsertUser(senddata).subscribe(data=>{
      console.log(data)

      alert("ajouter")
      this.close ()
    },error=>{
      console.log(error)
      alert("error")
    });

  // }
  }
}









