import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three";

const Model = React.memo((props) => {
  const ref = useRef();
  const light = useRef();
  const gltf = useLoader(GLTFLoader, "/assets/3d/headexported.glb");
  const actualMouse = useRef([0, 0]);
  const easing = 0.05;

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
        color={props.second ? "#ED0924" : "#1736BF"}
        intensity={props.second ? 3 : 5}
      />
      <scene ref={ref} {...props}>
        <mesh rotation={[1.5, 0, 0]} scale={[0.14, 0.14, 0.14]}>
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
          <meshStandardMaterial
            precision={"lowp"}
            attach="material"
            roughness={1}
            metalness={0}
            emissive={"#060809"}
            color={"#1A1A1A"}
          />
        </mesh>
      </scene>
    </>
  );
});

export default function HeadSketch(props) {
  return (
    <Fade>
      <SketchContainer>
        <Canvas camera={{ position: [0, -0.1, 5] }} raycaster={false}>
          <ambientLight intensity={1} color={[8, 8, 8]} />
          <directionalLight
            intensity={1}
            color={props.second ? "#1736BF" : "#690008"}
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

const SketchContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 10%;
  position: relative;
  left: -30%;
  z-index: -1;
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
  div div div {
    width: 100%;
    height: 100%;
    padding-left: 10%;
    color: ${(props) => props.theme.colors.foreground_lowest};
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 3.5px;
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
