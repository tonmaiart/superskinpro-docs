# FAQ

## 1. Which Blender versions does the Add-on support?

Support Blender 4.2 / 4.5 / 5.0 / 5.2 

## 2. Can I set my own shortcuts?

Yes. Click **Edit Shortcuts** in the settings popover (gear icon). It opens Blender's `Preferences > Keymap` page, already filtered to Super Skin Pro shortcuts, where you can rebind any of them.

- Changes made there show up in the Super Skin Pro panel and shortcut overlay right away.
- To undo a change, use the restore arrow next to that shortcut in Blender's Keymap page.
- Remember to save your Preferences (or keep Auto-Save Preferences on) so your changes persist.

## 3. Can the Add-on's Skin Weight system be used together with native Blender?

No. Once you press **Init Layer Data** on a model, that model's data is read exclusively through the Add-on's **Layer** system — it's no longer read directly as native Blender vertex groups.

If you want to go back to editing Skin Weight with Blender's native tools, you first need to press **Clean-up Mesh** to convert the data back to native Blender format. All Deform Bone entries and Skin Weight values stay exactly the same — the only change is that every Layer gets merged down into a single Layer, since native Blender doesn't support a multi-layer system.

See [Clean-up Layer Data](bindmesh.md) for more details.

## 4. Does the Add-on have a Brush Paint Weight tool?

Super Skin Pro doesn't use Blender's native Weight Paint Mode brush system directly. Instead it follows a **select vertices first, then adjust weight** approach through the Apply Weight tools: Add Weight, Scale Weight, Smooth Weight, and Sharpen Weight — adjustable either via the UI slider or a mouse-drag shortcut.

For selecting vertices, you can use the Circle Select tool, whose radius adjusts just like a regular brush, giving you speed close to painting while keeping precise control over the weight at each step. See the [Weight Apply Slider](edit_tools.md#weight-apply-slider) page for more details.

## 5. Where can I ask further questions or report issues?

Join the Super Skin Pro Discord to chat, ask questions, or report bugs: [https://discord.gg/BCEJZBnTfM](https://discord.gg/BCEJZBnTfM)
