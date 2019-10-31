
function addAxis()
{
  var pivot  = new THREE.Object3D();

  var Xaxis = addVector(10,3,1,2, 0xff0000);
  var Yaxis = addVector(10,3,1,2, 0x00ff00);
  var Zaxis = addVector(10,3,1,2, 0x0000ff);
  Xaxis.rotateZ(-Math.PI / 2);
  Zaxis.rotateX(Math.PI / 2);

  pivot.add(Xaxis);
  pivot.add(Yaxis);
  pivot.add(Zaxis);

  return pivot;
}


function addLights(scene)
{
  // add subtle ambient lighting
  var ambientLight = new THREE.AmbientLight(0x0c0c0c, 4);
  scene.add(ambientLight);

  // add spotlight for the shadows
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-40, 40, 50);
  spotLight.castShadow = true;
  scene.add(spotLight);
}

function addPendulum(scene)
{
  var geo  = new THREE.SphereGeometry(5, 32, 32);
  var mat  = new THREE.MeshPhongMaterial({color: 0xff0000});
  var m    = new THREE.Mesh(geo, mat);
  scene.add(m);
  var geo = new THREE.CylinderGeometry(1, 1, 10, 100);
  var mat = new THREE.MeshPhongMaterial({color : 0x00ff00});
  var cyl = new THREE.Mesh(geo, mat);
  scene.add(cyl);
  return {"ball" : m, "rope" : cyl};
}

function addVector(length, arrowLength, diameter = 1, arrowWidth =2, color=0xff0000)
{
  var pivot = new THREE.Object3D();

  var geo = new THREE.CylinderGeometry(diameter, diameter, length, 100);
  var mat = new THREE.MeshPhongMaterial({color : color});
  var cyl = new THREE.Mesh(geo, mat);
  cyl.position.y = length / 2.;

  var geometry = new THREE.ConeGeometry( arrowWidth, arrowLength, 32 );
  var material = new THREE.MeshPhongMaterial( {color: color} );
  var cone = new THREE.Mesh( geometry, material );
  cone.position.y = length/2;
  cyl.add(cone);

  pivot.add(cyl);
  return pivot;
}
