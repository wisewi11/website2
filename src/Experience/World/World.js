import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Plane from "./Plane.js";


// import Hexagons from "./Hexagons.js";

export default class World {

  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.floor = new Floor();

    const videos = ["video1","video1","video1","video1", "video1"];
    var radius = 10
    var angle = 2 * Math.PI / videos.length;
    var theta = 0;
    this.planes = []

    for (var i = 0; i < videos.length; i++) {

        var plane = new Plane(document.getElementById(videos[i]), theta,  radius);
        this.planes += plane
        theta += angle;
    }

    console.log(this.planes)

    this.showingQuoteDust = true; // if not showing Quote Dust, then showing QuoteAmalgamate

    // Wait for resources
    this.ready = false;
    this.resources.on("ready", () => {
      // Setup
      console.log("resources ready");
      // this.hexagons = new Hexagons();
      this.environment = new Environment();
      this.ready = true;
    });
  }
  update() {
    for(let i = 0; i < this.planes.length; i++) {
      //console.log(this.planes[i])
    }
  }
}
