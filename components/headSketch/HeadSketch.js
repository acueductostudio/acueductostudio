import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three";
import HeadLoader from "components/headSketch/HeadLoader";

const Model = React.memo((props) => {
  const ref = useRef();
  const light = useRef();
  const gltf = useLoader(GLTFLoader, "/assets/3d/headexported.glb");
  const actualMouse = useRef([0, 0]);
  const easing = 0.05;
  const scale = 0.14;
  // console.log(gltf);

  useFrame(() => {
    props.second
      ? (ref.current.rotation.y -= 0.005)
      : (ref.current.rotation.y += 0.005);
    light.current.position.x = roundValue(props.mouse.current[0] / 10, 0);
    light.current.position.y = roundValue(-props.mouse.current[1] / 10, 1);
  }, 0);

  const roundValue = (targetX, index) => {
    var dx = targetX - actualMouse.current[index];
    actualMouse.current[index] += dx * easing;
    return actualMouse.current[index];
  };

  return (
    <>
      <pointLight
        ref={light}
        position={[0, 0, 10]}
        color={props.second ? "#68BFA3" : "#DA012B"}
        intensity={props.second ? 5 : 8}
      />
      <scene ref={ref} {...props}>
        <mesh rotation={[1.5, 0, 0]} scale={[scale, scale, scale]}>
          <bufferGeometry
            attach="geometry"
            {...gltf.nodes.male_headobj.geometry}
          />
          <meshStandardMaterial
            precision={"lowp"}
            attach="material"
            roughness={0.7}
            metalness={1}
            emissive={"#080C0C"}
            color={props.second ? "#56027A" : "#1A4CE0"}
            flatShading={false}
            computeVertexNormals
          />
        </mesh>
      </scene>
    </>
  );
});

function HeadSketch(props) {
  return (
    <Fade triggerOnce>
      <SketchContainer>
        <Canvas camera={{ position: [0, -0.1, 5] }} raycaster={false}>
          <ambientLight intensity={0.1} color={[100, 100, 100]} />
          <directionalLight
            intensity={1}
            color={props.second ? "#DA5686" : "#43C5A8"}
            position={[-1500, -1500, 200]}
          />
          <Suspense fallback={null}>
            <Model second={props.second} mouse={props.mouse} />
          </Suspense>
        </Canvas>
      </SketchContainer>
    </Fade>
  );
}
HeadSketch.displayName = "HeadSketch";
export default HeadSketch;

const SketchContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 10%;
  position: relative;
  left: -30%;
  z-index: -1;
  background-color: ${(p) => p.theme.colors.background};
  @media (max-width: 1250px) {
    margin-bottom: 8%;
    left: -20%;
  }
  @media (max-width: 1000px) {
    margin-bottom: 7%;
  }
  @media (max-width: 600px) {
    left: -30px;
  }
  > div {
    mix-blend-mode: difference;
  }
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;
