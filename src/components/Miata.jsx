import React, {useEffect, useRef, useState} from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Miata () {
  const mountRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    // loader.load('path/to/model.glb', function(gltf) {
    //   scene.add(gltf.scene);
    // }, undefined, function(error) {
    //   console.error(error);
    // });

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    mountRef.current.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener('resize', onWindowResize, false);

    animate();

    // return () => mountRef.current.removeChild( renderer.domElement);
  },[]);

  return (
    <div id='Miata'>
      <h1>Miata</h1>
      <div ref={mountRef}>
        Miata goes here!
      </div>
    </div>
  )
}