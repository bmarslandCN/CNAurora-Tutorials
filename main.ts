namespace SpriteKind {
    export const OwnedItem = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door tile`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
tiles.setCurrentTilemap(tilemap`Dojo`)
let Cody = sprites.create(assets.image`Ninja`, SpriteKind.Player)
tiles.placeOnTile(Cody, tiles.getTileLocation(8, 4))
controller.moveSprite(Cody)
scene.cameraFollowSprite(Cody)
