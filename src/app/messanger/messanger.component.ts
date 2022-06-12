import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadserviceService } from 'src/Services/loadservice.service';
@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.scss']
})
export class MessangerComponent implements OnInit { 
 
  msg: string="";
  rec: string="";
  recname: string="";
  sender: string="";
  open=false;
  allusers;
  selectedmsg;
  constructor(public dialogRef: MatDialogRef<MessangerComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public load: LoadserviceService) { }

  ngOnInit(): void {
    this.sender=this.load.getData("id");
    this.load.get("Allusers").then(
      (data: any) => {
        console.log(data);
        
        this.allusers=data;
        for (var i = 0; i < this.allusers.length; i++) {
          if (this.allusers[i].id==this.sender){
            this.allusers.splice(this.allusers[i],1);
          }
            }
      }
    );
  }
 
  getMsg() {
    for (var i = 0; i < this.allusers.length; i++) {
if (this.allusers[i].id==this.rec){
  this.recname=this.allusers[i].nom+" "+this.allusers[i].prenom;
}
  }
    this.load.post({"rec":this.rec,"sen":this.sender},"getmsg").then(
      (data: any) => {
        console.log(data);
        this.selectedmsg=data;
        this.open=true;
      }
    );
  }

  Loadmsg() {
    this.load.post({"rec":this.rec,"sen":this.sender},"getmsg").then(
      (data: any) => {
        console.log(data);
        this.selectedmsg=data;
        this.open=true;
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

   Send() {    
    let senddata =
    {
      "msg": this.msg,
      "sen": this.sender,
      "rec": this.rec,      
    };
    console.log(senddata);
    if(this.msg=="" && this.rec=="" && this.sender=="" )
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.load.post(senddata, "createmsg").then(
      (data: any) => {
        console.log(data);
        if (data.key == "true") { this.load.openSnackBar("Sent");
        this.Loadmsg(); }
        else this.load.openSnackBar("Error");
      });
   }
  }

}
