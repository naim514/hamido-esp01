input.onButtonPressed(Button.A, function () {
    ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "77BNXKRFT8RR2TID",
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
})
basic.showIcon(IconNames.Heart)
ESP8266ThingSpeak.connectWifi(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200,
"naim's Galaxy A12",
"ubuy9109"
)
