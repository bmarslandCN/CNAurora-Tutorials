
```
```template
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


```

```assetjson

```
# Codey's Shopping Spree

## Codey's Shopping Spree @showdialog
Hello Ninjas, welcome to the first riddle of the Code Ninjas 2nd year anniversary event!

You will be guided through these activities with steps and clues of what needs to be solved in this side panel, if you think everythings correct, move on to the next step!

## Step 1
Somethings missing! Design your own codey sprite, sign sprite, and ninja star sprite so there are no more empty sprites!

## Step 2
Codey is trying to buy decorations for the center as the 2nd year anniversary approaches. He heads over to the ninja shop in search of something matching the ninja theme, unfortunately he runs into a problem.

Fix the bug in the code so Codey can enter the ninja shop!

Codey makes his way into the ninja shop but notices something is off with the sign, he starts to think that this is not the right shop

What's wrong with the sign text? Fix the code!

## Step 3

Cody enters the store and picks up a few ninja stars and some ninja belts, Cody his wallet to pay and notices a hole at the bottom, he has no money but somehow the cashier lets him leave for free

Make sure Cody has to pay for the decorations!

Reminder: The player shouldn't be able to pick up a coin more than once


## Riddle Answer: NINJA STAR @showdialog

THIS IS THE ANSWER TO THE RIDDLE
