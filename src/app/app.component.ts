import { Component } from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Searching Algorithms';
  options:number=0
  vector:number[]
  message:string=""
  position:number=0
  element1:string
  numberElement:number
  stringVector:string=""
  constructor(){
  //this.numberElement=Number(this.element1)
  }
  //onChange(event)
    //{
     // this.vector= this.stringVector.split(" ").map(Number)
    //}
  onClickSearch()
  {
    this.message=""
    this.vector= this.stringVector.split(" ").map(Number)
    this.numberElement=Number(this.element1)
    if(this.options==1)
    {
      this.position=this.LinearAlg(this.vector,this.numberElement)
      if (this.position==null)
      {
        this.message="Element not found!";
      }
      else
      {
            this.message="Element found at "+(this.position+1)+ " position";
      }
    }
    else 
    {  
    if(this.options==2)
      {
        this.position=this.BinaryAlg(this.vector,this.numberElement)
        if (this.position==null)
        {
          this.message="Element not found!";
        }
        else
        {
          this.message="Element found at "+(this.position+1)+ " position through binary algorithm";
        }
      }
      else
      {
        this.position=this.InterpolationAlg(this.vector,this.numberElement)
        if (this.position==null)
        {
          this.message="Element not found!";
        }
        else
          {
            this.message="Element found at "+(this.position+1)+ " position through interpolation algorithm";
          }
      }
    }
  }
  LinearAlg(vector,el) 
  {
    for (var i=0; i<vector.length; i++) //parcurgem vectorul element cu element
    {
      if (vector[i] == el) //comparam elementul cautat cu elementul din vector de pe pozitia i,daca se gaseste returnam pozitia
      {
        return i;
      }
    } 
    return null;//altfel nu se afla in vector
  }
  BinaryAlg(vector, el) 
  { 
    let start=0, end=vector.length-1; 
    while (start<=end)//cat timp vectorul mai are elemente
    { 
      let mid=Math.floor((start + end)/2);//gasim mijlocul
      if (vector[mid]==el)//daca elementul se afla in mijloc
        return mid; //s-a gasit
      else if (vector[mid] < el)  //daca se afla in a doua jumatate
              start = mid + 1; //vom cauta in a doua jumatate
            else//daca se afla in prima jumatate
              end = mid - 1; //vom cauta in prima jumatate
    } 
    return null; 
  } 
  InterpolationAlg(vector, el) 
  {
    let start = 0;
    let stop = vector.length - 1;
    while (start <= stop) //cat vectorul in care se cauta mai are elemente
    {
      const range = vector[stop] - vector[start];
      const index = stop - start;
      const side = el- vector[start];
      if (side < 0) //daca elementul este mai mic decat cel mai mic element din vector atunci nu se afla in vector
        return null;
      if (!range) //daca elementele nu sunt identice
      {
        if(vector[start] == el)//daca elementul se afla pe prima pozitie
          return start//returneaza prima pozitie
        else 
          return null//altfel nu se afla in vector
      }
      const mid = start + Math.floor(side * index / range);
      if (vector[mid] === el) //daca elementul se afla in mijloc
      {
      return mid;
      }
      if (vector[mid] < el) //daca se afla in a doua jumatate
      {
        start = mid + 1;//vom cauta in a doua jumatate
      } 
      else //daca se afla in prima jumatate
      {
        stop = mid - 1;//vom cauta in prima jumatate
      }
    }
    return null;
  }
}