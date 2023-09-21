// the painting dimension
let pDim = 500;

function setup() {
  // create canvas based on painting dimension and a margin
  createCanvas(pDim + 40, pDim + 40);
}

function draw() {
  background(255);

  // draw tan background
  stroke(0);
  strokeWeight(1);
  fill("#f7e5ca");
  rect(20, 20, pDim, pDim);

  fill(0);
  stroke(0);
  translate(20, 20);

  // left half
  // large triangle
  // coordinates are defined relative to pDim
  triangle(
    0, 0,
    pDim / 4, 0,
    0, pDim / 2
  );
  rect(0, pDim / 2, pDim / 4, pDim / 2);

  triangle(
    pDim / 4, pDim,
    pDim / 2, pDim / 2,
    pDim / 4, pDim / 2
  );

  rect(pDim / 4, pDim / 4, pDim / 8, pDim / 4);
  triangle(
    3 / 8 * pDim, pDim / 4,
    3 / 8 * pDim, pDim / 2,
    pDim / 2, pDim / 2
  );

  // right half
  // all coordinates are exactly like the left half, but subtracted from pDim
  // large triangle
  triangle(
    pDim, pDim,
    pDim - pDim / 4, pDim,
    pDim, pDim / 2
  );
  rect(pDim, pDim / 2, -pDim / 4, -pDim / 2);

  triangle(
    pDim - pDim / 4, 0,
    pDim / 2, pDim / 2,
    pDim - pDim / 4, pDim / 2
  );

  rect(pDim - pDim / 4, pDim - pDim / 4, -pDim / 8, -pDim / 4);
  triangle(
    pDim - 3 / 8 * pDim, pDim - pDim / 4,
    pDim - 3 / 8 * pDim, pDim / 2,
    pDim / 2, pDim / 2
  );
}
