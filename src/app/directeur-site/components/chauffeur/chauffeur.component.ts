import { AjouterChauffeurComponent } from './../ajouter-chauffeur/ajouter-chauffeur.component';
import { ModifierChauffeurComponent } from './../modifier-chauffeur/modifier-chauffeur.component';

import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChauffeurServiceService } from 'src/app/Services/chauffeur-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  Id: number;
  nomchauffeur: String;
  prenomchauffeur: String;
  site:String;
  cin: String;
  tel:string;
  createdat:string;

}
@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.scss']
})
export class ChauffeurComponent implements OnInit,AfterViewInit {

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['Id', 'nomchauffeur','prenomchauffeur', 'site','cin','tel','createdat',"actions"];
   dataSource;




  constructor(public load:LoadserviceService, public dialog: MatDialog,private chauffeurservice:ChauffeurServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }


  getAll(){
    this.load.get("AllChauffeur").then(
      (data:any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}

  create(){
    this.dialog.open(AjouterChauffeurComponent, {
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
    if (confirm("Sure You want to delete this chauffeur!") == true) {
      this.chauffeurservice.DeleteChauffeur(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }
  edit(id) {
    console.log(id)
    this.dialog.open(ModifierChauffeurComponent, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}




