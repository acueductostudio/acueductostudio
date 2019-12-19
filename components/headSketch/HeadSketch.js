import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three";

function Model(props) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "/static/assets/3d/headexported.glb");

  useFrame(() => (ref.current.rotation.y += 0.005));

  return (
    <scene ref={ref} {...props}>
      <mesh rotation={[1.5, 0, 0]} scale={[0.14, 0.14, 0.14]}>
        <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
        <meshStandardMaterial
          precision={"lowp"}
          attach="material"
          roughness={1}
          metalness={0}
          emissive={"#1A1A1A"}
          color={"#1A1A1A"}
        />
      </mesh>
    </scene>
  );
}

export default function HeadSketch(props) {
  return (
    <Fade>
      <SketchContainer>
        <Canvas camera={{ position: [1, 0, 5] }} raycaster={false}>
          <ambientLight intensity={0} color={[8, 8, 8]} />
          <pointLight
            position={[100, 0, 10]}
            color={props.second ? "#ED0924" : "#1736BF"}
            intensity={3}
          />
          <Suspense fallback={null}>
            <Model />
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
  left: -10%;
  z-index: -1;
  @media (max-width: 1250px) {
    margin-bottom: 8%;
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
    color: ${props => props.theme.colors.foreground_lowest};
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
