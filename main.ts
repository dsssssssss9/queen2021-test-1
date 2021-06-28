function AllStop () {
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.A, function () {
    CheckUp()
})
function CheckUp () {
    for (let index = 0; index < 4; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(Delay)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(Delay)
    }
    for (let index = 0; index < 4; index++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(Delay)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(Delay)
    }
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 32)
        basic.pause(Delay)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(Delay)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 32)
        basic.pause(Delay)
        maqueen.motorStop(maqueen.Motors.M1)
    }
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 32)
        basic.pause(Delay)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(Delay)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 32)
        basic.pause(Delay)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 32)
        basic.pause(Delay)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(Delay)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 32)
        basic.pause(Delay)
        maqueen.motorStop(maqueen.Motors.All)
    }
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1024; index++) {
        strip.rotate(1)
        strip.show()
    }
})
let Delay = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
Delay = 750
AllStop()
basic.showIcon(IconNames.Heart)
strip.clear()
strip.show()
strip.showRainbow(1, 360)
