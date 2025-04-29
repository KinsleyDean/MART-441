var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var  Skull; //, cube, cube2,
var modelObject;
var floatingCubes = [];
var floatingShapes = [];
var floatingSpikyShapes = [];




// create the first box
/*function createBox() {
  // create a box
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0xCBC3E3 //0x324ca8
  });
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(50, 0, 0);
  scene.add(cube);
  cube.scale.x = 15; // SCALE
  cube.scale.y = 15; // SCALE
  cube.scale.z = 15; // SCALE


  animate();
}*/

function isPositionClear(pos, existingObjects, minDistance) {
  for (let obj of existingObjects) {
    if (pos.distanceTo(obj.position) < minDistance) {
      return false;
    }
  }
  return true;
}

/////////////////////
function createFloatingCubes(count) {
  const minDistance = 20; // minimum distance between cubes
for (let i = 0; i < count; i++) {
  let geometry = new THREE.BoxGeometry();
  let material = new THREE.MeshStandardMaterial({
    color: Math.random() * 0xffffff,
    metalness: 0.6,   // higher = more reflective
    roughness: 0.5    // lower = shinier
  });

  let cube = new THREE.Mesh(geometry, material);
  cube.scale.set(15, 15, 15);  // width, height, depth

  let positionOK = false;
  let attempts = 0;

  while (!positionOK && attempts < 100) {
    attempts++;

    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 800,
      (Math.random() - 0.5) * 800,
      (Math.random() - 0.5) * 800
    );

    positionOK = true;

    if (
      isPositionClear(pos, floatingCubes, minDistance) &&
      isPositionClear(pos, floatingShapes, minDistance)
    ) {
      positionOK = true;
      cube.position.copy(pos);
      cube.userData = {
        rotSpeedX: Math.random() * 0.02,
        rotSpeedY: Math.random() * 0.02
      };
      scene.add(cube);
      floatingCubes.push(cube);
    }
  }
}
}

////////////
function createOtherFloatingShapes(count) {
  const minDistance = 20; // Minimum distance between objects
  const maxAttempts = 100; // Maximum attempts to find a valid position

 

  const geometries = [
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.ConeGeometry(1, 2, 32),
    new THREE.CylinderGeometry(1, 1, 2, 32),
    new THREE.TorusGeometry(1, 0.3, 16, 100),
    
  ];

  for (let i = 0; i < count; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      metalness: 0.6,
      roughness: 0.2
    });

    const mesh = new THREE.Mesh(geometry, material);
    const scale = Math.random() * 25 + 5;
    mesh.scale.set(scale, scale, scale);

    let positionOK = false;
    let attempts = 0;

    while (!positionOK && attempts < 100) {
      attempts++;
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800
      );

      positionOK = true;

      // Check against all existing shapes
      for (let other of floatingShapes) {
        const minDistance = 80; // tweak for spacing
        if (pos.distanceTo(other.position) < minDistance) {
          positionOK = false;
          break;
        }
      }

      if (positionOK) {
        mesh.position.copy(pos);
        mesh.userData = {
          rotSpeedX: Math.random() * 0.02,
          rotSpeedY: Math.random() * 0.02
        };
        scene.add(mesh);
        floatingShapes.push(mesh);
      }
    }
  }
}

function createSpikyFloatingShapes(count) {
  const minDistance = 80;
  const maxAttempts = 100;

  function createSpikyGeometry() {
    const geometry = new THREE.SphereGeometry(1, 10, 10);
    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const vertex = new THREE.Vector3().fromBufferAttribute(position, i);
      const scale = Math.random() * 0.5;
      vertex.multiplyScalar(scale);
      position.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geometry.computeVertexNormals();
    return geometry;
  }

  for (let i = 0; i < count; i++) {
    const geometry = createSpikyGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      metalness: 0.6,
      roughness: 0.2
    });

    const mesh = new THREE.Mesh(geometry, material);
    const scale = Math.random() * 50 + 30; // Large scale for spiky shapes
    mesh.scale.set(scale, scale, scale);

    let positionOK = false;
    let attempts = 0;

    while (!positionOK && attempts < maxAttempts) {
      attempts++;
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 850,
        (Math.random() - 0.5) * 850,
        (Math.random() - 0.5) * 850
      );

      positionOK = true;

      // Avoid overlap with spiky shapes, cubes, and other shapes
      for (let group of [floatingSpikyShapes, floatingShapes, floatingCubes]) {
        for (let other of group) {
          if (pos.distanceTo(other.position) < minDistance) {
            positionOK = false;
            break;
          }
        }
        if (!positionOK) break;
      }

      if (positionOK) {
        mesh.position.copy(pos);
        mesh.userData = {
          rotSpeedX: Math.random() * 0.02,
          rotSpeedY: Math.random() * 0.02
        };
        scene.add(mesh);
        floatingSpikyShapes.push(mesh);
      }
    }
  }
}
///////////////


