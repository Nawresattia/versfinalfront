import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
 
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
  selector: 'app-gardien',
  templateUrl: './gardien.component.html',
  styleUrls: ['./gardien.component.scss']
})

export class GardienComponent implements OnInit, AfterViewInit {


  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['id', 'email', 'nom', 'prenom', 'tel', 'site', 'logoutdate', "actions"]


  dataSource;


  constructor(public load: LoadserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }


  getAll() {
    this.load.get("AllGardien").then(
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
    if (confirm("Etes-vous sûr!") == true) {
      this.load.post({ "userid": id }, "DeleteUser").then(
        (data: any) => {
          console.log(data);
          if (data.key == "true") {
            this.load.openSnackBar("Suppression effectué avec succé");
            this.getAll()
          }
          else this.load.openSnackBar("Erreur")

        });
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
  date: any="";
  password: any="";
  constructor(public dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data, public load: LoadserviceService) { }
  close() {
    this.dialogRef.close();
  }
  update() {
    console.log(this.data)
    console.log('test')
    let senddata =
    {
      "userid": this.data,
      "nom": this.nom,
      "email": this.email,
      "prenom": this.prenom,
      "tel": this.tel,
      "site": this.site,
      "date": this.date,
      "password": this.password,
    };
    if(this.data==null && this.nom=="" && this.prenom=="" && this.tel=="" && this.site=="" && this.date=="" && this.password=="")
    {this.load.openSnackBar("mettre à jour au moin un champ");}
   else {
    this.load.post(senddata, "UpdateUser").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Mise à jour effectué avec succé"); }
        else this.load.openSnackBar("Erreur");

      });
   }
   
  }
}




@Component({
  selector: 'dialog-create-user',
  templateUrl: 'create-pop.html',
})
export class CreateUserDialog {
  nom: any="";
  email: any="";
  prenom: any="";
  site: any="";
  tel: any="";
  date: any="";
  password: any="";

  constructor(public dialogRef: MatDialogRef<CreateUserDialog>,
    
  public load: LoadserviceService) { }
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
      "password": this.password,
    };
    console.log(senddata);
    if(this.nom=="" || this.email=="" || this.prenom=="" || this.tel=="" || this.site=="" || this.password=="")
    {this.load.openSnackBar("Veuillez remplir toutes les entrées");}
   else {
    console.log(senddata);
    this.load.post(senddata, "CreateUser").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("ajout effectué avec succé"); }
        else this.load.openSnackBar("Erreur");

      });
   }
  }
  
}


