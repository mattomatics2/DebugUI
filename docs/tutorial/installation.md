# Installing DebugUI
Because of the way DebugUI is packaged, adding it to your project is really easy.

::: info
Currently, the only way to install DebugUI is through the releases tab on the Github repository. This might change in the future supporting Roblox packages/models.
:::

## Installing via Github
Currently the only way to install DebugUI is through the releases tab on the Github repository.

- Head over to [DebugUI's releases page](https://github.com/mattomatics2/DebugUI/releases).
- Click the `Assets` dropdown to view the downloadable files.

![Assets Dropdown](../installation/githubdownload.png)

- Click on the `DebugUI.rbxm` file to download it.

![RBXM Download](../installation/githubdownload2.png)

- Open Roblox Studio to import the model.
- Right click on `ServerScriptService`, hover over `Insert`, and click `Import Roblox Model`.

![Model Import](../installation/modelimport.png)

- In your file explorer, select the `DebugUI.rbxm` file you just downloaded from Github.
- You should see a new module under `ServerScriptService` named `DebugUI`.

::: warning
DebugUI was designed to function in `ServerScriptService`, putting it elsewhere can potentially expose your server code to clients.
:::

### Organization
I recommend putting the `DebugUI` module you just inserted into a new folder called `Packages`. Packages are modules containing both server and client code.

### Final Layout
By the time you're finished, your explorer should look like this:

![Final Layout](../installation/finalexplorer.png)
