import { Component } from '@angular/core';
import { MaterialService } from '../material.service';



@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
   public materials:any=[];
   columns=['userId','id','title','body']
   constructor(private _materialservice:MaterialService){
    this._materialservice.getmaterials().subscribe(
      (data:any)=>{
        this.materials=data;
      },
      (error:any)=>{
        alert('Internal server error');
      }
      )
   }
}
