import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chonificador',
  templateUrl: './chonificador.component.html',
  styleUrls: ['./chonificador.component.scss']
})
export class ChonificadorComponent implements OnInit {

  val: string = ''; 
  response: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  chonificar(): void
  {
    let pos:number = 0;
    
    let auxiliar: string = ''; 

    auxiliar = this.val.toLowerCase();
    pos = 0;
    while(  ( (pos = auxiliar.indexOf("qu", pos) )!== -1))
    {
      pos++;
      console.log("qu found");
      auxiliar = auxiliar.replace("qu","q");
    }

    pos = 0;
    while(  ( (pos = auxiliar.indexOf("gu", pos) )!== -1))
    {
      
      pos++;
      console.log("gu found");
      auxiliar = auxiliar.replace("gu","w");
    }
    pos = 0;
    while(  ( (pos = auxiliar.indexOf("gü", pos) )!== -1))
    {
      
      pos++;
      console.log("gü found");
      auxiliar = auxiliar.replace("gü","w");
    }
    pos = 0;
    while(  ( (pos = auxiliar.indexOf("ch", pos) )!== -1))
    {
      
      pos++;
      console.log("ch found");
      auxiliar = auxiliar.replace("ch","x");
    }
    pos = 0;
    while(  ( (pos = auxiliar.indexOf("c", pos) )!== -1))
    {
      pos++;
      console.log("c found");
      auxiliar = auxiliar.replace("c","k");
    }
    pos = 0;
    while(  ( (pos = auxiliar.indexOf("v", pos) )!== -1))
    {
      
      pos++;
      console.log("V found");

      if(this.getRandomInt(0.5) === 0)
      {
        auxiliar = auxiliar.replace("v","b");
      }
    }

    pos = 0;
    
    let cont:number = 0;
    while(  cont < 2 && ( (pos = auxiliar.indexOf("s", pos) )!== -1))
    {
        
      pos++;
      console.log("S found");
      if(this.getRandomInt(0.5) === 0)
      {
        auxiliar = auxiliar.replace("s","sh");
      }else if( this.getRandomInt(0.5) === 0 )
      {
        auxiliar = auxiliar.replace("s","h");

      }
      cont++;
    }
    pos = 0;
    cont = 0;
    while(  cont < 2 && ( (pos = auxiliar.indexOf(" ", pos) )!== -1))
    {

      pos++;
      console.log("SPACE found");
      if(this.getRandomInt(0.8) === 0)
      {
        console.log("SPACE CHANGING");
        
        auxiliar = auxiliar.replace(" ","h"+" ");
      }
      cont++;
    }

    let index = 0;

    for (let char of auxiliar) {
      //console.log(char); // prints chars: H e l l o  W o r l d
      if(char === 'a' || char === 'e' ||char === 'i' ||char === 'o' || char === 'u')
      {
      if(this.getRandomInt(0.6) === 0)
      {
        auxiliar = auxiliar.replace(char, char+char);
      }
      index++;
      }
    }

    
    if(auxiliar.charAt(auxiliar.length -1) === 'a' || auxiliar.charAt(auxiliar.length-1)  === 'e' ||auxiliar.charAt(auxiliar.length-1)  === 'i' ||auxiliar.charAt(auxiliar.length-1)  === 'o' || auxiliar.charAt(auxiliar.length-1)  === 'u')
    {
      if(this.getRandomInt(0.9) === 0)
      {
        auxiliar = auxiliar+"h";
      }
    }

    index = 0;
    for (let char of auxiliar) {
      console.log(char); // prints chars: H e l l o  W o r l d
      if(this.getRandomInt(0.3) === 0)
      {
        auxiliar = auxiliar.replace(char, char.toUpperCase());
      }
      index++;
    }


    auxiliar = this.response = auxiliar;
    
  }

  getRandomInt(thresh: number) : number{
    if(Math.random() < thresh)
    {
      return 0;
    }else{
      return 1;
    }
  }
  
  
}

