/*
 * @Descripttion:
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-22 22:33:29
 */
import React, { FC, useEffect, useRef } from 'react';
import { connect, Dispatch } from 'umi';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

interface IndexProps {
  name: ModelState['name'];
  dispatch: Dispatch;
}

const mapStateToProps = ({ home, loading }: any) => {
  const { name } = home;
  return {
    name,
  };
};

const Index: FC<IndexProps> = (props) => {
  const domRef = useRef() as any 
  let mixer;

  const clock = new THREE.Clock();
  const stats = new Stats();
  // domRef.appendChild( stats.dom );

  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  // renderer.setPixelRatio( window.devicePixelRatio );
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // renderer.outputEncoding = THREE.sRGBEncoding;
  // domRef.appendChild( renderer.domElement );

  // const pmremGenerator = new THREE.PMREMGenerator( renderer );

  // const scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xbfe3dd );
  // scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

  // const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
  // camera.position.set( 5, 2, 8 );

  // const controls = new OrbitControls( camera, renderer.domElement );
  // controls.target.set( 0, 0.5, 0 );
  // controls.update();
  // controls.enablePan = false;
  // controls.enableDamping = true;

  // const dracoLoader = new DRACOLoader();
  // // dracoLoader.setDecoderPath( 'examples/jsm/libs/draco/gltf/' );

  return (
    <div ref={domRef}>
      {stats?.dom && stats.dom}
    </div>
  );
};

export default connect(mapStateToProps)(Index);
