import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';

export interface PeriodicElement {
  id:number;
  nom: string;
  code: string;
  type: string;
  datecreation: string;
}

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit ,AfterViewInit {

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');


  displayedColumns: string[] = ['id','nom', 'code', 'type', 'datecreation',"actions"];
  
  dataSource ;

  
    
  constructor(public load:LoadserviceService, public dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }


  getAll(){
    this.load.get("AllFournisseur").then(
      (data:any) => {        
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}
  create(){
    this.dialog.open(CreateFournisseurDialog, {
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
      this.load.post({ "FournisseurId": id }, "DeleteFournisseur").then(
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
    this.dialog.open(EditFournisseurDialog, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}


@Component({
  selector: 'dialog-update-fournisseur',
  templateUrl: './edit-pop.html',
})

export class EditFournisseurDialog {
  id:any;
  nom: any;
  code: any;
  type:any;
  datecreation: any;
  

 
  constructor(public dialogRef: MatDialogRef<EditFournisseurDialog>,
    @Inject(MAT_DIALOG_DATA) public data, public load: LoadserviceService) { }
  close() {
    this.dialogRef.close();
  }

   update() {
    console.log(this.data)
    let senddata =
    {
 
      "fournisseurid": this.data,
      "nom": this.nom,
      "code": this.code,
      "type": this.type,
      
       "datecreation":this.datecreation,
      
    };
    if(this.data==null && this.nom=="" && this.code=="" && this.type==""&&this.datecreation=="" )
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.load.post(senddata, "UpdateFournisseur").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Updated Done"); }
        else this.load.openSnackBar("Error");

      });
   }
  }
}
@Component({
  selector: 'dialog-create-fournisseur',
  templateUrl: 'create-pop.html',
})
export class CreateFournisseurDialog {
  nom: any="";
  code: any="";
  type:any="";
  datecreation: any="";

  constructor(public dialogRef: MatDialogRef<CreateFournisseurDialog>,
    
  public load: LoadserviceService) { }
  close() {
    this.dialogRef.close();
  }
  create() {
    let senddata =
    {
      "nom": this.nom,
      "code": this.code,
      "type": this.type,
      "datecreation": this.datecreation,
      
    };
    if(this.nom=="" || this.code=="" || this.type=="" || this.datecreation=="")
    {this.load.openSnackBar("Please Fill in all inputs");}
   else {
    this.load.post(senddata, "CreateFournisseur").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Create Done"); }
        else this.load.openSnackBar("Error");

      });
   }
  }
}







