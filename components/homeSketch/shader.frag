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
    vec2 st =(-iResolution.xy+2.0*gl_FragCoord.xy)/iResolution.y;
    vec3 color = vec3(0.035, 0.105, 0.827);
    vec2 q = vec2(0.);
    q.x = fbm( st+vec2(c[0],c[1]*0.03*iTime) ); 
    q.y = fbm( st+vec2(c[2],c[3]*0.01*iTime) );
    vec2 r = vec2(0.);

// color and shade values
r.x = fbm( st+ (3.0*mouse.x+3.4)*q+vec2(c[5],c[6]));
r.y = fbm( st+ (2.0*mouse.y+2.5)*q*sin(.02*iTime)+vec2(c[2]*.05*iTime,c[9]));
float f = fbm(st+c[10]*(r+length(q) ));
color = smoothstep(vec3(0.0, 0.0, 0.0),vec3(1.0,1.0,1.0),color);
color = mix(color,vec3(0.16,1.05*(1.0+cos(0.5+.2*iTime)),0.958),r.y+length(q));
color = mix(color,vec3(0.1*sin(0.1*iTime),0.0,0.1*cos(0.13*iTime)),length(r+q));
color = mix(color, vec3(0.921, 0.135, 0.184), dot(r,r) );
color*=(1.5*f*f*f+1.2*f*f+2.3*f);
//color+=.4*vec3(-1.96+r.x,-0.015+q);
//color=pow(color, vec3(.3));
    gl_FragColor = vec4(color,1.);
}
