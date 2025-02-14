namespace SpriteKind {
    export const Sign = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const OwnedItem = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Fake_Name, 1000, false)
    sprite.setPosition(130, 250)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    if (info.score() < 4) {
        otherSprite.follow(sprite, 40)
        otherSprite.setKind(SpriteKind.OwnedItem)
        sprite.sayText("Purchased: Ninja Star", 1000, false)
    } else {
        otherSprite.sayText("Not enough coins")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door tile`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Fake_Name, 1000, false)
    sprite.setPosition(130, 225)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let Fake_Name = ""
let Shop_Sign: Sprite = null
tiles.setCurrentTilemap(tilemap`Store`)
let Codey = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Codey, tiles.getTileLocation(8, 4))
Shop_Sign = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Sign)
tiles.placeOnTile(Shop_Sign, tiles.getTileLocation(9, 11))
scene.cameraFollowSprite(Codey)
controller.moveSprite(Codey)
Fake_Name = "N1nnja Sh00p"
let Real_Shop_Name = "Ninja Shop"
let NinjaStar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Item)
tiles.placeOnTile(NinjaStar, tiles.getTileLocation(4, 7))
let NinjaCoins = sprites.create(img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `, SpriteKind.Food)
tiles.placeOnTile(NinjaCoins, tiles.getTileLocation(4, 2))
NinjaCoins = sprites.create(img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `, SpriteKind.Food)
tiles.placeOnTile(NinjaCoins, tiles.getTileLocation(8, 2))
NinjaCoins = sprites.create(img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `, SpriteKind.Food)
tiles.placeOnTile(NinjaCoins, tiles.getTileLocation(14, 5))
NinjaCoins = sprites.create(img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `, SpriteKind.Food)
tiles.placeOnTile(NinjaCoins, tiles.getTileLocation(1, 5))
info.setScore(0)
