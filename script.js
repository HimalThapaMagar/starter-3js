// import * as three from 'three';

// const canvas = document.querySelector('.webgl');
// //creating scene
// const scene = new three.Scene();

// // creating a object let's say a cube
// const geometry = new three.BoxGeometry(1, 1, 1);
// const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
// const mesh = new three.Mesh(geometry, material);
// scene.add(mesh);

// //creating camera
// const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;
// scene.add(camera);


// //creating renderer
// const renderer = new three.WebGLRenderer({
//     canvas: canvas
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);


import * as three from 'three';

const canvas = document.querySelector('.webgl');
const scene = new three.Scene();

const geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new three.Mesh(geometry, material);
scene.add(mesh);

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

const renderer = new three.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setSize(window.innerWidth, window.innerHeight);
camera.aspect = window.innerWidth / window.innerHeight;
renderer.render(scene, camera);