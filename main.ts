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
	
})
