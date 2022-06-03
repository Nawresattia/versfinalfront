import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { ChartOptions, ChartType, Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data;
  @ViewChild('recechart') rece;
  @ViewChild('parcchart') parc;

  option={
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    }
  }
  cha: Chart<"bar", number[], string>;
  constructor(public load: LoadserviceService) { }

  ngOnInit(): void {
  
  }
ngAfterViewInit(){
  this.getAll();
}
  getAll() {
    this.load.get("stat").then(
      (data: any) => {
        console.log(data);
        this.data = data
        //////////

 /// parc 
  //  let ctx1 = this.rece;
    let ctx1: any = document.getElementById('recechart') as HTMLElement;
     this.cha=   new Chart("recechart", {
          type: 'bar',
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
              label: "Revenue",
              backgroundColor: "#4e73df",
              hoverBackgroundColor: "#2e59d9",
              borderColor: "#4e73df",
              data: [4215, 5312, 6251, 7841, 9821, 14984],
            }],
          },
          options: this.option
        });

        //reception chart
        let ctx2 = this.parc.nativeElement.getContext('2d');
        new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
              label: "Revenue",
              backgroundColor: "#4e73df",
              hoverBackgroundColor: "#2e59d9",
              borderColor: "#4e73df",
              data: [4215, 5312, 6251, 7841, 9821, 14984],
            }],
          },
          options: this.option
        });





        ////////
      }
    );
  }






}
