import { Component } from '@angular/core';
import { ChatapiService } from './chatapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  ques=""
  apiRes= '';
  data:any=[]
  constructor(public as:ChatapiService){

  }
  sendToApi(){
    this.as.askAI(this.ques).subscribe((res:any) => {
      this.apiRes=res.candidates[0].content.parts[0].text
      this.data.push({
        user: this.ques,
        bot:this.apiRes
      })
      this.ques=""
    })
   
    

}
}