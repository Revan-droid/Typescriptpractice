var Point = /** @class */ (function () {
    //private _x:number;//fields //access modifiers can be applied to fields,properties and methods
    //private _y:number;//fields
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log("x:" + this._x + ",Y:" + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x; //properties
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Enter the value greater than 0.");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
//let point=new Point();
var point = new Point(2, 3); //creating an object and intializing using constructor
//point._x=2; //shows error since it is specified as private
//point._y=3; 
var x = point.x;
point.x = -5;
point.drawPoint();
