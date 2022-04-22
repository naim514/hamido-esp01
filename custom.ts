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
input.onButtonPressed(Button.B, function () {
    basic.showString(esp8266_read_by_naim.connectThingSpeak("api.thingspeak.com", "1IFCE89OOGQ27NXI"))
})
basic.showIcon(IconNames.Heart)
ESP8266ThingSpeak.connectWifi(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200,
"naim's Galaxy A12",
"ubuy9109"
)
