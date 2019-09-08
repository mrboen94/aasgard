export default function sketch(p) {
  const canvas = 150;
  const cx = canvas / 2;
  const terninger = 3;
  let timer = 0;
  let perspektiv;

  p.setup = function() {
    p.createCanvas(canvas, canvas, p.WEBGL);
    p.normalMaterial();
    p.colorMode(p.RGB, 255, 255, 255, 255);

    perspektiv = p.atan(1 / p.sqrt(2));

    p.ortho(-cx, cx, cx, -cx, -canvas, canvas * 2);
  };

  p.draw = function() {
    p.background(0, 0, 0, 0);

    p.rotateX(perspektiv);
    p.rotateY(p.QUARTER_PI);

    p.noFill();
    p.stroke(200);
    p.strokeWeight(2);

    for (let i = terninger; i > 0; i--) {
      p.push();
      const cosTimer = p.constrain(
        p.cos((terninger - i + timer) / 10),
        -0.8,
        0.8
      );
      const mappedPos = p.map(cosTimer, -0.8, 0.8, 0, 1);
      const rotering = easeInOutQuart(mappedPos, 0, 1, 1);
      p.rotateY(rotering * p.PI);

      p.stroke(150, 20, ((terninger - i) / terninger) * 200 + 200);

      p.box(i * 20 + 20);
      p.pop();
    }
    timer += 0.1;
  };

  function easeInOutQuart(i, j, k, l) {
    if ((i /= l / 2) < 1) return (k / 2) * i * i * i * i + j;
    return (-k / 2) * ((i -= 2) * i * i * i - 2) + j;
  }
}
