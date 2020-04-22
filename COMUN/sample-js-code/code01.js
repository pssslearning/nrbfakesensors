var umbralAlertaTemp = global.get("umbralAlertaTemp") || 26;
var umbralAlertaHumedad = global.get("umbralAlertaHumedad") || 60;
var dispositivo = global.get("dispositivo") || "DESCONOCIDO";

var numMuestras = flow.get("numMuestras") || 0;
var tempCelsiusAcumulada = flow.get("tempCelsiusAcumulada") || 0;
var humedadAcumulada = flow.get("humedadAcumulada") || 0;
var tempCelsiusMedia = flow.get("tempCelsiusMedia") || 0;
var humedadMedia = flow.get("humedadMedia") || 0;

var tempCelsiusMinima = flow.get("tempCelsiusMinima") || 1000;
var humedadMinima = flow.get("humedadMinima") || 1000;

var tempCelsiusMaxima = flow.get("tempCelsiusMinima") || -1000;
var humedadMaxima = flow.get("humedadMaxima") || -1000;

numMuestras += 1

// Resetear valores después de 500 ciclos
if (numMuestras > 500) {
    numMuestras = 1
    tempCelsiusAcumulada = 0;
    humedadAcumulada = 0;
    tempCelsiusMedia = 0;
    humedadMedia = 0;
    tempCelsiusMinima = 1000;
    humedadMinima = 1000;
    tempCelsiusMaxima = -1000;
    humedadMaxima = -1000;
}

tempCelsius = msg.payload.tempCelsius
humedad = msg.payload.humedad

if (tempCelsius <= tempCelsiusMinima) {
    tempCelsiusMinima = tempCelsius
    flow.set("tempCelsiusMinima", tempCelsiusMinima)
}

if (tempCelsius >= tempCelsiusMaxima) {
    tempCelsiusMaxima = tempCelsius
    flow.set("tempCelsiusMaxima", tempCelsiusMaxima)
}

if (humedad <= humedadMinima) {
    humedadMinima = humedad
    flow.set("humedadMinima", humedadMinima)
}

if (humedad >= humedadMaxima) {
    humedadMaxima = humedad
    flow.set("humedadMaxima", humedadMaxima)
}

tempCelsiusAcumulada += tempCelsius
humedadAcumulada += humedad

tempCelsiusMedia = tempCelsiusAcumulada / numMuestras
humedadMedia = humedadAcumulada / numMuestras

msg.payload = {
    "dispositivo": dispositivo,
    "timestamp" : new Date().toString(),
    "numMuestras": numMuestras,
    "tempCelsius": tempCelsius,
    "tempCelsiusMedia": tempCelsiusMedia,
    "tempCelsiusMinima": tempCelsiusMinima,
    "tempCelsiusMaxima": tempCelsiusMaxima,
    "umbralAlertaTemp": umbralAlertaTemp,
    "humedad": humedad,
    "humedadMedia": humedadMedia,
    "humedadMinima": humedadMinima,
    "humedadMaxima": humedadMaxima,
    "umbralAlertaHumedad": umbralAlertaHumedad
}

flow.set("tempCelsiusAcumulada", tempCelsiusAcumulada);
flow.set("humedadAcumulada", humedadAcumulada);
flow.set("tempCelsiusMedia", tempCelsiusMedia);
flow.set("humedadMedia", humedadMedia);
flow.set("numMuestras", numMuestras);

return msg;