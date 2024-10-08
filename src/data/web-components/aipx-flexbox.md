---
tagName: aipx-flexbox
description: Container element for CSS flexbox layout
---

Basic usage

```html
<aipx-flexbox>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</aipx-flexbox>
```

Use inline style to set any flexbox properties

```html
<aipx-flexbox style="flex-direction: column; justify-content: center; gap: 8px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</aipx-flexbox>
```

<template shadowrootmode="open">
  <style>
    :host {
      display: flex;
    }
  </style>
  <slot></slot>
</template>
