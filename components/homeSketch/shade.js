export default function shade(p) {
  p.disableFriendlyErrors = true; // disables FES
  var noctaves, c, LDShader;
  var gl;
  // let myFont;

  let x = 0;
  let y = 0;
  let easing = 0.1;

  p.preload = function() {
    LDShader = p.loadShader(
      "/static/assets/shader/shader.vert",
      "/static/assets/shader/shader.frag"
    );
    // myFont = p.loadFont("/static/assets/font/300.woff");
  };

  p.setup = function() {
    p.createCanvas(p.windowWidth + 50, p.windowHeight + 50, p.WEBGL);
    // disable DEPTH_TEST
    gl = this.canvas.getContext(p.WEBGL);
    gl.disable(gl.DEPTH_TEST);

    p.frameRate(30);
    // p.textSize(10);
    // p.textFont(myFont);

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
    p.resizeCanvas(p.windowWidth + 50, p.windowHeight + 50);
  };

  p.draw = function() {
    //easing on cursor
    let targetX = p.mouseX - p.windowHeight / 2;
    let dx = targetX - x;
    x += dx * easing;
    x = Math.round(x);

    let targetY = p.mouseY - p.windowWidth / 2;
    let dy = targetY - y;
    y += dy * easing;
    y = Math.round(y);

    LDShader.setUniform("iResolution", [p.width, p.height]); //pass some values to the shader
    LDShader.setUniform("iTime", p.millis() * 0.001);
    LDShader.setUniform("iMouse", [x, y]);
    LDShader.setUniform("noctaves", noctaves);
    LDShader.setUniform("c", c);
    p.shader(LDShader);
    p.box(p.width);

    // DISPLAY FRAMERATE
    // p.fill(255);
    // p.text("FRate " + p.int(p.getFrameRate()), 0, 300, 10);
    // console.log(p.int(p.getFrameRate()));
  };
}

// Sketch adapted from Pierre Marzin
