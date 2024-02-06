import * as THREE from "three";
import Experience from "../Experience.js";

export default class Plane {
  constructor(sourceTexture, theta, radius) {

    this.experience = new Experience();
    this.scene = this.experience.scene;

    // add a red torus knot to the scene
    this.geometry = new THREE.PlaneGeometry(10, 10);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    this.video = sourceTexture
    this.video.play()
    this.videoTexture = new THREE.VideoTexture(this.video);
    this.videoMaterial = new THREE.MeshBasicMaterial({
      map: this.videoTexture,
    });

    this.plane = new THREE.Mesh(this.geometry, this.videoMaterial);
    this.radius = radius;
    this.theta =  theta; 
    this.plane.position.add(new THREE.Vector3(Math.cos(theta) * radius ,  0, Math.sin(theta) * radius ))
    this.plane.lookAt(new THREE.Vector3(0,0,0))
    //console.log(position)
    this.scene.add(this.plane)
   
  }

  update() {
    if (this.plane) {
      this.plane.position.add(new THREE.Vector3(Math.cos(this.theta+0.01) * this.radius ,  0, Math.sin(this.theta+0.01) * this.radius ))
      this.plane.lookAt(new THREE.Vector3(0,0,0))
    }
  }
}
