document.addEventListener("DOMContentLoaded", function () {
  const diameterSlider = document.getElementById("diameterSlider");
  const diameterValue = document.getElementById("diameterValue");
  const ringMeasurement = document.getElementById("ringMeasurement");
  const canvas = document.getElementById("circleCanvas");
  const ctx = canvas.getContext("2d");

  // Initialize canvas
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  // Function to draw circle based on diameter
  function drawCircle(diameter) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    const radius = diameter / 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Calculate circumference (ring measurement)
    const circumference = 2 * Math.PI * radius;
    const circumferenceMm = (circumference * 16.5) / 51.84;
    return circumferenceMm.toFixed(2);
  }

  // Event listener for slider change
  diameterSlider.addEventListener("input", function () {
    const diameter = diameterSlider.value;
    diameterValue.textContent = diameter;

    // Display diameter and ring measurement in millimeters
    const circumference = drawCircle(diameter);
    ringMeasurement.textContent = convertToRingMeassure(circumference);
  });

  function convertToRingMeassure(initialCircumferenceRm) {
    let ring_Measurement;
    if (51.84 <= initialCircumferenceRm && initialCircumferenceRm < 53.19)
      ring_Measurement = 6;
    else if (53.19 <= initialCircumferenceRm && initialCircumferenceRm < 54.51)
      ring_Measurement = 6.5;
    else if (54.51 <= initialCircumferenceRm && initialCircumferenceRm < 55.86)
      ring_Measurement = 7;
    else if (55.86 <= initialCircumferenceRm && initialCircumferenceRm < 57.18)
      ring_Measurement = 7.5;
    else if (57.18 <= initialCircumferenceRm && initialCircumferenceRm < 58.28)
      ring_Measurement = 8;
    else if (58.28 <= initialCircumferenceRm && initialCircumferenceRm < 59.38)
      ring_Measurement = 8.5;
    else if (59.38 <= initialCircumferenceRm && initialCircumferenceRm < 60.79)
      ring_Measurement = 8.5;
    else if (60.79 <= initialCircumferenceRm && initialCircumferenceRm < 62.2)
      ring_Measurement = 8.5;
    else if (62.2 <= initialCircumferenceRm && initialCircumferenceRm < 63.46)
      ring_Measurement = 8.5;
    else if (63.46 <= initialCircumferenceRm && initialCircumferenceRm < 64.72)
      ring_Measurement = 8.5;
    else if (64.72 <= initialCircumferenceRm && initialCircumferenceRm < 65.82)
      ring_Measurement = 8.5;
    else if (65.82 <= initialCircumferenceRm && initialCircumferenceRm < 66.92)
      ring_Measurement = 8.5;
    else if (66.92 <= initialCircumferenceRm && initialCircumferenceRm < 68.55)
      ring_Measurement = 8.5;
    else if (68.55 <= initialCircumferenceRm && initialCircumferenceRm < 70.15)
      ring_Measurement = 8.5;
    else if (70.15 <= initialCircumferenceRm && initialCircumferenceRm < 71.31)
      ring_Measurement = 8.5;
    else if (71.31 <= initialCircumferenceRm && initialCircumferenceRm < 72.26)
      ring_Measurement = 8.5;
    else if (72.26 <= initialCircumferenceRm && initialCircumferenceRm < 73.51)
      ring_Measurement = 8.5;
    else if (73.51 <= initialCircumferenceRm && initialCircumferenceRm < 74.77)
      ring_Measurement = 8.5;
    else if (74.77 <= initialCircumferenceRm && initialCircumferenceRm < 76.03)
      ring_Measurement = 8.5;
    else if (76.03 <= initialCircumferenceRm && initialCircumferenceRm < 76.97)
      ring_Measurement = 8.5;
    else if (76.97 <= initialCircumferenceRm) ring_Measurement = 8.5;
    else ring_Measurement = 100;
    return ring_Measurement;
  }
  // Initial draw with default slider value
  const initialDiameter = diameterSlider.value;
  diameterValue.textContent = initialDiameter;
  const initialCircumference = drawCircle(initialDiameter);

  ringMeasurement.textContent = convertToRingMeassure(initialCircumference);
});
