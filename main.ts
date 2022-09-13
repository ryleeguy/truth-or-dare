input.onGesture(Gesture.Shake, function () {
    random_number = randint(0, 2)
    if (random_number == 0) {
        basic.showString("answer unclear")
    } else if (random_number == 1) {
        basic.showString("no")
    } else {
        basic.showString("yes")
    }
})
let random_number = 0
basic.showString("8 ball")
basic.forever(function () {
	
})
