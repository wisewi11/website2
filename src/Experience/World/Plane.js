import * as THREE from "three";
import Experience from "../Experience.js";

export default class Plane {
  constructor(sourceTexture, position) {

    this.experience = new Experience();
    this.scene = this.experience.scene;

    // add a red torus knot to the scene
    this.geometry = new THREE.PlaneGeometry();
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    this.video = sourceTexture
    this.video.play()
    this.videoTexture = new THREE.VideoTexture(this.video);
    this.videoMaterial = new THREE.MeshBasicMaterial({
      map: this.videoTexture,
    });

    this.plane = new THREE.Mesh(this.geometry, this.videoMaterial);

    this.plane.position.add(position)

    this.scene.add(this.plane)

    
   
  }
  
  
}
