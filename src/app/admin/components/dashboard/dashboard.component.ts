import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { Chart,registerables , ChartConfiguration, LineController,
   LineElement, PointElement, LinearScale, Title } from 'chart.js';
   Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data;
  data1;
  data2;
  ReceptionChart;RoulanceChart;

  constructor(public load: LoadserviceService) { }

  ngOnInit(): void {
    this.getAll(); 
}
options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  layout: {
    padding: 15,
  }
};
getAll() {
  this.load.get("stat").then(
    (data: any) => {
      console.log(data);
      this.data = data;
      this.data1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Reception",
          backgroundColor: "#4e73df",
          hoverBackgroundColor: "#2e59d9",
          borderColor: "#4e73df",
          data:  this.data.receptiondata,
        }],
      };
  
      this.data2 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Parc Roulance",
          backgroundColor: "#4e73df",
          hoverBackgroundColor: "#2e59d9",
          borderColor: "#4e73df",
          data:  this.data.parcroulancedata,
        }],
      };
  
      this.ReceptionChart = new Chart('ReceptionChart', {
        type: 'bar',        
        options: this.options,
        data: this.data1,
      });

      this.RoulanceChart = new Chart('RoulanceChart', {
        type: 'bar',        
        options: this.options,
        data: this.data2,
      });
    
    });
}

}


