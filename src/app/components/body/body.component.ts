import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  //COMENTS VARIABLES
  comments: any [] =[{
    Name_c: "Alexander Alvarado",
    nickname: "@Alex4191",
    Data_comment:"i agree with that <3"
  },
  {
    Name_c: "John Zuckmberg",
    nickname: "@Zuckarithas14",
    Data_comment:"No problem 100%"
  }];
  
  
  
  
  Name_c: any;
  Data_comment: any;
  constructor() { }

  ngOnInit(): void {
    this.Name_c="";
    this.Data_comment="";

  }

  Add_comment(){
  
   let JsonComment ={
     Name_c: this.Name_c,
     nickname: `@ ${this.Name_c}`+`${Math.floor(Math.random()* Math.floor(100))}`,
     Data_comment: this.Data_comment
   };

   this.comments.push(JsonComment);
  
  }

  Delete_comment(index: any){
    this.comments.splice(index,1);
  }
}
