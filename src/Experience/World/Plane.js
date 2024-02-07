import * as THREE from "three";
import Experience from "../Experience.js";

export default class plane {
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

    this.object = new THREE.Mesh(this.geometry, this.videoMaterial);
    this.radius = radius;
    this.theta =  theta; 
    this.object.position.add(new THREE.Vector3(Math.cos(theta) * radius ,  0, Math.sin(theta) * radius ))
    this.object.lookAt(new THREE.Vector3(0,0,0))
    //console.log(position)
    this.scene.add(this.object)
   
  }

  update() {
    if (this.object) {
      this.object.position.add(new THREE.Vector3(Math.cos(this.theta+0.01) * this.radius ,  0, Math.sin(this.theta+0.01) * this.radius ))
      this.object.lookAt(new THREE.Vector3(0,0,0))
    }
  }
}
