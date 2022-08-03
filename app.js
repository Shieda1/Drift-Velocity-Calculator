// https://calculator.swiftutors.com/drift-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const driftVelocityRadio = document.getElementById('driftVelocityRadio');
const currentRadio = document.getElementById('currentRadio');
const chargeDensityRadio = document.getElementById('chargeDensityRadio');
const chargeOnEveryChargeCarrierRadio = document.getElementById('chargeOnEveryChargeCarrierRadio');
const conductorsCrossSectionAreaRadio = document.getElementById('conductorsCrossSectionAreaRadio');

let driftVelocity;
let current = v1;
let chargeDensity = v2;
let chargeOnEveryChargeCarrier = v3;
let conductorsCrossSectionArea = v4; 

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

driftVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Current (amps)';
  variable2.textContent = '(n) Charge Density (m−³)';
  variable3.textContent = '(Q) Charge On Every Charge Carrier (Coulomb)';
  variable4.textContent = '(A) Conductor\'s Cross Section Area (m²)';
  current = v1;
  chargeDensity = v2;
  chargeOnEveryChargeCarrier = v3;
  conductorsCrossSectionArea = v4;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Drift Velocity (m/s)';
  variable2.textContent = '(n) Charge Density (m−³)';
  variable3.textContent = '(Q) Charge On Every Charge Carrier (Coulomb)';
  variable4.textContent = '(A) Conductor\'s Cross Section Area (m²)';
  driftVelocity = v1;
  chargeDensity = v2;
  chargeOnEveryChargeCarrier = v3;
  conductorsCrossSectionArea = v4;
  result.textContent = '';
});

chargeDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Drift Velocity (m/s)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(Q) Charge On Every Charge Carrier (Coulomb)';
  variable4.textContent = '(A) Conductor\'s Cross Section Area (m²)';
  driftVelocity = v1;
  current = v2;
  chargeOnEveryChargeCarrier = v3;
  conductorsCrossSectionArea = v4;
  result.textContent = '';
});

chargeOnEveryChargeCarrierRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Drift Velocity (m/s)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(n) Charge Density (m−³)';
  variable4.textContent = '(A) Conductor\'s Cross Section Area (m²)';
  driftVelocity = v1;
  current = v2;
  chargeDensity = v3;
  conductorsCrossSectionArea = v4;
  result.textContent = '';
});

conductorsCrossSectionAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Drift Velocity (m/s)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(n) Charge Density (m−³)';
  variable4.textContent = '(Q) Charge On Every Charge Carrier (Coulomb)';
  driftVelocity = v1;
  current = v2;
  chargeDensity = v3;
  chargeOnEveryChargeCarrier = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(driftVelocityRadio.checked)
    result.textContent = `Drift Velocity = ${computeDriftVelocity().toFixed(2)} m/s`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amps`;

  else if(chargeDensityRadio.checked)
    result.textContent = `Charge Density = ${computeChargeDensity().toFixed(2)} m-³`;

  else if(chargeOnEveryChargeCarrierRadio.checked)
    result.textContent = `Charge On Every Charge Carrier = ${computeChargeOnEveryChargeCarrier().toFixed(2)} Coulomb`;

  else if(conductorsCrossSectionAreaRadio.checked)
    result.textContent = `Conductor's Cross Section Area = ${computeConductorsCrossSectionArea().toFixed(2)} m²`;
})

// calculation

function computeDriftVelocity() {
  return Number(current.value) / (Number(chargeDensity.value) * Number(chargeOnEveryChargeCarrier.value) * Number(conductorsCrossSectionArea.value));
}

function computeCurrent() {
  return Number(driftVelocity.value) * (Number(chargeDensity.value) * Number(chargeOnEveryChargeCarrier.value) * Number(conductorsCrossSectionArea.value));
}

function computeChargeDensity() {
  return Number(current.value) / (Number(driftVelocity.value) * Number(chargeOnEveryChargeCarrier.value) * Number(conductorsCrossSectionArea.value));
}

function computeChargeOnEveryChargeCarrier() {
  return Number(current.value) / (Number(chargeDensity.value) * Number(driftVelocity.value) * Number(conductorsCrossSectionArea.value));
}

function computeConductorsCrossSectionArea() {
  return Number(current.value) / (Number(chargeDensity.value) * Number(chargeOnEveryChargeCarrier.value) * Number(driftVelocity.value));
}