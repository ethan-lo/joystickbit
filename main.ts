joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Ethan")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Emily")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Evelyn")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.Sword)
})
let Y = 0
let X = 0
radio.setGroup(2)
joystickbit.initJoystickBit()
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
music.playMelody("G F A E A B D C ", 500)
basic.forever(function () {
    X = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    Y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, 100, -100)
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
})
