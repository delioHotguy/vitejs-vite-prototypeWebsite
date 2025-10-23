import './style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three';

console.log("main.js loaded!");

// Three.js Scene Component
class ThreeScene extends React.Component {
  componentDidMount() {
    console.log("ThreeScene componentDidMount called");
    
    // Create scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Create renderer with specific settings
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1);
    
    // Add canvas to the mount element
    this.mount.appendChild(this.renderer.domElement);
    console.log("Renderer canvas added to DOM");
    
    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    console.log("Cube created and added to scene");
    
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
        style={{ 
          width: '100%', 
          height: '100vh',
          position: 'relative',
          zIndex: 1
        }}
      />
    );
  }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, initializing Three.js");
  const container = document.getElementById('three-container');
  if (container) {
    console.log("Container found, creating React root");
    const root = ReactDOM.createRoot(container);
    root.render(<ThreeScene />);
  } else {
    console.error("Container not found!");
  }
});