namespace SpriteKind {
    export const Sign = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Shop_Name)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door tile`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Shop_Name)
})
let Shop_Name = ""
let Shop_Sign: Sprite = null
tiles.setCurrentTilemap(tilemap`Store`)
let Codey = sprites.create(assets.image`Ninja`, SpriteKind.Player)
tiles.placeOnTile(Codey, tiles.getTileLocation(6, 7))
Shop_Sign = sprites.create(assets.image`Sign`, SpriteKind.Sign)
tiles.placeOnTile(Shop_Sign, tiles.getTileLocation(9, 11))
scene.cameraFollowSprite(Codey)
controller.moveSprite(Codey)
Shop_Name = "N1nnja Sh00p"
let NinjaStar = sprites.create(assets.image`Ninja Star`, SpriteKind.Player)
tiles.placeOnTile(NinjaStar, tiles.getTileLocation(4, 7))
