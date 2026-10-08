# Object Mode Tools

<figure markdown>
![Deform Bone List](assets/images/object_tools.png)
</figure>

- - -

### Weight Transfer


Weight Transfer can be applied in many ways, such as:

### 1) Transfer weights from the body to clothing and accessories

<figure markdown>
  ![Weight Transfer Body to Clothing](assets/images/transfer1.gif)
</figure>

**How to use:**

1. Add both the body and clothing to the Transfer list.
2. Mark the body mesh as **Source**.
3. Click **Transfer**.

---

### 2) Transfer weights from multiple meshes

<figure markdown>
  ![Weight Transfer Multiple Meshes](assets/images/transfer2.gif)
</figure>

**How to use:**

1. Add the source meshes and the target mesh to the Transfer list.
2. Mark the relevant meshes as **Source**.
3. Click **Transfer**.

---

**Note:**

- You can restrict the transfer to specific source or target areas by enabling the **Use Selected Vertices** toggle (the selection must exist in Edit Mode).
- You can choose a weight transfer method, such as **Closest Distance** or **Vertex ID**.
- Enable the **Keep Old Layer Data** checkbox to preserve existing layers on the mesh.

<br>
- - -
<br> 

# Weight Export

You can export all the Layer Data and Skin Weight from a selected Mesh to a file, for backing up a version or sending to someone else.

**How to use**

1. Select the Mesh you want
2. Click Export Weights

<br>
- - -
<br> 

# Weight Import

<figure markdown>
![Deform Bone List](assets/images/weight_export.png)
</figure>

How to use:

1. Select the target model.

2. Click the Import button.

- You can choose a weight transfer method when importing, such as Closest Distance or Vertex ID.

- Enable the Keep Old Layer Data checkbox to preserve existing layers on the mesh.