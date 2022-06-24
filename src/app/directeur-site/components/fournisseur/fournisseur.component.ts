import { ModifierFournisseurComponent } from './../modifier-fournisseur/modifier-fournisseur.component';
import { AjouterFournisseurComponent } from './../ajouter-fournisseur/ajouter-fournisseur.component';

import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FournisseurServiceService } from 'src/app/Services/fournisseur-service.service';
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



  constructor(public load:LoadserviceService, public dialog: MatDialog,private Fournisseurservice:FournisseurServiceService) { }

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
    this.dialog.open(AjouterFournisseurComponent, {
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


    if (confirm("Sure You want to delete this fournisseur!") == true) {
      this.Fournisseurservice.DeleteFournisseur(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    }else { }

  }


  edit(id) {
    console.log(id)
    this.dialog.open(ModifierFournisseurComponent, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}
