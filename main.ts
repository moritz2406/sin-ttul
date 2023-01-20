input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
    }
})
led.enable(false)
basic.forever(function () {
	
})
