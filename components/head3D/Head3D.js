import styled from "styled-components";
import { useCallback, useState, useMemo, Suspense, useRef } from "react";
import { unstable_createResource as createResource } from "./react-cache";
import { useSpring, a, interpolate } from "react-spring/three";
import { Canvas, useRender } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

// Creates a cached async resource
const resource = createResource(
  file =>
    new Promise(
      async res =>
        await new GLTFLoader().load("./static/assets/3d/" + file, res)
    )
);

function Model({ file }) {
  // Read from cache ... this will throw an exception which will be caught by <Suspense />
  const { scene } = resource.read(file);
  console.log(scene);
  // the model is read only for some reason
  // It won't come to this point until the resource has been fetched
  return (
    <>
      {console.log(0)}
      <mesh>
        <primitive
          object={scene}
          position={[0, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
          attach="geometry"
        />
      </mesh>
    </>
  );
}

function Cursor({ mouse, helper }) {
  return (
    <a.group
      position={interpolate([mouse], mouse => [
        (mouse[0] + mouse[0]) / 250,
        (-mouse[1] - mouse[1]) / 250,
        2
      ])}
    >
      <pointLight
        color={"#1740BF"}
        intensity={3}
        sphereSize={0.002}
        position={[0, 0, 0]}
      />
      {helper ? (
        <a.mesh position={[0, 0, 0]}>
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshLambertMaterial
            attach="material"
            color="#1740BF"
            refractionRatio={0}
          />
        </a.mesh>
      ) : null}
    </a.group>
  );
}

function PlaceHolder() {
  return (
    <mesh visible position={[1, 2, 3]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color="indianred" transparent />
    </mesh>
  );
}

function Scene({ mouse }) {
  let group = useRef();
  let light1 = useRef();
  let theta = 0;
  let theta2 = -20;
  useRender(() =>
    group.current.rotation.set(
      0.15 * Math.sin(THREE.Math.degToRad((theta += 0.12))),
      1.5 * Math.sin(THREE.Math.degToRad((theta2 += 0.12))),
      0
    )
  );

  return (
    <>
      <ambientLight intensity={0.06} />
      <group ref={light1}>
        <spotLight
          intensity={0.35}
          position={[-40, -30, 5]}
          angle={0.02}
          penumbra={1}
          color={"#CC2E44"}
        />
      </group>
      <group ref={group}>
        <Suspense fallback={<PlaceHolder />}>
          <Model file={"rodrigo.gltf"} />
        </Suspense>
      </group>
      <Cursor mouse={mouse} />
    </>
  );
}

function Head3D() {
  const [{ mouse }, setMouse] = useSpring(() => ({ mouse: [0, 0] }));
  let model = useRef();
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      setMouse({
        mouse: [
          x - model.current.clientWidth * 1.5,
          y - (model.current.clientHeight * 2) / 2
        ]
      }),
    [setMouse]
  );
  return (
    <ModelContainer onMouseMove={onMouseMove} ref={model}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Scene mouse={mouse} />
      </Canvas>
    </ModelContainer>
  );
}
export default Head3D;

const ModelContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  left: -20%;
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;
