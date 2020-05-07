# Documentation
<p align="center">
  <img alt="introduction" height="100" src="https://cdn.discordapp.com/attachments/698261922700853273/703353528780980609/logo_idee_3_.png">
</p>

## Introduction to Scene and GameManager

SunWhys Engine offers you a powerful game manager which will allow you to indicate your game scenes, and indicate on which scene to go :

```lua
menu = Scenes:new("Menu", -- Create Scene
function () -- Init function
	ball = Sprites:new(window, "ball.png", 0, 0)
end,

function () -- Render
	ball:draw()
end,

function () -- Update

end)


gameManager:push(menu) -- Push Scene
gameManager:goToScene("Menu") -- go to "Menu Scene"
```

- The Init method will allow you to declare objects specific to your scene.
- The render method will allow you to display objects on the screen.
- The Update method will allow you to update your scene 60 times per second.

## Documentation Scene

::: tip
We provide you with a Scene table to create your different state of play.
:::

**Constructor Declaration**

```lua
Scenes:new("NameOfScene", initFunc(), renderFunc(), UpdateFunc())
```

*Example*

```lua
Menu = Scenes:new("Menu", 
function ()
	
end,
function ()

end, 
function ()

end)
```

## Documentation GameManager

::: tip
We provide you with a table that allows you to navigate between your different game scenes.
:::

**Constructor Declaration**

```lua
GameManager:new()
```

*Example*

```lua
gameManager = GameManager:new()
```

**Update Method**

```lua
gameManager:update()
```

The update method is called in the basic example in the event loop to be called permanently, this method call the update function of the current scene.

**Render Method**

```lua
gameManager:render()
```

The render method is called in the basic example in the window loop in order to be called permanently, this method call the render function of the current scene.

**Push Method** 

```lua
gameManager:push(scene)
```

The push method lets the game manager know which scenes to take into account.

*Example*

```lua
gameManager:push(Menu)
```

**GoToScene Method**

```lua
gameManager:goToScene(nameOfScene)
```

The goToScene method lets the gameManager use the init, render and update function of the scene of our choice.

*Example*

```lua
gameManager:goToScene("Menu")
```

*Close Method*

```lua
gameManager:close()
```

The close method must be called at the end of your game when closing the window to tell the gameManager to delete all the scenes.

## Documentation VideoMode

::: tip
EventType is an enumeration of the different type events to which you will have access.
:::

**Constructor VideoMode**

```lua
VideoMode:new(WidthWindow, HeightWindow)
```

The videomode constructor allows you to define the size of your window.

*Example*

```lua
videoMode = VideoMode:new(1280, 720)
```

## Documentation Window

::: tip
We provide you with a window table which allows you to create your game window.
:::

```lua
while window:open() do
	while window:event(event) do
		if (event.key.code == Keyboard.Escape) then
			window:close()
			gameManager:close()
 		end
 		gameManager:update()
	end

  window:clear(Color.Black)
  gameManager:render()
	window:display() 
end
```

**Constructor Window**

```lua
Window:new(videoMode, titleOfWindow)
```

The Window constructor allows you to create a game window.

*Example*

```lua
window = Window:new(VideoMode:new(1280, 720), "Go")
```

**Open Method**

```lua
window:open()
```

This method calls to open the window.

*Example*

```lua
while window:open() do 

end
```

**Display Method**

```lua
window:display()
```

This method asks the window to display on the screen.

*Example*

```lua
while window:open() do
	window:display() 
end
```

**Event Method**

```lua
window:event(eventObj)
```

This method captures the events linked to the window.

*Example*

```lua
while window:open() do 
	while window:event(event) do
	end

	window:display()
end
```

**Clear Method**

```lua
window:clear(color)
```

This method requires window cleaning to avoid sacades.

*Example*

```lua
while window:open() do 
	while window:event(event) do
	end

	window:clear(Color.Black)
	window:display()
end
```

**Close Method**

```lua
window:close()
```

This method requires closing the window.

*Example*

```lua
while window:open() do 
	while window:event(event) do
		if (event.type.code == Keyboard.Escape) then
			window:close()
		end
	end

	window:clear(Color.Black)
	window:display()
end
```

## Documentation Event

::: tip
We provide you with an Event table that allows you to interact with your window.
:::

**Constructor Method**

```lua
Event:new()
```

The Event builder gives you access to create your events.

*Example*

