import './style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

console.log("main.js loaded!");

// Three.js Scene Component
class ThreeScene extends React.Component {
  componentDidMount() {
    // Create scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(this.renderer.domElement);
    
    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    
    // Position camera
    this.camera.position.z = 5;
    
    // Start animation loop
    this.animate();
    
    // Handle window resize
    window.addEventListener('resize', this.handleResize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
  
  handleResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  animate = () => {
    requestAnimationFrame(this.animate);
    
    // Rotate cube
    if (this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
    
    this.renderer.render(this.scene, this.camera);
  }
  
  render() {
    return (
      <div 
        ref={mount => this.mount = mount}
        style={{ width: '100%', height: '100vh' }}
      />
    );
  }
}

// Render the Three.js scene
const container = document.getElementById('three-container');
const root = ReactDOM.createRoot(container);
root.render(<ThreeScene />);