export default function catches(p) {
  let  W = p.windowWidth;
  let H = p.windowHeight;

    let PI = p.PI
    let PI_2 = p.HALF_PI
    let PI_4 = p.QUARTER_PI
    let TWO_PI = p.TWO_PI
  
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.angleMode(p.RADIANS)
    }
  
    p.draw = () => {
      // p.background(220)
  
      const c1 = p.map(p.constrain(p.mouseX, 0, W), 0, W, 0, 255)
      const c2 = p.map(p.constrain(p.mouseY, 0, H), 0, H, 0, 255)
      p.fill(c1,c2, 255)
      p.strokeWeight(10)
      if (p.mouseIsPressed) {
        p.stroke(255)
      } else {
        p.stroke(0)
      }
  
      p.textSize(H/5)
      p.text('acueducto!', W/9, H/2)
    } 
  }