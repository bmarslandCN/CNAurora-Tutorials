# Time to Decorate!
Hello ninjas, it's time to decorate! As codey makes his way back to the center he creates a map pinpointing the locations where each decoration will be placed. Your task is to make sure all decorations are placed in the correct location
## Step 1
Cody wants to place ninja stars all along the board but some whiteboard pieces are missing, fix the code so that Cody can get to the whiteboard
## Step 2
The Dojo is finally complete and now it's time to decorate! Cody wants to place down all the decorations he bought

Fix the code so Cody can pick up his decorations and drop them off around the dojo. Players should be able to use the A button to place a decoration
## Step 3

## Step 4

## Step 5

```template
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Fake_Name, 1000, false)
    sprite.setPosition(130, 250)
})
```