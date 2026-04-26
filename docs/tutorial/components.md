# Fusion Components
Often when you have a large plugin with a lot of components, you would want to seperate them into different modules. You can do this, however because of the way the DebugUI package works, typechecking might be a little bit more difficult.

::: tip
Populating a window with components requires an understanding of Fusion 0.3. It is unlikely you will understand the following without a solid understanding.
:::

## Why the Workarounds?
When you register a client plugin, during runtime, the module gets moved to `PlayerGui`. This means you won't have access to `ServerScriptService` anymore, causing an error. There are two methods to working around this limitation, each with a benefit and a downside.

## Type Only Approach
This approach is cleaner and smaller, but doesn't let you actually interact with the `ClientAPI`. If you only need access to the types, and don't actually need to interact with the `ClientAPI`, this is the recommended approach.

```luau
local _, ClientAPI = pcall(function()
	return require(game.ServerScriptService.Packages.DebugUI).GetClientAPI()
end)

type Scope = typeof(ClientAPI.Types.Scope())

return function(
    scope: Scope,
    props: {
    	
    }
)
	
    return scope:New("Frame") {
       	Size = UDim2.fromOffset(50, 50)
    }
end
```

## Hybrid Approach
This approach is slightly more complicated and janky. It grabs the type from `ServerScriptService`, and casts it on to a `QueryDescendants` call. This allows you to use any function within the `ClientAPI` without any limitations.

```luau
local root = script:FindFirstAncestorWhichIsA("ScreenGui")
local ClientAPI = require(
    assert(root and root:QueryDescendants("#ClientAPI")[1], "ClientAPI not found")
) :: ClientAPI

type ClientAPI = typeof(
    require(game.ServerScriptService.Packages.DebugUI).GetClientAPI()
)

type Scope = typeof(ClientAPI.Types.Scope())

return function(
    scope: Scope,
    props: {
    	
    }
)

    return scope:New("Frame") {
       	Size = UDim2.fromOffset(50, 50)
    }
end
```

## Built-in Components
Using the `ClientAPI` you can access the built-in fusion components with the `.GetFusionComponent()` function. Just specify the name, and the function of the component will be returned. Here is an example of adding the default `Button` component to the scope:

```luau
local scope = scope:innerScope({
    Button = ClientAPI.GetFusionComponent("Button")
})
```
