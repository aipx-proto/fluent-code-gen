---
tagName: aipx-button
description: Clickable button element
---

Basic usage

```html
<aipx-button>Click me</aipx-button>
```

Variants

```html
<aipx-button variant="primary">Click me</aipx-button>
```

<template shadowrootmode="open">
  <style>
    :host[variant=primary] {
      background-color: black;
      color: white;
    }
  </style>
  <button><slot></slot></button>
</template>
