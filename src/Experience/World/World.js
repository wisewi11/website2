import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Stars from "./Stars.js";
import SamirCube from "./SamirCube.js";
import Plane from "./Plane.js";


// import Hexagons from "./Hexagons.js";

export default class World {


  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.floor = new Floor();


    var radius = 5

    var angle = 2 * Math.PI / 8;
    var theta = 0;
    var planes = []



    const array = ["video1","video1","video1","video1","video1","video1","video1","video1"]
    for (var i = 0; i < 8; i++) {

              var plane = new Plane(document.getElementById(array[i]), new THREE.Vector3(    (Math.cos(theta+Math.PI)*2-1) * radius ,  (Math.sin(theta+Math.PI)*2-1) * radius,0  )
              planes = plane[i]

              theta += angle;
          }

          

            
       

        
  



    this.showingQuoteDust = true; // if not showing Quote Dust, then showing QuoteAmalgamate

    // Wait for resources
    this.ready = false;
    this.resources.on("ready", () => {
      // Setup
      console.log("resources ready");
      this.stars = new Stars();
      // this.hexagons = new Hexagons();
      this.environment = new Environment();
      this.samirCube = new SamirCube();
      this.ready = true;
    });
  }
  update() {
    if (this.ready) {
      this.stars.update();
      this.samirCube.update();
    }
  }
}
