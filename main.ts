basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (input.lightLevel() > 100) {
        servos.P0.run(input.lightLevel())
        led.plotBarGraph(
        input.lightLevel(),
        0
        )
    }
    servos.P0.run(0)
    basic.clearScreen()
})
