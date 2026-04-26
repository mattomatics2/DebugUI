# Windows
A window is just a frame you can move, resize, minimize, and close. It functions almost exactly how it would in a normal operating system such as Linux or Windows. A window can only be created in a client plugin, attempting to do so in a server plugin will throw an error.

## Creating an Empty Window
Here is how an empty window should be defined within a client plugin:

```luau
local _, ClientAPI = pcall(function()
	return require(game.ServerScriptService.Packages.DebugUI).GetClientAPI()
end)

return function(ClientAPI: typeof(ClientAPI))
    ClientAPI.CreateWindow("Teleports", {
    	DefaultSize = Vector2.new(300, 400),
    	MinSize = Vector2.new(125, 75)
    })
end
```

The `CreateWindow` function can be provided a `WindowConfig` used for determining how a window should function. In this case, a `DefaultSize` and `MinSize` are being defined to determine how big a window should appear at, and how little it can be.

## Adding a Frame to the Window

The `CreateWindow` function will return a `WindowAPI` allowing you to modify various things about the window after creation. In this case, we want to add a basic frame to the window. You can call the `.AddComponent()` function within the `WindowAPI` to add a Fusion component directly to the window. Here is how you should do so:

```luau
return function(ClientAPI: typeof(ClientAPI))
    local window = ClientAPI.CreateWindow("Teleports", {
       	DefaultSize = Vector2.new(300, 400),
       	MinSize = Vector2.new(125, 75)
    })
    
    window.AddComponent(function(scope)
       	return scope:New("Frame") {
      		Size = UDim2.fromOffset(50, 50)
       	}
    end)
end
```

Additonally, you can just add the function of a required module for the purpose of making your scripts look cleaner.

```luau
window.AddComponent(require(script.BasicFrame))
```

And this is what the window looks like after adding a basic frame.

![Blank Window](/making-a-window/blankwindow.png)
