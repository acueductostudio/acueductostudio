
import p5 from "p5";
export default function shade(p) {
  var noctaves, c, LDShader;
  //var gl;
  var frag = `
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
	return sin(0.6*x.y)*sin(0.6*x.x); //0.6 es el bueno
}

const mat2 rot = mat2( 0.80,  0.6, -0.6,  0.8 );
float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.55;
    vec2 shift = 10.0*vec2(c[11],c[12]);
    for (int i = 0; i < 12; ++i) { //noprotect (por la cuenta de C's?)
		if(i>=noctaves)break;
        v += a * noise(_st);
        _st = rot*_st* 2.0 + shift;
        a *= 0.6;
    }
    return v;
}

void main() {
		vec2 mouse=iMouse/iResolution;
    vec2 st =(-iResolution.xy+2.0*gl_FragCoord.xy)/iResolution.y;//(gl_FragCoord.xy/iResolution.xy);//
    vec3 color = vec3(0.035, 0.105, 0.827);
    vec2 q = vec2(0.);
    q.x = fbm( st+vec2(c[0],c[1]*0.01*iTime) ); // CAMBIAR A .03 el iTime
    q.y = fbm( st+vec2(c[2],c[3]*0.01*iTime) );
    vec2 r = vec2(0.);

//play with the values here!
r.x = fbm( st+ (3.0*mouse.x+3.4)*q+vec2(c[5],c[6]));
r.y = fbm( st+ (2.0*mouse.y+2.5)*q*sin(.02*iTime)+vec2(c[2]*.05*iTime,c[9]));
float f = fbm(st+c[10]*(r+length(q) ));
color = smoothstep(vec3(0.0, 0.0, 0.0),vec3(1.0,1.0,1.0),color);
color = mix(color,vec3(0.16,1.05*(1.0+cos(0.5+.2*iTime)),0.958),r.y+length(q));//verde
color = mix(color,vec3(0.1*sin(0.1*iTime),0.0,0.1*cos(0.13*iTime)),length(r+q));//.2+.2*(1.0+cos(0.5+.3*iTime)) //no mover los del tiempo //mover el primer time a 0.1
color = mix(color, vec3(0.921, 0.135, 0.184), dot(r,r) );
color*=(1.5*f*f*f+1.2*f*f+2.3*f);
//color+=.4*vec3(-1.96+r.x,-0.015+q);
//color=pow(color, vec3(.3));

//

    gl_FragColor = vec4(color,1.);
}

`;
  var vert = `
//standard vertex shader
#ifdef GL_ES
      precision mediump float;
    #endif
		#extension GL_OES_standard_derivatives : enable
    // attributes, in
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec2 aTexCoord;
    attribute vec4 aVertexColor;

    // attributes, out
    varying vec3 var_vertPos;
    varying vec4 var_vertCol;
    varying vec3 var_vertNormal;
    varying vec2 var_vertTexCoord;
    
    // matrices
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat3 uNormalMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.001);

      // just passing things through
      var_vertPos      = aPosition;
      var_vertCol      = aVertexColor;
      var_vertNormal   = aNormal;
      var_vertTexCoord = aTexCoord;
    }
`;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    //gl = this.canvas.getContext("webgl");
    //gl.disable(gl.DEPTH_LDShader);
    p.mouseX = p.width;
    p.mouseY = 1;
    noctaves = 5.4; // 5.4 es el bueno
    c = [];
    //c = [2.557566094429557, -4.296410644670314, -3.878153787190912, 4.113294966369807, 4.194878482216399, -3.143719222093857, -3.6571718448449664, -3.581960007281053, -1.9680436900826193, 0.8420085737706806, -2.5445653181743544, -3.0780415497762714, -1.934072665962141, -1.274849027059144, -2.9806958019568697, 3.8084704316059526, -1.6879492717415423, -0.4146388134507113, -0.1793594902147122, 4.738002974789719, -2.8164652466472906, 1.867132640344174]
//c = [3.9721575037486048, -1.7362156931576411, -3.852891123396114, 1.826170535930669, 2.052091394625908, 4.942118994436925, -0.47928067988518386, -2.921156026241627, 0.09800286991689333, 3.768799713848498, -2.1650610379164315, -1.0431065520325689, -3.507569972785578, 2.2021329176081235, 0.431898931949406, 1.465175854167418, -4.049161417148213, 3.8696853759261565, -1.682056562436851, -1.264072767158253, -4.191319794035946, -3.973464587040443]
  c = [0, 2, 3, 4, -1, 3, 4, 0, -3, 3, -2, 2, 1, -2, 4, -4, 2, -2, 0, -1, -4, 1]
//    initc(); //randomize initial points
    LDShader = new p5.Shader(this._renderer, vert, frag); //load shaders
    p.shader(LDShader); //shaders are applied
  };
  // function initc() {
  //   for (var i = 0; i < 22; i++) {
  //     c[i] = p.int(p.random(-5, 5));
  //   }
  //   console.log(c) //LOG THE C VALUES
  // }

  // Not sure if this was working before, check mobile
  // but now it responds on desktop
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }


  p.draw = function() {
    LDShader.setUniform("iResolution", [p.width, p.height]); //pass some values to the shader
    LDShader.setUniform("iTime", p.millis() * 0.001);
    LDShader.setUniform("iMouse", [p.mouseX-30, p.mouseY-10]);
    LDShader.setUniform("noctaves", noctaves); 
    LDShader.setUniform("c", c);
    p.shader(LDShader);
    p.box(p.width);
  };
  // function mouseReleased() {
  //   noctaves = noctaves == 5 ? 4 : noctaves + 1;
  //   if (noctaves == 4) initc();
  // }
}

// Sketch adapted from Pierre Marzin
