// imports
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 3d file preload
const blenderFajl = new URL('panj.glb', import.meta.url);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.setZ(5);
camera.position.setY(3);
camera.position.setX(-3);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

// light
const pointLight = new THREE.PointLight(0xff00ff, 2.0);
pointLight.position.set = (300,500,0)
const Light2 = new THREE.DirectionalLight(0xffffff, 1.0);
scene.add(pointLight, Light2);

// load assets
const assetloader = new GLTFLoader();
assetloader.load(blenderFajl.href, function(gltf) {
    const model = gltf.scene;
    scene.add(model); 
}, undefined, function(error){
    console.log(error);
});

// scroll Animation

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
  
    camera.rotation.x = t * +0.000007;
    camera.position.x = t * +0.0007;
    camera.position.y = t * -0.001;
    camera.rotation.z = t * -0.0002;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();

// draw
function animate() {
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);