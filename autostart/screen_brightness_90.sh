#!/bin/bash

# the script is executable by ~/.config/autostart/screen-bright.desktop
if [[ -z $1 ]]; then
    xrandr --output HDMI-1 --brightness 0.8
else
    currenttime=$(date +%H:%M)
    if [[ "$currenttime" < "12:00" ]]; then
        sleep 10
        xrandr --output HDMI-1 --brightness 0.8
    fi
fi
