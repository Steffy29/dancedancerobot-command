input.onSound(DetectedSound.Loud, function () {
    radio.sendString("salut")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("merci")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("marche")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("dance")
})
radio.setGroup(2)
basic.showIcon(IconNames.Happy)
