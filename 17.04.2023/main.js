// imports
import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);
camera.position.setZ(0);
camera.position.setY(0);
camera.position.setX(0);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// lights
const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffaaff);
pointLight.position.set = (300,5,-500);
scene.add(ambientLight, pointLight);


// geometries
const geometry = new THREE.BoxGeometry(20,20,20);
const material = new THREE.MeshStandardMaterial({ color: 0xde7a3f,wireframe:false });
const pyro = new THREE.Mesh(geometry, material);
scene.add(pyro);

pyro.position.x = 0;
pyro.position.y = 0;
pyro.position.z = -50;

const geometry2 = new THREE.TorusGeometry(30,5,50,80);
const material2 = new THREE.MeshStandardMaterial({ color: 0xde7a3f,wireframe:false });
const pyro2 = new THREE.Mesh(geometry2, material2);
scene.add(pyro2);

pyro2.position.x = 0;
pyro2.position.y = 0;
pyro2.position.z = -50;

const geometry3 = new THREE.TorusGeometry(30,5,5,80);
const material3 = new THREE.MeshStandardMaterial({ color: 0xde7a3f,wireframe:true });
const pyro3 = new THREE.Mesh(geometry3, material3);
scene.add(pyro3);

pyro3.position.x = 215;
pyro3.position.y = 10;
pyro3.position.z = -20;

const geometry4 = new THREE.TetrahedronGeometry(300,300);
const material4 = new THREE.MeshStandardMaterial({ color: 0xde7a3f,wireframe:true});
const pyro4 = new THREE.Mesh(geometry4,  material4);
scene.add(pyro4);

pyro4.position.x = 0;
pyro4.position.y = 0;
pyro4.position.z = -50;

// scroll Animation

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
  
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.1;
    // camera.rotation.y = t * -0.0001;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();


// draw
function animate() {
    requestAnimationFrame(animate);
    pyro.rotation.z += 0.01;
    pyro.rotation.y += 0.02;

    pyro2.rotation.x -= 0.01;
    pyro2.rotation.y -= 0.02;

    pyro3.rotation.x -= 0.01;

    pyro4.rotation.x += 0.0001;
    pyro4.rotation.y += 0.0001;

    renderer.render(scene, camera);
}

animate();