// animate the first box
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  createBox2();
  ////////
  floatingCubes.forEach(cube => {
    cube.rotation.x += cube.userData.rotSpeedX;
    cube.rotation.y += cube.userData.rotSpeedY;
  });
  renderer.render(scene, camera);

}


// create the second box and add it as a child of the first box
/*function createBox2() {
  // create a box
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0xCD1C18 //0x1234ee
  });
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.set(2, 0);
  cube.add(cube2);
  //cube2.scale.x = .5; // SCALE
  //cube2.scale.y = .5; // SCALE
  //cube2.scale.z = .5; // SCALE

  animate2();
}*/


function animate2() {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;


}

/**
 * Generate a scene object with a background color
 **/

function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xDCA1A1);
  return scene;
}
//////////////


/**
 * Generate the camera to be used in the scene. Camera args:
 *   [0] field of view: identifies the portion of the scene
 *     visible at any time (in degrees)
 *   [1] aspect ratio: identifies the aspect ratio of the
 *     scene in width/height
 *   [2] near clipping plane: objects closer than the near
 *     clipping plane are culled from the scene
 *   [3] far clipping plane: objects farther than the far
 *     clipping plane are culled from the scene
 **/

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 0, 500);//(100, 50, -10);
  camera.lookAt(0, 0, 0);
  return camera;
}

/**
 * Generate the light to be used in the scene. Light args:
 *   [0]: Hexadecimal color of the light
 *   [1]: Numeric value of the light's strength/intensity
 *   [2]: The distance from the light where the intensity is 0
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 2, 2000);
  light.position.set(-200, 300, -200);
  scene.add(light);

  var light1 = new THREE.PointLight(0xffffff, 1, 2000);
  light1.position.set(-300, 400, -300);
  scene.add(light1);
  
  // Fill light (opposite side)
  var light2 = new THREE.PointLight(0xffffff, 0.6, 2000);
  light2.position.set(0, -300, 500);
  scene.add(light2);
  
  // Top-down light
  var light3 = new THREE.PointLight(0xffffff, 0.4, 2000);
  light3.position.set(0, 550, 0);
  scene.add(light3);

  var dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(300, 400, 300);
  scene.add(dirLight);

  var ambientLight = new THREE.AmbientLight(0x404040, 1.2);//(0x111111);
  scene.add(ambientLight);
  return light;
}

/**
 * Generate the renderer to be used in the scene
 **/

function getRenderer() {
  // Create the canvas with a renderer
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  // Add support for retina displays
  renderer.setPixelRatio(window.devicePixelRatio);
  // Specify the size of the canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Add the canvas to the DOM
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * Generate the controls to be used in the scene
 * @param {obj} camera: the three.js camera for the scene
 * @param {obj} renderer: the three.js renderer for the scene
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;

  controls.minDistance = 50;   // Set how close the camera can get
  controls.maxDistance = 600;  // Set how far the camera can go

  return controls;
}

/**
 * Load Skull model
 **/
////////////
function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/Skull.obj', function (object) {
    //object.position.set(0,0,0);//(0, Math.PI, 0); // Face camera
    object.rotation.set (Math.PI/ -2,0,0);//- Math.PI * 2;
    //object.rotation.z = Math.PI; // Optional: Rotate 180 degrees around the Z-axis if needed
    modelObject = object;
    scene.add(object);
    animateModel();
  });
}

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.x += 0.00;
  modelObject.rotation.y += 0.01;
}


/**
 * Render!
 **/

function render() {
  requestAnimationFrame(render);
  //////
  floatingCubes.forEach(cube => {
    cube.rotation.x += cube.userData.rotSpeedX;
    cube.rotation.y += cube.userData.rotSpeedY;
  });

  floatingShapes.forEach(shape => {
    shape.rotation.x += shape.userData.rotSpeedX;
    shape.rotation.y += shape.userData.rotSpeedY;
  });

  floatingSpikyShapes.forEach(spike => {
    spike.rotation.x += spike.userData.rotSpeedX;
    spike.rotation.y += spike.userData.rotSpeedY;
  });

  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
//var game1 = createBox();

createFloatingCubes(100); // Create 50 cubes
createOtherFloatingShapes(100);
createSpikyFloatingShapes(15); // 

loadModel()

render();
