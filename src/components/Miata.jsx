import React, {useEffect, useRef, useState} from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Miata () {
  const mountRef = useRef(null);

  useEffect(() => {

    const loader = new GLTFLoader();
    loader.load('./assets/miata.glb', function(gltf) {

      gltf.scene.scale.multiplyScalar(1 / 80);

      gltf.scene.position.x = -1.5; // once rescaled, position the model where needed
      gltf.scene.position.z = -1.;
      gltf.scene.position.y = -0.75;

      scene.add(gltf.scene);
      gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
    }, function ( xhr ) {

      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
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
    // scene.add(new THREE.AxesHelper(5))

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(1,1,2.5); // Set position like this
    camera.lookAt(new THREE.Vector3(0,0,0)); // Set look at coordinate like this

    var renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth-100, window.innerHeight-100 );
    mountRef.current.appendChild( renderer.domElement );

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    camera.position.z = 3;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };




    animate();


    // var scene = new THREE.Scene();
    // scene.add(new THREE.GridHelper(8,12,0x888888, 0x444444));

    // const loader = new GLTFLoader();
    // loader.load('./assets/miata/scene.gltf', function(gltf) {
    //   scene.add(gltf.scene);
    // }, undefined, function(error) {
    //   console.error('this is an error:',error);
    // });

    // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // var renderer = new THREE.WebGLRenderer({alpha:true});
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // mountRef.current.appendChild( renderer.domElement );

    // var animate = function () {
    //   requestAnimationFrame( animate );
    //   renderer.render( scene, camera );
    // };

    // let onWindowResize = function () {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize( window.innerWidth, window.innerHeight );
    // }

    // window.addEventListener('resize', onWindowResize, false);

    // animate();

  },[]);

  return (
    <div>
      <h1>Miata</h1>
      <div ref={mountRef} id='Miata'>
        Miata goes here!
      </div>
    </div>
  )
}