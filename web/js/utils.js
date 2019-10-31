/*--------------------------------------------------------------------------------------------------------------------*/
/*
    Stats.js initialization
    Creates a window which monitors performance ( fps, ms)
    in top left window

    return : stats element
 */
function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  // Align top-left
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById("Stats-output").appendChild(stats.domElement);
  return stats;
}


/*--------------------------------------------------------------------------------------------------------------------*/
/*
    Three.js initialization

    creates renderer, configures it ( displays it as a fullscreen window )
    appends canvas to the given id. Also creates scene, camera ( some configuration
    is also applied; looking at the beggining of coordinate frame)

    return : array of elements [Three.js renderer, Three.js scene, Three.js camera, Three.js OrbitControls]
 */
function configureTHREE_JS()
{
  // Renderer Configuration
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add canvas element to document
  document.getElementById("WebGL-output").appendChild( renderer.domElement );

  // initialization of scene, camera and orbit controls ( rotating camera with mouse )
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
  var controls = new THREE.OrbitControls( camera, renderer.domElement );

  // setup camera ( set some position ) and look at the beggining of the frame
  camera.position.set( 0, 20, 100 );
  camera.lookAt(0,0,0);
  //controls.update() must be called after any manual changes to the camera's transform
  controls.update();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;

  // when size of document is changed, change aspect ratio of camera
  // and 'refit' the document to renderer
  document.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  });

  return [renderer, scene, camera, controls];
}

/*--------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------*/
/*
    dat.gui elements configuration

    return : dat.gui element with elements
 */
function configureDatGui()
{
  var params = new function () { };
  var gui = new dat.GUI();

  return gui;
}

/*--------------------------------------------------------------------------------------------------------------------*/
