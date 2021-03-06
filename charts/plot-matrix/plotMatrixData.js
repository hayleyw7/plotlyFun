// data arrays

export const osmo = [50.047, 50.026, 50.046, 50.064, 49.962, 50.037, 50.014, 50.048, 49.858, 50.052, 50.09, 50.142, 50.042, 49.886, 50.018, 50.025, 50.044, 49.939, 50.088, 50.126]

export const time = [0.09, 2.64, 11.55, 15.29, 17.66, 27.01, 29.86, 32.98, 41.25, 42.63, 49.22, 55.69, 59.21, 67.3, 71, 77.42, 81.65, 86.02, 90.88, 93.78]

export const duration = [0.297, 0.643, 1.757, 3.396, 5.178, 7.752, 10.806, 14.161, 18.385, 22.617, 27.811, 33.248, 39.211, 45.651, 52.852, 60.239, 68.123, 76.715, 85.653, 95.155]

export const temp = [26.3, 32.9, -25.9, -33.4, -36.9, -14.1, 46.8, 46.3, 27.3, 45.7, -5.8, -35.8, -24.4, 17.4, -42.7, 10.8, -4.2, 11.2, -40.2, -3.3]

export const ph = [0.0046, 0.3267, 0.6165, 0.8363, 0.9739, 1.0003, 0.9163, 0.7355, 0.4768, 0.1634, -0.1603, -0.4778, -0.732, -0.9165, -0.9996, -0.968, -0.8394, -0.6179, -0.326, 0.0035]

// correlation coefficients

const correlationCoefficient = (xArray, yArray) => {
  let sumX = 0, sumY = 0, sumXY = 0;
  let squareSumX = 0, squareSumY = 0;
  let xLength = xArray.length;
   
  for (let i = 0; i < xLength; i++) {
    sumX = sumX + xArray[i];
    sumY = sumY + yArray[i];
    sumXY = sumXY + xArray[i] * yArray[i];
    squareSumX = squareSumX + xArray[i] * xArray[i];
    squareSumY = squareSumY + yArray[i] * yArray[i];
  }
   
  let result =
    (xLength * sumXY - sumX * sumY) /
    (Math.sqrt(
      (xLength * squareSumX - sumX * sumX) *
      (xLength * squareSumY - sumY * sumY)
    ));
   
  return result.toFixed(2);
}

export const num = (x, y) => {
  return {
    values: [`</br></br>${correlationCoefficient(x, y)}`],
    align: 'center',
    line: {width: 0.5, color: 'lightgray'},
    height: 168,
    font: {size: 22, color: '#399E5A'}
  }
}