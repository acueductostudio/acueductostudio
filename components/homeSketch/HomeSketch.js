import styled from "styled-components";
import { useRef, useMemo } from "react";
import Fade from "react-reveal/Fade";
import { Canvas, useFrame, useThree } from "react-three-fiber";

const noctaves = 5.4;
const c = [
  0,
  2,
  3,
  4,
  -1,
  3,
  4,
  0,
  -3,
  3,
  -2,
  2,
  1,
  -2,
  4,
  -4,
  2,
  -2,
  0,
  -1,
  -4,
  1
];

const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform int noctaves;
uniform float c[22];
float mousefactor;

float noise( in vec2 x )
{
	return sin(0.6*x.y)*sin(0.6*x.x);
}

const mat2 rot = mat2( 0.80,  0.6, -0.6,  0.8 );
float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.55;
    vec2 shift = 10.0*vec2(c[11],c[12]);
    for (int i = 0; i < 12; ++i) { 
		if(i>=noctaves)break;
        v += a * noise(_st);
        _st = rot*_st* 2.0 + shift;
        a *= 0.6;
    }
    return v;
}

void main() {
		vec2 mouse=iMouse/iResolution;
    vec2 st =(-iResolution.xy+2.0*gl_FragCoord.xy)/iResolution.y;
    vec3 color = vec3(0.035, 0.105, 0.827);
    vec2 q = vec2(0.);
    q.x = fbm( st+vec2(c[0],c[1]*0.03*iTime) ); 
    q.y = fbm( st+vec2(c[2],c[3]*0.01*iTime) );
    vec2 r = vec2(0.);

r.x = fbm( st+ (3.0*mouse.x+3.4)*q+vec2(c[5],c[6]));
r.y = fbm( st+ (2.0*mouse.y+4.5)*q*sin(.02*iTime)+vec2(c[2]*.05*iTime,c[9]));
float f = fbm(st+c[10]*(r+length(q) ));
color = smoothstep(vec3(0.0, 0.0, 0.0),vec3(1.0,1.0,1.0),color);
color = mix(color,vec3(0.16,1.05*(1.0+cos(0.5+.2*iTime)),0.958),r.y+length(q));
color = mix(color,vec3(0.1*sin(0.1*iTime),0.0,0.1*cos(0.13*iTime)),length(r+q));
color = mix(color, vec3(0.921, 0.135, 0.184), dot(r,r) );
color*=(1.5*f*f*f+1.2*f*f+2.3*f);
    gl_FragColor = vec4(color,1.);
}
`;

const vertexShader = `
#ifdef GL_ES
precision mediump float;
#endif
#extension GL_OES_standard_derivatives : enable

attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aTexCoord;
attribute vec4 aVertexColor;

varying vec3 var_vertPos;
varying vec4 var_vertCol;
varying vec3 var_vertNormal;
varying vec2 var_vertTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix;

void main() {
gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.001);

var_vertPos      = aPosition;
var_vertCol      = aVertexColor;
var_vertNormal   = aNormal;
var_vertTexCoord = aTexCoord;
}
`;

function Thing() {
  const ref = useRef();
  const { viewport } = useThree();

  const data = useMemo(
    () => ({
      uniforms: {
        iResolution: [1000, 1000],
        iTime: 10,
        iMouse: [100, 100],
        noctaves: noctaves,
        c: c
      },
      fragmentShader,
      vertexShader
    }),
    []
  );

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry attach="geometry" args={[1, 1]} />
      {/* <meshBasicMaterial attach="material" color={"pink"} depthTest={false} /> */}
      <shaderMaterial attach="material" {...data} depthTest={false} />
    </mesh>
  );
}

const HomeSketch = ({ hide }) => {
  return (
    <SketchContainer>
      {hide ? (
        <Fade>
          <Background />
        </Fade>
      ) : (
        <Canvas>
          <Thing />
        </Canvas>
      )}
    </SketchContainer>
  );
};

export default React.memo(HomeSketch);

const SketchContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: fixed;
  z-index: 0;
  pointer-events: none;
  &:before {
    content: " ";
    height: 100vh;
    width: 18px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    z-index: 100;
    opacity: 0;
  }
  &:after {
    content: " ";
    height: 100vh;
    width: 18px;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    z-index: 100;
    opacity: 0;
  }
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -20px;
    bottom: -30px;
    pointer-events: none;
    overflow: hidden;
  }
  @media (max-width: 600px) {
    overflow: hidden;
    &:before,
    &:after {
      opacity: 1;
    }
  }
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  background-image: url("/static/assets/img/layout/fond.jpg");
  background-size: cover;
`;
