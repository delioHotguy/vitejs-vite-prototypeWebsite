import './style.css';
import * as THREE from 'three';

console.log("main.js loaded!");

// Simple Three.js setup without React
function initThreeJS() {
  console.log("Initializing Three.js...");
  
  // Create scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 1);
  
  // Add to container
  const container = document.getElementById('three-container');
  if (container) {
    container.appendChild(renderer.domElement);
    console.log("Renderer added to container");
  } else {
    console.error("Container not found!");
    return;
  }
  
  // Create cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  console.log("Cube created and added to scene");
  
  // Position camera
  camera.position.z = 5;
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
  console.log("Animation started");
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', initThreeJS);