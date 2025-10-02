import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
    import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/controls/OrbitControls.js';


    let contadorMercurio = 0;
    

    const divsobremim = document.getElementById('sobremim');
    const divsetavoltar = document.getElementById('setavoltar');



    let cameraTarget = null;
    let cameraStart = null;
    let cameraProgress = 0;
    let cameraDuration = 60; // frames (~1 segundo)

    // Função para iniciar a animação da câmera
    function moveCameraTo(targetPosition) {
      cameraStart = camera.position.clone();
      cameraTarget = targetPosition.clone();
      cameraProgress = 0;
    }

    




   // === Carregar textura da imagem ===
    const loader = new THREE.TextureLoader();
    const texturaSol = loader.load("texturaplanetas/2k_sun.jpg");
    const texturaMercurio = loader.load("texturaplanetas/2k_mercury.jpg");
    const texturaVenus = loader.load("texturaplanetas/2k_venus_surface.jpg");
    const texturaTerra = loader.load("texturaplanetas/2k_earth_daymap.jpg"); // coloque o nome do arquivo aqui
    const texturaMarte = loader.load("texturaplanetas/2k_mars.jpg");
    const texturaJupiter = loader.load("texturaplanetas/2k_jupiter.jpg");
    const texturaSaturno = loader.load("texturaplanetas/2k_saturn.jpg");
    const texturaUrano = loader.load("texturaplanetas/2k_uranus.jpg");
    const texturaNetuno = loader.load("texturaplanetas/2k_neptune.jpg"); 

    
    



    // Cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // OrbitControls (permite mover com mouse)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // movimento suave
    controls.dampingFactor = 0.05;
    controls.enablePan = true;  // mover cena arrastando
   controls.enableZoom = true; // zoom com scroll

    // Luz ambiente e ponto de luz para o sol
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    scene.add(pointLight);




    // Criando o Sol
    const sunGeometry = new THREE.SphereGeometry(8, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({
      emissiveMap: texturaSol, // A textura que vai brilhar
      emissive: 0xffffff,      // A cor do brilho (branco, para não alterar a cor da textura)
      emissiveIntensity : 1.5, // A intensidade do brilho
      color: 0x000000          // Cor base preta para não refletir a PointLight
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    sun.userData = { nome: "Sol", animacao: true ,clicks:0, descricao:"Sobre mim"};

    


    // criando mercurio
    const MercurioGeometry = new THREE.SphereGeometry(1, 32, 32);
    const mercurioMaterial = new THREE.MeshStandardMaterial({ map:texturaMercurio });
    const mercurio = new THREE.Mesh(MercurioGeometry, mercurioMaterial);

    // Grupo para a Mercurio orbitar o Sol
    const orbitaMercurio = new THREE.Object3D();
    scene.add(orbitaMercurio);
    mercurio.position.set(12, 0, 0);
    orbitaMercurio.add(mercurio);
    mercurio.userData = { nome: "Mercurio", animacao: true ,clicks:0,descricao:"Hard Skills"};



    // criando Venus
    const VenusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const VenusMaterial = new THREE.MeshStandardMaterial({ map:texturaVenus });
    const Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);

    // Grupo para a Mercurio orbitar o Sol
    const orbitaVenus = new THREE.Object3D();
    scene.add(orbitaVenus);
    Venus.position.set(15, 0, 0);
    orbitaVenus.add(Venus);
    Venus.userData = { nome: "Venus", animacao: true ,clicks:0,descricao:"Soft Skills"};



    // Criando a Terra
    const terraGeometry = new THREE.SphereGeometry(1, 32, 32);
    const terraMaterial = new THREE.MeshStandardMaterial({ map:texturaTerra });
    const terra = new THREE.Mesh(terraGeometry, terraMaterial);

    // Grupo para a Terra orbitar o Sol
    const OrbitaTerra = new THREE.Object3D();
    scene.add(OrbitaTerra);
    terra.position.set(18, 0, 0);
    OrbitaTerra.add(terra);
    terra.userData = { nome: "Terra", animacao: true ,clicks:0,descricao:"Projetos"};





    // Marte
    const MarteGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const marteMaterial = new THREE.MeshStandardMaterial({ map:texturaMarte });
    const marte = new THREE.Mesh(MarteGeometry, marteMaterial);

    // Grupo para a Marte orbitar o Sol
    const orbitaMarte = new THREE.Object3D();
    scene.add(orbitaMarte);
    marte.position.set(23, 0, 0);
    orbitaMarte.add(marte);
    marte.userData = { nome: "Marte", animacao: true ,clicks:0,descricao:"Contato"};



    // Júpiter
    const JupiterGeometry = new THREE.SphereGeometry(3, 32, 32);
    const jupiterMaterial = new THREE.MeshStandardMaterial({ map:texturaJupiter });
    const jupiter = new THREE.Mesh(JupiterGeometry, jupiterMaterial);

    // Grupo para a Júpiter orbitar o Sol
    const orbitaJupiter = new THREE.Object3D();
    scene.add(orbitaJupiter);
    jupiter.position.set(28, 0, 0);
    orbitaJupiter.add(jupiter);
    jupiter.userData = { nome: "Júpiter", animacao: true ,clicks:0,descricao:"SLA"};


    // Saturno
    const SaturnoGeometry = new THREE.SphereGeometry(1.7, 32, 32);
    const saturnoMaterial = new THREE.MeshStandardMaterial({ map:texturaSaturno });
    const saturno = new THREE.Mesh(SaturnoGeometry, saturnoMaterial);

    // Grupo para a Saturno orbitar o Sol
    const orbitaSaturno = new THREE.Object3D();
    scene.add(orbitaSaturno);
    saturno.position.set(34, 0, 0);
    orbitaSaturno.add(saturno);
    saturno.userData = { nome: "Saturno", animacao: true ,clicks:0,descricao:"Certificados"};


    // Urano
    const UranoGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const uranoMaterial = new THREE.MeshStandardMaterial({ map:texturaUrano });
    const urano = new THREE.Mesh(UranoGeometry, uranoMaterial);

    // Grupo para a Urano orbitar o Sol
    const orbitaUrano = new THREE.Object3D();
    scene.add(orbitaUrano);
    urano.position.set(39, 0, 0);
    orbitaUrano.add(urano);
    urano.userData = { nome: "Urano", animacao: true ,clicks:0,descricao:"Hobbies"};

    // Netuno
    const NetunoGeometry = new THREE.SphereGeometry(1.1, 32, 32);
    const netunoMaterial = new THREE.MeshStandardMaterial({ map:texturaNetuno });
    const netuno = new THREE.Mesh(NetunoGeometry, netunoMaterial);

    // Grupo para a Netuno orbitar o Sol
    const orbitaNetuno = new THREE.Object3D();
    scene.add(orbitaNetuno);
    netuno.position.set(43, 0, 0);
    orbitaNetuno.add(netuno);
    netuno.userData = { nome: "Netuno", animacao: true ,clicks:0,descricao:"Objetivos"};



    // Criando a Lua
    const moonGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    // Grupo para a Lua orbitar a Terra
    const moonOrbit = new THREE.Object3D();
    terra.add(moonOrbit);
    moon.position.set(2, 0, 0);
    moonOrbit.add(moon);

    // Posição inicial da câmera
    camera.position.set(10, 35, 15);
    camera.lookAt(scene.position);


    let cameraLookTarget = scene.position.clone(); // alvo padrão


    let animacaoMercurio = true;
    let animacaoVenus = true;
    let animacaoMarte = true;
    let animacaoJupiter = true;
    let animacaoSaturno = true;
    let animacaoUrano = true; 
    let animacaoNetuno = true;
    

    // Animação
    function animate() {
      requestAnimationFrame(animate);

     

      // Rotacionar o Sol em torno do próprio eixo
      sun.rotation.y += 0.004;

      // Rotacionar Mercurio em torno do próprio eixo
      mercurio.rotation.y += 0.02;
if(mercurio.userData.animacao == true){
      // Mercurio orbita o Sol 
      orbitaMercurio.rotation.y += 0.004;
   }
      // Rotacionar Venus em torno do próprio eixo
      Venus.rotation.y += 0.0018;
    if(Venus.userData.animacao == true){
      // Venus orbita o Sol 
      orbitaVenus.rotation.y += 0.003;
     }
     if(terra.userData.animacao == true){
      // A Terra orbita o Sol
      OrbitaTerra.rotation.y += 0.0047;
     }
      // A Terra gira em torno do próprio eixo
      terra.rotation.y += 0.004;

      // Rotacionar Marte em torno do próprio eixo
      marte.rotation.y += 0.05;
if(marte.userData.animacao == true){
      // Marte orbita o Sol 
      orbitaMarte.rotation.y += 0.0042;
}
      // Rotacionar Júpiter em torno do próprio eixo
      jupiter.rotation.y += 0.03;
if(jupiter.userData.animacao == true){
      // Júpiter orbita o Sol
      orbitaJupiter.rotation.y += 0.002;
}
      // Rotacionar Saturno em torno do próprio eixo
      saturno.rotation.y += 0.025;
if(saturno.userData.animacao == true){
      // Saturno orbita o Sol
      orbitaSaturno.rotation.y += 0.0015;
}
      // Rotacionar Urano em torno do próprio eixo
      urano.rotation.y += 0.02;
if(urano.userData.animacao == true){
      // Urano orbita o Sol
      orbitaUrano.rotation.y += 0.001;
}
      // Rotacionar Netuno em torno do próprio eixo
      netuno.rotation.y += 0.015;
if(netuno.userData.animacao == true){
      // Netuno orbita o Sol
      orbitaNetuno.rotation.y += 0.0008;
}
      // A Lua orbita a Terra
      moonOrbit.rotation.y += 0.003;

       if (cameraTarget) {
        cameraProgress++;
        const t = Math.min(cameraProgress / cameraDuration, 1);
        camera.position.lerpVectors(cameraStart, cameraTarget, t);
        camera.lookAt(cameraLookTarget);
        if (t === 1) {
          cameraTarget = null;
        }}

      renderer.render(scene, camera);


      // ...dentro da função animate, antes de renderer.render...
     
      
    }

    animate();


    //função para sol quando clicar pela 2 vez
     function solclicado2()
    {
            gsap.to(sun.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(sun.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(OrbitaTerra.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(OrbitaTerra.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaVenus.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaVenus.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaMercurio.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaMercurio.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaMarte.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaMarte.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaJupiter.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaJupiter.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaSaturno.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaSaturno.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaUrano.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaUrano.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaNetuno.position, { x: sun.position.x - 7, duration: 1, ease: "power2.out" });
            gsap.to(orbitaNetuno.position, { z: sun.position.z + 7, duration: 1, ease: "power2.out" });
            /*moveCameraTo(new THREE.Vector3(0, 0, 0))*/
            divsobremim.classList.remove('displaynone');
    }

    

    function criarEstrelas() {
      const estrela = document.createElement('div');
      estrela.classList.add('estrela');
      estrela.style.top = `${Math.random(100) * 100}%`;
      estrela.style.left = `${Math.random(100) * 100}%`;
      let top = parseFloat(estrela.style.top);
      let left = parseFloat(estrela.style.left);
      if (top > 40 && top < 60 && left > 45 && left < 60) {
        estrela.style.display = 'none';
      }
      else {
        estrela.style.width = `${Math.random(100) * 2 + 1}px`;
        estrela.style.height = estrela.style.width;
        document.body.appendChild(estrela);
        console.log(estrela.style.left);

      }
    }

    for (let i = 0; i < 300; i++) {
      criarEstrelas();
    }

    const planetas = [sun, terra, mercurio, Venus, marte, jupiter, saturno, urano, netuno];
    const raycaster = new THREE.Raycaster();
    
   
    document.getElementById("divvoltar").addEventListener('click', () => {
    
        divsobremim.classList.add('displaynone');
        moveCameraTo(new THREE.Vector3(10, 25, 15));
        cameraLookTarget = (scene.position);
        planetas.forEach(p => p.userData.animacao = true);
        planetas.forEach(p => p.userData.clicks = 0);
        sun.position.set(0, 0, 0);
        orbitaMercurio.position.set(0, 0, 0);
        orbitaVenus.position.set(0, 0, 0); 
        OrbitaTerra.position.set(0, 0, 0);
        orbitaMarte.position.set(0, 0, 0);
        orbitaJupiter.position.set(0, 0, 0);
        orbitaSaturno.position.set(0, 0, 0);
        orbitaUrano.position.set(0, 0, 0);
        orbitaNetuno.position.set(0, 0, 0);
 
        
    })


   document.getElementById("seguidora");


  window.addEventListener('mousemove', (event) => {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(planetas);

  document.getElementById("seguidora").classList.add('displaynone');
  planetas.forEach(p => {
    if (p.userData.clicks === 0) { // Só mexe na animação se o planeta não foi clicado
      p.userData.animacao = true;
    }
  });
   

  if (intersects.length > 0) {
    if(intersects[0].object.userData.clicks == 0){
    document.getElementById("seguidora").classList.remove('displaynone');
    console.log(intersects[0].object.userData.nome);
    document.getElementById("seguidora").style.top = event.clientY + "px";
    document.getElementById("seguidora").style.left = event.clientX + "px";
    /*document.getElementById("seguidora").innerHTML = intersects[0].object.userData.nome;*/
    document.getElementById("seguidora").innerHTML = intersects[0].object.userData.descricao;
    intersects[0].object.userData.animacao = false;
  
}
    
   
}

});


   

   
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
      // Normaliza coordenadas do mouse (-1 a 1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Coloque os planetas que deseja tornar clicáveis em um array
     
      const intersects = raycaster.intersectObjects(planetas);

     

      if (intersects.length > 0) {
        const planetaClicado = intersects[0].object;

        function planetaClicado1(planeta,posicaoabsolutaplaneta){

if (planetaClicado === planeta && planeta.userData.clicks < 2) {
    planeta.userData.clicks = 0;
    const estrelas = document.querySelectorAll('.estrela');
    estrelas.forEach(e => e.style.display = 'none');
    const posicaoabsolutaplaneta = new THREE.Vector3();
    planeta.getWorldPosition(posicaoabsolutaplaneta);
    if (planetaClicado == jupiter || planetaClicado == saturno) {

    moveCameraTo(new THREE.Vector3(posicaoabsolutaplaneta.x,posicaoabsolutaplaneta.y , posicaoabsolutaplaneta.z + 5));}
    else{
      moveCameraTo(new THREE.Vector3(posicaoabsolutaplaneta.x,posicaoabsolutaplaneta.y , posicaoabsolutaplaneta.z + 2));
    }

    // Para a animação do planeta clicado e garante que as outras continuem
    planetas.forEach(p => {
        p.userData.animacao = (p !== planetaClicado);
    });

    cameraLookTarget = posicaoabsolutaplaneta.clone();
    planeta.userData.clicks += 1;
    divsobremim.classList.add('displaynone');
    divsetavoltar.classList.remove('displaynone');
    
    
    
  
    if (planetaClicado === mercurio && mercurio.userData.clicks == 2)
     {
      
      // --- Primeiro movimento: deslocamento em Z ---
      // 1. Calcular a posição de mundo alvo após o deslocamento em Z
      const targetWorldPosAfterZ = posicaoMercurio.clone();
      targetWorldPosAfterZ.z += 0;

      // 2. Converter esta posição de mundo alvo para coordenadas locais em relação a 'orbitaMercurio'
      orbitaMercurio.worldToLocal(targetWorldPosAfterZ);

      // 3. Definir a posição local de Mercúrio para estas coordenadas locais calculadas
      mercurio.position.copy(targetWorldPosAfterZ);

      // --- Segundo movimento: animação GSAP para deslocamento em X ---
      // 1. Calcular a posição de mundo alvo para a animação GSAP (deslocamento de -1 no X do mundo)
      const targetWorldPosForGSAP = posicaoMercurio.clone(); // Usar a posição inicial do segundo clique
      targetWorldPosForGSAP.x -= 1; // Mover -1 no X do mundo
      orbitaMercurio.worldToLocal(targetWorldPosForGSAP); // Converter para local
      gsap.to(mercurio.position, { x: targetWorldPosForGSAP.x, y: targetWorldPosForGSAP.y, z: targetWorldPosForGSAP.z, duration: 1, ease: "power2.out" });
    
    }


}}

        
        if (planetaClicado === sun && sun.userData.clicks < 2) {
          moveCameraTo(new THREE.Vector3(10, 10, 10));
          cameraLookTarget = sun.position.clone();
          const estrelas = document.querySelectorAll('.estrela');
          estrelas.forEach(e => e.style.display = 'none');
          sun.userData.clicks += 1;

           setavoltar.classList.remove('displaynone');

           
          if (planetaClicado === sun && sun.userData.clicks == 2) {
            solclicado2();
          }

        }
         if (planetaClicado === terra) {

          planetaClicado1(terra,OrbitaTerra.position);
        }
         if (planetaClicado === mercurio ) {
          
          planetaClicado1(mercurio,orbitaMercurio.position);
          
         
          if (planetaClicado === mercurio && contadorMercurio == 2) {
            
            // --- Primeiro movimento: deslocamento em Z ---
            // 1. Calcular a posição de mundo alvo após o deslocamento em Z
            const targetWorldPosAfterZ = posicaoMercurio.clone();
            targetWorldPosAfterZ.z += 0;

            // 2. Converter esta posição de mundo alvo para coordenadas locais em relação a 'orbitaMercurio'
            orbitaMercurio.worldToLocal(targetWorldPosAfterZ);

            // 3. Definir a posição local de Mercúrio para estas coordenadas locais calculadas
            mercurio.position.copy(targetWorldPosAfterZ);

            // --- Segundo movimento: animação GSAP para deslocamento em X ---
            // 1. Calcular a posição de mundo alvo para a animação GSAP (deslocamento de -1 no X do mundo)
            const targetWorldPosForGSAP = posicaoMercurio.clone(); // Usar a posição inicial do segundo clique
            targetWorldPosForGSAP.x -= 1; // Mover -1 no X do mundo
            orbitaMercurio.worldToLocal(targetWorldPosForGSAP); // Converter para local
            gsap.to(mercurio.position, { x: targetWorldPosForGSAP.x, y: targetWorldPosForGSAP.y, z: targetWorldPosForGSAP.z, duration: 1, ease: "power2.out" });
          
          }
         
          
         
        }
        else if (planetaClicado === Venus) {
          planetaClicado1(Venus,orbitaVenus.position,)
        }
        else if (planetaClicado === marte) {
        planetaClicado1(marte,orbitaMarte.position);
        }
        else if (planetaClicado === jupiter) {
          planetaClicado1(jupiter,orbitaJupiter.position);
        }
        else if (planetaClicado === saturno) {
          planetaClicado1(saturno,orbitaSaturno.position);
        }
        else if (planetaClicado === urano) {
          planetaClicado1(urano,orbitaUrano.position);
        }
        else if (planetaClicado === netuno) {
          planetaClicado1(netuno,orbitaNetuno.position);
        }

      }

    });


    // Ajustar o tamanho da tela ao redimensionar
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });