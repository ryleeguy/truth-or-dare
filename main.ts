input.onButtonPressed(Button.A, function () {
    cat = randint(0, 1)
    if (cat == 0) {
        basic.showString("true")
    } else if (cat == 1) {
        basic.showString("dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    dog = randint(0, 4)
    if (dog == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (dog == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (dog == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (dog == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
let dog = 0
let cat = 0
basic.showString("t or d")
