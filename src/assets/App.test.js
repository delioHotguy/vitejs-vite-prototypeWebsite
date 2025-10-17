//<div id="info">Nealie Wheelie</div>
// src/App.test.js
test('basic test', () => {
  expect(1 + 1).toBe(2);
});

import * as THREE from 'three';
// import THREE from "three.min.js"; (outdated/old/backup)

//create camera for scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//use Web Gl for 3D rendering
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//bring in cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//Animate in scene
function animate() {
     //create rotation animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  renderer.setAnimationLoop( animate );