```lua
event = Event:new()
```

**Key field**

event.key.code returns the key that the player presses.

```lua
if (event.key.code == Keyboard.Escape) do 
	window:close()
	gameManager:close()
end
```

**Type field**

event.type returns the type of event.

```lua
if (event.type == EventType.Close) do
	window:close()
	gameManager:close()
end
```

## Documentation EventType

**Close Event**

```lua
EventType.Close
EventType.KeyPressed
EventType.KeyRelease
```

## Documentation Keyboard

::: tip
Keyboard is an enumeration of the different possible keys in game.
:::

```lua
Keyboard.A
Keyboard.B
Keyboard.C
Keyboard.D
Keyboard.E
Keyboard.G
Keyboard.H
Keyboard.I
Keyboard.J
Keyboard.K
Keyboard.L
Keyboard.M
Keyboard.N
Keyboard.O
Keyboard.P
Keyboard.Q
Keyboard.R
Keyboard.S
Keyboard.T
Keyboard.U
Keyboard.V
Keyboard.W
Keyboard.X
Keyboard.Y
Keyboard.Z
Keyboard.Num0
Keyboard.Num1
Keyboard.Num2
Keyboard.Num3
Keyboard.Num4
Keyboard.Num5
Keyboard.Num6
Keyboard.Num7
Keyboard.Num8
Keyboard.Num9
Keyboard.Escape
Keyboard.LControl
Keyboard.LShift
Keyboard.LAlt
Keyboard.LSystem
Keyboard.RControl
Keyboard.RShift
Keyboard.RAlt
Keyboard.RSystem
Keyboard.Menu
Keyboard.LBracket
Keyboard.RBracket
Keyboard.Semicolon
Keyboard.Comma
Keyboard.Period
Keyboard.Quote
Keyboard.Slash
Keyboard.Backslash
Keyboard.Tilde
Keyboard.Equal
Keyboard.Hyphen
Keyboard.Space
Keyboard.Enter
Keyboard.Backspace
Keyboard.Tab
Keyboard.PageUp
Keyboard.PageDown
Keyboard.End
Keyboard.Home
Keyboard.Insert
Keyboard.Delete
Keyboard.Add
Keyboard.Subtract
Keyboard.Multiply
Keyboard.Divide
Keyboard.Left
Keyboard.Right
Keyboard.Up
Keyboard.Down
Keyboard.Numpad0
Keyboard.Numpad1
Keyboard.Numpad2
Keyboard.Numpad3
Keyboard.Numpad4
Keyboard.Numpad5
Keyboard.Numpad6
Keyboard.Numpad7
Keyboard.Numpad8
Keyboard.Numpad9
Keyboard.F1
Keyboard.F2
Keyboard.F3
Keyboard.F4
Keyboard.F5
Keyboard.F6
Keyboard.F7
Keyboard.F8
Keyboard.F9
Keyboard.F10
Keyboard.F11
Keyboard.F12
Keyboard.F13
Keyboard.F14
Keyboard.F15
Keyboard.Pause
```

## Documentation Color

::: tip
Color is an enumeration of the different colors available.
:::

```lua
Color.Black
Color.White
Color.Red
Color.Green
Color.Blue
Color.Yellow
Color.Magenta
Color.Cyan
Color.Transparent
```

## Documentation Sprites

:::tip
A sprite is an actor of your scene, SunWhysEngine provides you with an abstraction so you can easily create and manage them.
:::

**Constructor Method**

```lua
Sprites:new(window, "imageName.extension", x, y)
```

The Sprites builder simply takes : 

- the window object.
- the name of your texture file with the extensions
- the x position.
- the y position.

```lua
ball = Sprites:new(window, "ball.png", 0, 0)
```

**Draw Method**

```lua
sprite:draw()
```

The draw method displays a sprite on the window.

*Example*
```lua
ball:draw()
```

::: warning
Please note, your images must be in the assets folder !
:::

## Documentation Physics

::: tip
Physics is an object which allows you different possibilities for your game
:::

**Constructor Method**

```lua
Physics:new()
```

*Example*

```lua
physics = Physics:new()
```


**Collide Method**

```lua
physics:collide(sprite1, sprite2)
```

The collide method makes it possible to check if a sprite does not collide with another sprite.

*Example*

```lua
if (physics:collide(sprite1, sprite2)) then 
	print("Collide !")
end
```
