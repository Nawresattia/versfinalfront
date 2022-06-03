import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  Id: number;
 Immatricule: String;
  Type: String;
  Taille: String;
  Chauffeur:string;
  Datecreation:string;
  
}


@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.scss'],
  
})
export class CamionComponent implements OnInit,AfterViewInit {

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['Id', 'Immatricule','Type', 'Taille','Chauffeur','Datecreation', "actions"];
 
 
  
  dataSource; 
  
   
  constructor(public load: LoadserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
   
    this.getAll();
    
  }
  ngAfterViewInit(): void {
  }


  getAll() {
    this.load.get("AllCamion").then(
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
    this.dialog.open(EditCamionDialog, {
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
export class EditCamionDialog {
  Immatricule: any="";
  Type: any="";
  Taille: any="";
  Chauffeur: any="";
  Datecreation: any="";
   
  constructor(public dialogRef: MatDialogRef<EditCamionDialog>,
    @Inject(MAT_DIALOG_DATA) public data, public load: LoadserviceService) { }
  close() {
    this.dialogRef.close();
  }
  update() {
    console.log(this.data)
    let senddata =
    {
 
      "camionid": this.data,
      "Immatricule": this.Immatricule,
      "Type": this.Type,
      "Taille": this.Taille,
      "Chauffeur": this.Chauffeur,
      "Datecreation": this.Datecreation,
      
    };
    if(this.data==null && this.Immatricule=="" && this.Type=="" && this.Taille=="" && this.Chauffeur=="" && this.Datecreation=="" )
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



