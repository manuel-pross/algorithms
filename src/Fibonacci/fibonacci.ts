export function fibRec(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibRec(n - 1) + fibRec(n - 2);
}

export function fibLinear(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  const fibArr = [1, 1];
  let i = 2;

  while (i < n) {
    const cache = fibArr[0];
    fibArr[0] = fibArr[0] + fibArr[1];
    fibArr[1] = cache;
    i++;
  }

  return fibArr[0];
}

export function fibMatrix(n: number) {
  if (n === 0) {
    return 0;
  }

  const matrix = [
    [1, 1],
    [1, 0],
  ];

  power(matrix, n - 1);

  return matrix[0][0];
}

function power(matrix1: number[][], n: number) {
  if (n === 0 || n === 1) {
    return;
  }

  const matrix2 = [
    [1, 1],
    [1, 0],
  ];

  power(matrix1, Math.floor(n / 2));
  multiply(matrix1, matrix1);

  if (n % 2 !== 0) multiply(matrix1, matrix2);
}

function multiply(matrix1: number[][], matrix2: number[][]) {
  const x = matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0];
  const y = matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1];
  const z = matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0];
  const w = matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1];

  matrix1[0][0] = x;
  matrix1[0][1] = y;
  matrix1[1][0] = z;
  matrix1[1][1] = w;
}
