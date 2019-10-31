var renderer, scene, camera, controls;

var threejsElements = configureTHREE_JS();
renderer = threejsElements[0]; scene = threejsElements[1]; camera = threejsElements[2]; controls = threejsElements[3];

var stats = initStats();
var gui   = configureDatGui();

// Create World
addLights(scene);

/*
// add pendulum to scene
objects = addPendulum(scene);
var ball = objects["ball"];
var rope = objects["rope"];
*/

// Animation Loop
function animate()
{
  stats.update();
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}


animate();
