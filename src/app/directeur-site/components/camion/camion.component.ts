import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  id: number;
 Immatricule: string;
 Type: string;
  Taille: string;
  Chauffeur: string;
  Datecreation: string;
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


  displayedColumns: string[] = ['id', 'immatricule','type', 'taille','chauffeur','datecreation', "actions"];
    


   dataSource;

  
    
  constructor(public load: LoadserviceService, public dialog: MatDialog) { }
 
  ngOnInit(): void {

    this.getAll();

  }
  ngAfterViewInit(): void {
  }


  
  getAll (){
    this.load.get("AllCamion").then(
      (data:any) => {        
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}
  create(){
    this.dialog.open(CreateCamionDialog, {
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
    if (confirm("Sure You want to delete this camion!") == true) {
      this.load.post({ "Camionid": id }, "DeleteCamion").then(
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
  selector: 'dialog-update-camion',
  templateUrl: './edits-pop.html',
})

export class EditCamionDialog {
  id:any;
  immatricule: any;
  type: any;
  taille: any;
  chauffeur: any;
  datecreation: any;
  

 
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
      "Immatricule": this.immatricule,
      "Type": this.type,
      "Taille": this.taille,
      "Chauffeur": this.chauffeur,
      "Datecreation": this.datecreation,
      
    };
    if(this.data==null && this.immatricule=="" && this.type=="" && this.taille=="" && this.chauffeur=="" && this.datecreation=="" )
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.load.post(senddata, "UpdateCamion").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Updated Done"); }
        else this.load.openSnackBar("Error");

      });
   }
  }
}


@Component({
  selector: 'dialog-create-camion',
  templateUrl: 'create-pop.html',
})
export class CreateCamionDialog {
  immatricule: any="";
  type: any="";
  taille: any="";
  chauffeur: any="";
  datecreation: any="";

  constructor(public dialogRef: MatDialogRef<CreateCamionDialog>,
    
  public load: LoadserviceService) { }
  close() {
    this.dialogRef.close();
  }
  create(){
    let senddata =
    {
      "Immatricule": this.immatricule,
      "Type": this.type,
      "Taille": this.taille,
      "Chauffeur": this.chauffeur,
      "Datecreation": this.datecreation,
    };
    if(this.immatricule=="" || this.type=="" || this.taille=="" || this.chauffeur=="" || this.datecreation=="")
    {this.load.openSnackBar("Please Fill in all inputs");}
   else {
    this.load.post(senddata, "CreateCamion").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Create Done"); }
        else this.load.openSnackBar("Error");

      });
   }
  }
}


