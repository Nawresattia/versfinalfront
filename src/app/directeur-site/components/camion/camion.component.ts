import { ModifierCamionComponent } from './../modifier-camion/modifier-camion.component';
import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CamionServiceService } from 'src/app/Services/camion-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { AjouterCamionComponent } from '../ajouter-camion/ajouter-camion.component';


export interface PeriodicElement {
  id: number;
  immatricule: string;
  type: string;
  taille: string;
  Chauffeur: string;
  datecreation: string;
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



  constructor(public load: LoadserviceService, public dialog: MatDialog, private camionservice:CamionServiceService) { }

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
    this.dialog.open(AjouterCamionComponent, {
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
      this.camionservice.DeleteCamion(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }


  edit(id) {
    console.log(id)
    this.dialog.open(ModifierCamionComponent, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}







