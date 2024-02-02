import * as THREE from "three";
import Experience from "../Experience.js";

export default class SamirCube {
  constructor() {

    this.experience = new Experience();
    this.scene = this.experience.scene;

    // add a red torus knot to the scene
    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    this.video = document.getElementById("video1");
    this.video.play()
    this.videoTexture = new THREE.VideoTexture(this.video);
    this.videoMaterial = new THREE.MeshBasicMaterial({
      map: this.videoTexture,
    });

    this.cube = new THREE.Mesh(this.geometry, this.videoMaterial);
    this.scene.add(this.cube);
    this.cube.position.z = -4
    this.cube.position.y = 2
  }
  update() {



    this.cube.lookAt(this.experience.camera.instance.position);
    // this.cube.rotation.y += 0.01;
  }
  
}
