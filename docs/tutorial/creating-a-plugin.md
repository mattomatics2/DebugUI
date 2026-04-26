# Plugins
Plugins are the main way of adding functionality to DebugUI. You can control mostly everything through the extensive PluginAPI that is given. 

## Organization
Plugins are created on the server, and are defined through seperate ModuleScripts. Here is an example of how you should store your plugins.

![Plugin Layout](/making-a-plugin/pluginlayout.png)

As you can see, each plugin is under the main server initialization script you created before. Additionally, you can add sub-folders to organize your plugins even more.

## Creating a Plugin
Plugins are defined through ModuleScripts. The ModuleScript acting as the plugin should return a function with a singular parameter, either the `ClientAPI` or the `ServerAPI` depending on how you registered it. Here is an example of a client plugin:

```luau
local _, ClientAPI = pcall(function()
    return require(game.ServerScriptService.Packages.DebugUI).GetClientAPI()
end)

return function(ClientAPI: typeof(ClientAPI))
    -- here is where your plugin logic will be
end
```

The usage of the `pcall` is to prevent the plugin from throwing an error at runtime while still having access to typechecking. Here is an example of how you should create a server plugin:

```luau
local _, ServerAPI = pcall(function()
    return require(game.ServerScriptService.Packages.DebugUI).GetServerAPI()
end)

return function(ServerAPI: typeof(ServerAPI))
    -- here is where your plugin logic will be
end
```

## Registering a Plugin
Registering a plugin is quite easy. Just require the main DebugUI package on the server, and call one of the two register plugin functions.

::: warning
A plugin you register **must** return a function. Otherwise, the plugin will not function.
:::

```luau
-- Use this if the plugin is supposed to be on the server
DebugUI.RegisterServerPlugin(script.ServerPlugin)

-- Use this if the plugin is supposed to be on the client
DebugUI.RegisterClientPlugin(script.ClientPlugin)
```
