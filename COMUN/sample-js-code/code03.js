let mqttTopic = global.get("mqttTopic") || "N/D";
let sensorDataIn = global.get("sensorData") || null;
let sensorName = global.get("sensorName") || "sensorName";
let previousRandomValuesSet = flow.get("previousRandomValuesSet") || [null, null, null, null];
let sensorDataOut = {
    "mqttTopic": mqttTopic,
    "sensorData": [],
    "sensorName": sensorName
}

let newRandomValue = 0;
for (i = 0; i < sensorDataIn.length; i++) {
    newRandomValue = parseFloat(mycalculateRandomValue(sensorDataIn[i], previousRandomValuesSet[i]).toFixed(1));
    console.log(sensorDataIn[i].varName,newRandomValue);
    previousRandomValuesSet[i] = newRandomValue;
    flow.set("previousRandomValuesSet", previousRandomValuesSet);
    sensorDataOut.sensorData[i] = {
        "varName": sensorDataIn[i].varName,
        "varMeasureUnit": sensorDataIn[i].varMeasureUnit,
        "varValue": newRandomValue
    }

}

msg.payload = sensorDataOut;

return msg;

function mycalculateRandomValue(sensorDataInItem, previousRandomValuesItem) {
    max = sensorDataInItem.varMaxVal;
    min = sensorDataInItem.varMinVal;
    randomInterval = sensorDataInItem.varRandomInterval;

    newRandomValue = previousRandomValuesItem;
    if (newRandomValue === null) {
        newRandomValue = (max + min) / 2;
    }

    newRandomValue += random(randomInterval * -1, randomInterval);
    return newRandomValue;
}

function random(low, high) {
    return Math.random() * (high - low) + low;
}