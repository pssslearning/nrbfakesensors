rem lanzamiento en paralelo de varios procesos 
@echo on
start node-red -v --port 51881 --title "Sensor #01" --userDir ./sensor1 ./sensor1/flows.json &
start node-red -v --port 51882 --title "Sensor #02" --userDir ./sensor2 ./sensor2/flows.json &
start node-red -v --port 51883 --title "Sensor #03" --userDir ./sensor3 ./sensor3/flows.json &
start node-red -v --port 51884 --title "Sensor #04" --userDir ./sensor4 ./sensor4/flows.json &
start node-red -v --port 51885 --title "Sensor #05" --userDir ./sensor5 ./sensor5/flows.json &