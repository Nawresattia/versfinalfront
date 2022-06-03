import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';

export interface PeriodicElement {
  id:number;
  Date:string;
  Heure:string;
  Demandeur: string;
  Site: string;
  code_equipement: number;
  reference_Ot: string;
  Nature_demande:string;
}

@Component({
  selector: 'app-logbook-s-maintenance',
  templateUrl: './logbook-s-maintenance.component.html',
  styleUrls: ['./logbook-s-maintenance.component.scss']
})
export class LogbookSMaintenanceComponent implements OnInit ,AfterViewInit {

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['id','Date', 'Heure', 'Demandeur', 'Site','code_equipement','reference_Ot','Nature_demande',"actions"];
  
  dataSource ;


    
  constructor(public load:LoadserviceService) { }
 
  ngOnInit(): void {
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


