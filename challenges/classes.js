
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CubeMaker {
  constructor (math){
    this.length =math.length;
    this.width = math.width;
    this.height= math.height;
  };
    volume(){
      return this.length * this.width * this.height;
      };
    
      surfaceArea(){
      return 2* (this.length * this.width + this.length * this.height + this.width * this.height);
    };
   
  }
  
const cube = new CubeMaker({
    length:4,
    width:5,
    height:5,
});
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 100
 console.log(cube.surfaceArea()); // 130

