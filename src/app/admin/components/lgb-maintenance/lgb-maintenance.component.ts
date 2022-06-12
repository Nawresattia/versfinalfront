import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';

export interface PeriodicElement {
  id:number;
  date:string;
 
  demandeur: string;
  site: string;
  equipement: number;
  referenceOt: string;
  Nature_demande:string;
}


@Component({
  selector: 'app-lgb-maintenance',
  templateUrl: './lgb-maintenance.component.html',
  styleUrls: ['./lgb-maintenance.component.scss']
})
export class LgbMaintenanceComponent implements OnInit,AfterViewInit {
  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['id','date', 'demandeur', 'referenceOt','equipement','site','nature_demande'];
    
  dataSource ;


 
  constructor(public load:LoadserviceService) { }
 
  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }

  
  getAll(){
    this.load.get("AllMaintenance").then(
      (data:any) => {        
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  delet(id){
    console.log(id)

  }
  edit(id){
    console.log(id)

  }


}

   

