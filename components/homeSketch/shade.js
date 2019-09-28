export default function shade(p) {
  var noctaves, c, LDShader;
  var gl;

  p.preload = function() {
    LDShader = p.loadShader(
      "static/assets/shader/shader.vert",
      "static/assets/shader/shader.frag"
    );
  };

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    // disable DEPTH_TEST
    gl = this.canvas.getContext(p.WEBGL);
    gl.disable(gl.DEPTH_TEST);

    p.mouseX = p.width;
    p.mouseY = 1;
    noctaves = 5.4;
    c = [];
    c = [
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

    p.shader(LDShader); //shaders are applied
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    LDShader.setUniform("iResolution", [p.width, p.height]); //pass some values to the shader
    LDShader.setUniform("iTime", p.millis() * 0.001);
    LDShader.setUniform("iMouse", [p.mouseX - 30, p.mouseY - 10]);
    LDShader.setUniform("noctaves", noctaves);
    LDShader.setUniform("c", c);
    p.shader(LDShader);
    p.box(p.width);
  };
}

// Sketch adapted from Pierre Marzin
