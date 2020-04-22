// JavaScript Document

var tempCelsius = parseFloat(random(20, 30).toFixed(1));
var humedad = parseFloat(random(45, 60).toFixed(1));

msg.payload = {
    tempCelsius,
    humedad
}

return msg;

function random(low, high) {
  return Math.random() * (high - low) + low
}
