# Commands
Commands can be created through the `ClientAPI` and can be used to open windows. Additionally, you can provide any custom functionality you want when the command is triggered.

## Basic Command
Commands are not exclusively just for opening windows, you can use it for anything. The `.CreateCommand()` function expects name, a table containing the possible commands, and a callback for when the command is triggered. Here is how a basic command can be created:

```luau
ClientAPI.CreateCommand("ExampleCommand", {"example"}, function()
    -- this will run whenever /example is triggered
end)
```

You can even create multiple aliases for the same command:

```luau
ClientAPI.CreateCommand("Teleport", {"tp", "teleport", "to"}, function()
    -- this will run whenever /tp, /teleport, or /to is triggered
end)
```

## Plugin Command
This is how you can make a command open a window when triggered:

```luau
ClientAPI.CreateCommand("ExampleCommand", {"example"}, function()
   	-- create the window whenever the command /example is triggered
   	ClientAPI.CreateWindow("Example Window", {
        DefaultSize = Vector2.new(300, 400),
        MinSize = Vector2.new(125, 75)
   	})
end)
```

## Custom Command Registering
If you decide you want to use a seperate command system for opening a window instead of the default `TextChatService` behavior, you can do so with the `.SetCommandLogic()` function as part of the `ClientAPI`. You can create custom command logic like this:

```luau
ClientAPI.SetCommandLogic(function(name, commands, callback)
    -- this is where you would create your command however you want
end)
```
