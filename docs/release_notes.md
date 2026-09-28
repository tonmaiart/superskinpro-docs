# 1.0.8
**Improvements & Changes :**

* Add-on shortcuts can now be rebound directly from the Settings button.
* Added Brush Paint Weight — switch between the Brush and Selection tools with `Alt+1` in Weight Paint Mode.
* Improved the UI to show both the Layer list and Bone list at the same time.

# 1.0.7
**Improvements & Changes :**

* Improved the bind mesh dropdown in the List Viewer to be easier to use — see [Clean-up Layer Data](bindmesh.md) for details.
* Improved the [Weight Transfer](object_tools.md#weight-transfer) interface to be easier to use.

# 1.0.6
**Improvements & Changes :**

* **Shortcut Guide:** Press `Alt + 4` while editing to toggle the Shortcut Guide.
* **Mask Edit Toggle:** Press `Alt + 1` while editing to toggle Mask Edit mode.
* **Selection Persistence:** Exiting Mask Edit mode now preserves all active selections in the Deform Bone list.
* **Repeat Last Operation:** Added support for `Shift + R` to repeat the most recent Apply Weight operation.
* **UI Improvements:** Enhanced the user interface for both the Layer List and Deform Bone List sections.

**Bug Fixes :**
* **Multi-Color Mode:** Fixed display updates to ensure higher accuracy when using Mirror Weight and Auto Assign Weight.
* **Scale Weight Distribution:** Improved the scaling behavior to distribute weight more intelligently based on the rig hierarchy.


# 1.0.5

**Improvements & Changes :**

- Bone Picker now shows a header text indicating that bone picking mode is active.
- Bone Picker now displays the name of the hovered bone.
- Bone Picker has a redesigned color scheme for showing bone selection status.
- Improved performance when hovering bones with Multi Color mode enabled.
- Extended add-on support to Blender 4.2 LTS and newer.

**Bug Fixes :**

- Fixed the Viewport Overlay not being restored when exiting Edit Weight mode back to the user's normal edit mode.
- Fixed the Initialize system running again automatically when selecting a mesh.
