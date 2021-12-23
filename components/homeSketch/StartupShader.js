export default {
  uniforms: {
    iResolution: { value: [null, null] },
    iTime: { value: null },
    iMouse: { value: [null, null] },
    noctaves: { value: null },
    c: {
      value: [
        0, 2, 3, 4, -1, 3, 4, 0, -3, 3, -2, 2, 1, -2, 4, -4, 2, -2, 0, -1, -4,
        1,
      ],
    },
  },

  vertexShader: [
  ].join("\n"),

  fragmentShader: [
    "void main() {",
    "vec2 mouse=iMouse/iResolution;",
    "vec2 st =(-iResolution.xy+2.0*gl_FragCoord.xy)/iResolution.y;",
    "vec3 color = vec3(0.035, 0.105, 0.827);",
    "vec2 q = vec2(0.);",
    "q.x = fbm( st+vec2(c[0],c[1]*0.03*iTime) ); ",
    "q.y = fbm( st+vec2(c[2],c[3]*0.01*iTime) );",
    "vec2 r = vec2(0.);",

    "r.x = fbm( st+ (3.0*mouse.x+3.4)*q+vec2(c[5],c[6]));",
    "r.y = fbm( st+ (6.0*mouse.y+4.5)*q*sin(.02*iTime)+vec2(c[2]*.05*iTime,c[9]));",
    "float f = fbm(st+c[10]*(r+length(q) ));",
    "color = smoothstep(vec3(0.0, 0.0, 0.0),vec3(1.0,1.0,1.0),color);",
    "color = mix(color,vec3(0.16,1.05*(1.0+cos(0.5+.2*iTime)),0.958),r.y+length(q));",
    "color = mix(color,vec3(0.1*sin(0.1*iTime),0.0,0.1*cos(0.13*iTime)),length(r+q));",
    "color = mix(color, vec3(0.921, 0.135, 0.184), dot(r,r) );",
    "color*=(1.5*f*f*f+1.2*f*f+2.3*f);",
    "gl_FragColor = vec4(color,1.);}",

    "float ripple(float dist, float shift)",
    "{return cos(64.0 * dist + shift) / (1.0 + 1.0 * dist);}",

    " #define POLES 24.0",
    "#define SCALE 5.0",

    "#define REFLECTIONS 10.0",

    "void mainImage( out vec4 fragColor, in vec2 fragCoord ){",
    "float larger = max(iResolution.x, iResolution.y) / SCALE;",
    " vec2 uv = (fragCoord.xy - .5*iResolution.xy) / larger;",
    "vec2 cursor = (iMouse.xy - .5*iResolution.xy) / larger;",

    "float lum = .5;",
    "float mul = lum;",
    "float pi = 3.141592654;",
    "float twopi = 2.0 * pi;",
    "const float count = POLES;",
    "float fcount = float(count);",
    "vec2 rot = vec2(cos(twopi*.618),  sin(twopi*.618));",
    "vec2 tor = vec2(-sin(twopi*.618), cos(twopi*.618));",
    "float f = (0.7 + (1.0 + sin(mod(iTime/18.0, twopi))/4.0))/2.0;",
    "vec3 col = vec3(0.0, 0.0, 0.0);",

    "for (float i = 0.0; i < count; ++i) {",
    "lum += .2 * ripple(length(cursor - uv), -iTime);",
    "mul += .2 * ripple(length(cursor + uv * lum/16.0), -iTime/3.0);",
    "col += vec3(mod(i + 1.0, 3.0), 0.0, 0.0) * 0.06 * (mul - lum);",
    "col += vec3(0.0, mod(i + 2.0, 3.0), 0.0) * 0.06 * (lum - mul);",
    "col += vec3(0.0, 0.0, mod(i, 3.0)) * 0.06 * sqrt(mul * lum);",
    "cursor = cursor.x*rot*f + cursor.y*tor*f ;",
    "} fragColor = vec4(col, 1.0);}",
  ].join("\n"),
};
