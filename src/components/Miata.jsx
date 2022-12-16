import React, {useEffect, useRef, useState} from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Miata () {
  const mountRef = useRef(null);

  useEffect(() => {

    let mixer;
    const loader = new GLTFLoader();
    loader.load('./assets/miata.glb', function(gltf) {
      gltf.scene.scale.multiplyScalar(1 / 80);

      gltf.scene.position.x = -1.5; // once rescaled, position the model where needed
      gltf.scene.position.z = -1.;
      gltf.scene.position.y = -0.75;

      scene.add(gltf.scene);
      mixer = new THREE.AnimationMixer(gltf.scene)
      const clips = gltf.animations;
      const clip = THREE.AnimationClip.findByName(clips, 'Scene');
      const action = mixer.clipAction(clip);
      console.log(action)
      action.play();
      // gltf.animations; // Array<THREE.AnimationClip>
      // gltf.scene; // THREE.Group
      // gltf.scenes; // Array<THREE.Group>
      // gltf.cameras; // Array<THREE.Camera>
      // gltf.asset; // Object
    }, function ( xhr ) {

      // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }, function(error) {
      console.error('this is an error:',error);
    });

    var scene = new THREE.Scene();
    const light = new THREE.PointLight( 0xffffff, 2.5, 100 );
    light.position.set( 3, 3, 2 );
    scene.add( light );

    const moreLight = new THREE.PointLight( 0xffffff, 2.5, 10 );
    moreLight.position.set( -1, 3, 2 );
    scene.add( moreLight );
    // scene.add(new THREE.AxesHelper(25))

    const directionalLight = new THREE.DirectionalLight( 0xffffff);
    directionalLight.position.set(0, 0, 2);
scene.add( directionalLight );

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(1,1,2.5); // Set position like this
    camera.lookAt(new THREE.Vector3(0,0,0)); // Set look at coordinate like this
    camera.position.z = 3;

    var renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth-200, window.innerHeight-200 );

    mountRef.current.appendChild( renderer.domElement );

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const clock = new THREE.Clock();

    var animate = function () {
      requestAnimationFrame( animate );
      if(mixer) {
        mixer.update(clock.getDelta());
    }

      renderer.render( scene, camera );
    };
    animate();
  },[]);

  return (
    <div>
      <h1>Miata</h1>
      <div ref={mountRef} id='miata'>
        Miata goes here!
      </div>
    </div>
  )
}