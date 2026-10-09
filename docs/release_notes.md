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
