
/*let drawPoint = (point) => {
//...
}

drawPoint({
      x:2,
      y:3
})

drawPoint({
      name:"Datta"
})*/

// The above example may compile succesfully but during run time there will be errors. 


//let drawPoint = (point:{x:number,y:number}) =>{
//...
//}

/*interfaces are just declerations
interface Point{
    x:number; 
    y:number; 
    draw:()=>void;
}

let drawPoint = (point:Point) =>{
  //...
}

let getDistance = (pointA:Point,pointB:Point)=>{
//...
}

drawPoint{
    x:2,
    y:3
}*/

//cohesion should be made where similar blocks of code are stored at one place.
//interfaces are just declerations
//So classes are introduced

class Point{
    x:number;//fields
    y:number;//fields
    drawPoint(){//methods
    //...
    }
    getDistance(another:Point){
    //...
    }
}