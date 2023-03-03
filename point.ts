export class Point{
    constructor(private _x?:number,private _y?:number){
        this._x=_x;
        this._y=_y;
    }
    public drawPoint(){//methods 
        console.log("x:"+this._x+",y:" +this._y)
    }
}    