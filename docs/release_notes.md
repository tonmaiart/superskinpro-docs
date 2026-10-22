# 1.1.5

- Fixed: Pressing Numpad . during Weight Paint mode now centers the view on the mesh weighted to the active bone, allowing orbiting directly around that bone.

- Fixed: The Bone HUD skeleton is now rendered beneath the viewport HUD text to keep the text readable.

# 1.1.4

- Fixed: Importing weights no longer opens the file browser a second time after the import completes.

- Import now opens the file browser directly. Import settings (Method, Preserve Existing Layers) are in an Options section of the file browser's side panel.

- Import and Export are only enabled when a mesh is selected in the viewport. Export also requires the mesh to contain layer data.

# 1.1.3

* Add, Scale and Smooth now show a warning in the status bar when weight could not be distributed or pulled from other bones, or when Smooth found nothing to change, with a hint that some bones may be locked

* Edit Weight Mode now shows how many vertices are hidden at the bottom of the viewport until they are revealed

* The Deform Bones list is now locked outside Edit Weight Mode and can only be used while editing weights

* Select Locked and Select Unlocked now show a message when no bone matches

* Fixed Select Locked and Select Unlocked clearing the current bone selection when no bone matched

* Fixed the add-on panel shifting up slightly when switching to Pose Mode

# 1.1.2

* Improve toast HUD for Limit Total, Normalize, and Selection tools

* Fix "Weight brush not found" warning when entering Weight Paint mode

* Add documentation link to the add-on manifest and remove the Gumroad link button from the UI

# 1.1.1

* Restore the "Preserve Existing Layers" option in the Import Weight dialog

# 1.1.0 ( Minor Update )

### Mirror Weight Settings Update

![Edit Tools](assets/images/1_1_hud_mirror.png) 


* Since Blender mostly mirrors in the X-axis anyway, we made the mirror weight options simpler.
* Added a target side HUD preview: the blue plane area shows the target side for mirroring.
* The "Use Custom Keywords" option is now an optional setting, intended only for users who use keywords that differ greatly from the standard ones. General users no longer need to configure this.

### Bone Hud Update

![Edit Tools](assets/images/1_1_hud_bone.png) 

* Improved the Bone HUD display to make it clearer to see.


![Edit Tools](assets/images/1_1_hud_options.png) 


* Added an option for "Always show bone display" to keep the Bone HUD visible all the time, located in the More Button next to the Deform Bone List (enabled by default).
* Moved the option for [adjusting Bone Size](bone_picker.md) into the More Button of the Deform Bone List as well.

#### Selection Update


![Edit Tools](assets/images/1_1_selection.png) 

* Added options to select unaffected vertices / deselect unaffected vertices for greater flexibility in use.

#### Others Bug fix and improve

* We improved the Transfer Weight options and behavior to make them easier to understand. You can read more in [Weight Transfer](object_tools.md)
* The Transfer Weight list and Active Mesh list now support selecting multiple items at once.
* Improved the system so it can smooth between existing bone weights and empty weight areas.
* Now supports Apple M-Series.
* Improved the popup width to auto-size according to the item names automatically.
* Improved icons to clearly distinguish between meshes using layer-based skin weights and native weights.




# 1.0.13

- Weight Transfer fix: when “Use Selected Vertices Only” is on for the source, the mask is now taken from the same selected area as the weight. Before, it could come from the nearest unselected area.
- Improved Mask Color to see more clear.
- Fix deform bone list , weight color display error when amarture have no deform bones

# 1.0.12

- Improved performance when applying weights.
- Fixed skin weights breaking after editing meshes.

# 1.0.11

- Entering Blender's native Weight Paint Mode no longer forces the add-on mode, preserving standard workflows for non-deform vertex groups.

# 1.0.10

- Added a status for meshes with layer data but missing an armature modifer.
- Added pressure sensitivity toggles for brush size, hardness, and strength.
- Added a Normalize Weights button to the Limit Total popup.
- Increased the maximum brush size limit for surface brushes.
- Fixed an issue where applying weights affected non-deform vertex groups. (Crucial Bug)

# 1.0.9

- Added a button to switch to Object Mode.
- Added a fade-out effect when exit from Bone Picker.
- Added a Clear button to the Transfer Settings popup.
- Improved add-on performance when switching layers and smoothing weights.
- Fixed Armature not hiding when entering Weight Paint mode.
- Fixed Smoothing weight error when increast to extreme values.

# 1.0.8

- Major UI redesign.
- Added shortcut customization to the Settings button.
- Added new features: "Set Total" (limit max bone influences) and "Hammer" (average vertex weights).
- Removed auto-update feature.
- Improve add-on performances.

# 1.0.7

* Improved the bind mesh dropdown in the List Viewer to be easier to use — see [Clean-up Layer Data](bindmesh.md) for details.
* Improved the [Weight Transfer](object_tools.md#weight-transfer) interface to be easier to use.

# 1.0.6

* **Shortcut Guide:** Press <kbd>Alt</kbd> + <kbd>4</kbd> while editing to toggle the Shortcut Guide.
* **Mask Edit Toggle:** Press <kbd>Alt</kbd> + <kbd>1</kbd> while editing to toggle Mask Edit mode.
* **Selection Persistence:** Exiting Mask Edit mode now preserves all active selections in the Deform Bone list.
* **Repeat Last Operation:** Added support for <kbd>Shift</kbd> + <kbd>R</kbd> to repeat the most recent Apply Weight operation.
* **UI Improvements:** Enhanced the user interface for both the Layer List and Deform Bone List sections.

**Bug Fixes :**

* **Multi-Color Mode:** Fixed display updates to ensure higher accuracy when using Mirror Weight and Auto Assign Weight.
* **Scale Weight Distribution:** Improved the scaling behavior to distribute weight more intelligently based on the rig hierarchy.


# 1.0.5

- Bone Picker now shows a header text indicating that bone picking mode is active.
- Bone Picker now displays the name of the hovered bone.
- Bone Picker has a redesigned color scheme for showing bone selection status.
- Improved performance when hovering bones with Multi Color mode enabled.
- Extended add-on support to Blender 4.2 LTS and newer.

**Bug Fixes :**

- Fixed the Viewport Overlay not being restored when exiting Edit Weight mode back to the user's normal edit mode.
- Fixed the Initialize system running again automatically when selecting a mesh.
