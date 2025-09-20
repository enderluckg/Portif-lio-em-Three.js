import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/controls/OrbitControls.js';

// Cena
const cena = new THREE.Scene();

// Câmera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderizador
const renderizador = new THREE.WebGLRenderer({ antialias: true });
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Esfera
const geometria = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const esfera = new THREE.Mesh(geometria, material);
cena.add(esfera);

// Luz
const luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(5, 5, 5);
cena.add(luz);

// OrbitControls (permite mover com mouse)
const controls = new OrbitControls(camera, renderizador.domElement);
controls.enableDamping = true; // movimento suave
controls.dampingFactor = 0.05;
controls.enablePan = true;  // mover cena arrastando
controls.enableZoom = true; // zoom com scroll

// Animação
function animar() {
  requestAnimationFrame(animar);
  controls.update(); // atualizar controles
  renderizador.render(cena, camera);
}
animar();

// Ajusta ao redimensionar a tela
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderizador.setSize(window.innerWidth, window.innerHeight);
});