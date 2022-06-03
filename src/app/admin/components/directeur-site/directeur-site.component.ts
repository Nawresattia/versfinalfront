import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
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

  constructor(public load: LoadserviceService, public dialog: MatDialog) { }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  delet(id) {
    console.log(id)
    if (confirm("Sure You want to delete this user!") == true) {
      this.load.post({ "userid": id }, "DeleteUser").then(
        (data: any) => {
          console.log(data);
          if (data.key == "true") {
            this.load.openSnackBar("Delete Done");
            this.getAll()
          }
          else this.load.openSnackBar("Error")

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



