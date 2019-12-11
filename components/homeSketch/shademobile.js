export default function shade(p) {
  p.disableFriendlyErrors = true; // disables FES
  var noctaves, c, LDShader, gl;

  let x = 0;
  let y = 0;
  let easing = 0.3;

  p.preload = function() {
    LDShader = p.loadShader(
      "/static/assets/shader/shader.vert",
      "/static/assets/shader/shader.frag"
    );
  };

  p.setup = function() {
    p.createCanvas(p.windowWidth + 250, p.windowHeight + 250, p.WEBGL);
    // disable DEPTH_TEST
    gl = this.canvas.getContext(p.WEBGL);
    gl.disable(gl.DEPTH_TEST);

    p.mouseX = p.width;
    p.mouseY = 1;
    noctaves = 4.0;
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
    p.resizeCanvas(p.windowWidth + 250, p.windowHeight + 250);
  };

  p.draw = function() {
    //easing on cursor
    let targetX = p.round(p.mouseX - p.windowHeight / 2);
    let dx = targetX - x;
    x += dx * easing;

    let targetY = p.round(p.mouseY - p.windowWidth / 2);
    let dy = targetY - y;
    y += dy * easing;

    LDShader.setUniform("iResolution", [p.width, p.height]); //pass some values to the shader
    LDShader.setUniform("iTime", p.millis() * 0.001);
    LDShader.setUniform("iMouse", [x, y]);
    // LDShader.setUniform("iMouse", [p.mouseX - 30, p.mouseY - 10]);
    LDShader.setUniform("noctaves", noctaves);
    LDShader.setUniform("c", c);
    p.shader(LDShader);
    p.box(p.width);
  };
}

// Sketch adapted from Pierre Marzin
