export default function head(p) {
  let width = 400;
  let height = 400;

  let red = [237, 9, 36];
  let redShadow = [0, 23, 51];

  let mainColor = [23, 64, 191];
  let secondaryColor = [25, 0, 2];

  let rotate = 0.006;
  let startRotation = 0;

  let x = 0;
  let y = 0;
  let easing = 0.1;

  let teapot;

  p.preload = () => {
    // Load model with normalise (size of model is normalized)
    teapot = p.loadModel("./../../public/assets/3d/male_head.obj", true);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.invertRotation !== undefined) {
      rotate = -0.006;
    }
    if (props.second !== undefined) {
      mainColor = red;
      secondaryColor = redShadow;
    }
    if (props.rotationStart !== undefined) {
      startRotation = props.rotationStart;
    }
  };

  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    p.noStroke(); //eliminate wireframes
  };

  p.draw = () => {
    p.background("#0D1111");
    p.rotateZ(3.15);
    p.translate(20, 0, 0);
    p.ambientLight(8, 8, 8);

    // easings for light movement
    let targetX = p.round(p.mouseX - height / 2);
    let dx = targetX - x;
    x += dx * easing;

    let targetY = p.round(p.mouseY - width / 2);
    let dy = targetY - y;
    y += dy * easing;

    // actual light
    p.pointLight(mainColor[0], mainColor[1], mainColor[2], x, y, 200);

    p.directionalLight(
      secondaryColor[0],
      secondaryColor[1],
      secondaryColor[2],
      1500,
      -1500,
      200
    ); //Pink light

    p.scale(1.5); // Scaled to make model fit into canvas
    p.rotateY(startRotation + p.frameCount * rotate);

    // p.ambientMaterial(255); // For effect
    // p.specularMaterial(250);
    // p.normalMaterial();

    p.model(teapot);
  };
}
