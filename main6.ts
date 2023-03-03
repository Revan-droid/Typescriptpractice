

class Point{
    //private _x:number;//fields //access modifiers can be applied to fields,properties and methods
    //private _y:number;//fields

    constructor(private _x?:number,private _y?:number){
        this._x=_x;
        this._y=_y;
    }
    public drawPoint(){//methods 
    console.log("x:"+this._x+",Y:" +this._y)
    }

    get x(){
        return this._x;//properties
    }
    
    set x(value){   //properties
        if(value<0)
           throw new Error("Enter the value greater than 0.");
        this._x=value;
    }
}
//let point=new Point();
let point =new Point(2,3);//creating an object and intializing using constructor
//point._x=2; //shows error since it is specified as private
//point._y=3; 
let x=point.x;
point.x=5;
point.drawPoint();