# Getting Started
This page will help you set up the basics of DebugUI for usage in your games.

## Setup
DebugUI requires an explicit initialization call from the server to function. When calling this function, a version of the package will automatically be built for all players in the game.

- Create a `Script` anywhere in `ServerScriptService` and assuming you followed the same structure in the installation tutorial, paste the following code in:

```luau
local ServerScriptService = game:GetService("ServerScriptService")
local Packages = ServerScriptService.Packages

local DebugUI = require(Packages.DebugUI)
DebugUI.Initialize()
```

- Playtest your game, if there were no errors, everything was set up correctly.

## Permissions
DebugUI supports a callback function that determines whether or not it gets initialized for a given player. You can provide the callback in the parameters of the `SetupAllPlayers` function within the package that `.Initialize()` returns.

```luau
local package = DebugUI.Initialize()

-- automatically loads for all players without permissions
package.SetupAllPlayers()

-- custom permission logic
package.SetupAllPlayers(function(player)
    return true -- return false if you don't want this player to have DebugUI
end)
```

Here is an example of group based permissions for players with the developer role and above.

```luau
local groupId = 1293871245 -- id of the group
local rankId = 253 -- id of the rank

package.SetupAllPlayers(function(player)
    local success, rank = pcall(function()
    	return player:GetRankInGroupAsync(groupId)
    end)
    
    return success and rank >= rankId
end)
```
