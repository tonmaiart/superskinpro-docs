# FAQ (Frequently Asked Questions)

## Learning the Add-on

??? question "I've never done layer-based weight painting before. What can it do?"
    Think of it like Photoshop layers, but for skin weights. You can fix parts without breaking your old work, mix weights together, or paint weights from start to finish. Check out our Instagram and YouTube tutorials to see how easy and helpful it is!

??? question "Where should I start learning the layer-based workflow?"
    We recommend starting with our [YouTube Tutorial Playlist](https://youtube.com/playlist?list=PLe-1umuorC5Q&si=WEoua0jYNtCVhhgz).
    
    If you want to read more details, check out our [Full Documentation](https://tonmaiart.github.io/superskinpro-docs/).

---

## Add-on Compatibility

??? question "Does this add-on work with any rig?"
    **Yes, absolutely.** The add-on only paints weights and doesn't change your rig. You can use it with any rig, including custom rigs, Rigify, or Auto-Rig Pro.

??? question "Will my skin weights work for people who don't have this add-on?"
    **Yes.** Other people can open and use your .blend files normally, even if they don't have this add-on.

??? question "Are future updates free?"
    **Free Lifetime Updates.** Buy it once, and all future updates (bug fixes and new tools) are free to download from your Gumroad Library.

??? question "If I update to a newer version, will my older files still work?"
    **Yes.** Old files will still work fine. Updating the add-on will not break or change your saved weights.

??? question "Does the add-on support custom shortcuts?"
    Yes. Go to the add-on panel, then click `Settings > Edit Shortcuts`.

??? question "Which Blender versions does the Add-on support?"
    Supports Blender 4.2, 4.5, 5.0, and 5.2.

---

## Support & Community

??? question "How do I get help or report bugs?"
    [Join the Super Skin Pro Discord Server](https://discord.gg/BCEJZBnTfM) to chat, ask questions, or report bugs.

??? question "Are there any plans for new features? Do you accept feature requests?"
    **Yes!** Right now, my main goal is fixing bugs and making sure everything runs smoothly. But I'm always happy to hear your ideas! I will check every request to see if it helps most users. Feel free to share your thoughts in our [Super Skin Pro Discord Server](https://discord.gg/BCEJZBnTfM)

---

## Add-on Limitations

??? warning "Blender's Native Skinning Tools"
    Please use the add-on's own tools (Mirror, Transfer, Smooth/Brush, and Vertex Selection) instead of Blender's default tools while working with layers.
    
    Watch the [Brush & Vertex Selection tutorial](https://youtu.be/n2bP1M5w_TI).

??? warning "Baking to Native Blender"
    You can bake your weights back to normal Blender anytime: [Baking Documentation](https://tonmaiart.github.io/superskinpro-docs/bindmesh/) (Note: baking merges all layers together). To keep things easy to edit, we recommend keeping your layers until your project is finished.

??? warning "Modifier Stack Order"
    When skinning, try not to put heavy deformation modifiers above the Armature modifier in the list.