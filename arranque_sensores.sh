#!/usr/bin/bash
set -x
nohup node-red -v --port 51881 --title "Sensor #01" --userDir $HOME/fakesensors/sensor1 $HOME/fakesensors/sensor1/flows.json &
nohup node-red -v --port 51882 --title "Sensor #02" --userDir $HOME/fakesensors/sensor2 $HOME/fakesensors/sensor2/flows.json &
nohup node-red -v --port 51883 --title "Sensor #03" --userDir $HOME/fakesensors/sensor3 $HOME/fakesensors/sensor3/flows.json &
nohup node-red -v --port 51884 --title "Sensor #04" --userDir $HOME/fakesensors/sensor4 $HOME/fakesensors/sensor4/flows.json &
nohup node-red -v --port 51885 --title "Sensor #05" --userDir $HOME/fakesensors/sensor5 $HOME/fakesensors/sensor5/flows.json &
set +x