# Getting Started
<p align="center">
  <img alt="introduction" height="100" src="https://cdn.discordapp.com/attachments/698261922700853273/703353528780980609/logo_idee_3_.png">
</p>

## How it's work

SunWhys Engine is a collaborative game engine developed in C ++ supporting Lua, Javascript and having a graphic editor.

To contribute, you can go to the [github page](https://github.com/SunWhys/SunWhysEngine) of the project. 

## Architectures tree
 
```
SunWhys
|-- SunWhysEngine
    |-- loader.tf
    |-- sunwhysengine.exe
    |-- assets
    |-- scripts
        |-- init.lua
        |-- start.lua
```

### Loader.tf

The loader.tf file must contain all the .lua scripts executed by the engine knowing that they're read from top to bottom.

::: warning
Warning, lang=<scriptingLanguage> is required and an init.lua and start.lua script are required, you must specify your game scripts between init.lua and start.lua. 
:::

Example : 

```tf
lang=lua
init.lua
// game script
start.lua
```

### SunWhysEngine.exe

SunWhys Engine is the engine itself, you can rename it to the name of your game.

### Scripts

Scripts is a folder that contains all of your game's scripts.

Example : 

init.lua

```lua
window = Window:new(VideoMode:new(1280, 720), "SunWhysEngine")
event = Event:new()
gameManager = GameManager:new()

function initialization()
    while window:open() do
	    while window:event(event) do
		    if (event.key.code == Keyboard.Escape) then
			    window:close()
			    gameManager:close()
 		    end
 		    gameManager:update()
	    end

        window:clear()
        gameManager:render()
  	    window:display()
    end
end
```

start.lua

```lua
initialization()
```

### Assets

The assets folder must contain all the images and sounds necessary for the operation of the game.