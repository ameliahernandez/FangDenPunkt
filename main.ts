input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.AB, function () {
    level += 1
    if (level == 1) {
        ms = 500
    } else if (level == 2) {
        ms = 200
    } else {
        ms = 100
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let ms = 0
let level = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setScore(0)
level = 1
ms = 500
basic.forever(function () {
    sprite.move(1)
    basic.pause(ms)
    sprite.ifOnEdgeBounce()
    basic.pause(ms)
    sprite.set(LedSpriteProperty.X, randint(0, 4))
    basic.pause(ms)
    sprite.set(LedSpriteProperty.Y, randint(0, 4))
    sprite.ifOnEdgeBounce()
    basic.pause(ms)
})
