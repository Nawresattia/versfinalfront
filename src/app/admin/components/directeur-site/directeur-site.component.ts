import { ModifierDirecteurSiteComponent } from './../modifier-directeur-site/modifier-directeur-site.component';
import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  id: number;
  email: string;
  nom: string;
  prenom: number;
  tel: string;
  site: string;
  logoutdate: string;

}
@Component({
  selector: 'app-directeur-site',
  templateUrl: './directeur-site.component.html',
  styleUrls: ['./directeur-site.component.scss']
})


export class DirecteurSiteAdminComponent implements OnInit, AfterViewInit {

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
    this.load.get("Alldirs").then(
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

    if (confirm("Sure You want to delete this directeur de site!") == true) {
      this.userservice.DeleteUser(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }
  edit(id) {
    console.log(id)
    this.dialog.open(ModifierDirecteurSiteComponent, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}



@Component({
  selector: 'dialog-create-directeurgeneral',
  templateUrl: 'create-popup.html',
  providers:[DatePipe]
})
export class CreateUserDialog {
  //immatricule: any="";
      nomfr:  any="";
      emailfr: any="";
      prenomfr:  any="";
      telfr:  any="";
      sitefr:  any="";
      datecreat:  any="";
      passwordfr:  any="";
       date=new Date();
  constructor(private datepipe:DatePipe,public dialogRef: MatDialogRef<CreateUserDialog>,

  public load: LoadserviceService,private userservice:UserServiceService)
  {
    this.datecreat=this.datepipe.transform(this.date,"yyyy-MM-dd")

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
      "role": "directeur-site",
      "datecreat": this.datecreat,
      "password": this.passwordfr,

    };
    console.log(senddata);
    if(this.nomfr=="" && this.prenomfr=="" && this.telfr=="" && this.sitefr=="" && this.datecreat=="" && this.passwordfr=="")
    {this.load.openSnackBar("Veuillez remplir toutes les entrées");}
   else {
    console.log(senddata);
    this.userservice.InsertUser(senddata).subscribe(data=>{
      console.log(data)
      this.load.openSnackBar("Ajouter effectué avec succé");
      window.location.reload()
      this.close()


      this.close ()
    },error=>{
      console.log(error)
      alert("error")
    });

   }
  }
}






