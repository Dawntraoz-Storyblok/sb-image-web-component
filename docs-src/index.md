---
layout: page.11ty.cjs
title: <sb-image> ⌲ Home
---

# &lt;sb-image>

`<sb-image>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<sb-image>` is just an HTML element. You can it anywhere you can use HTML!

```html
<sb-image></sb-image>
```

  </div>
  <div>

<sb-image></sb-image>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<sb-image>` can be configured with attributed in plain HTML.

```html
<sb-image imageSrc="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg"></sb-image>
```

  </div>
  <div>

<sb-image imageSrc="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg"></sb-image>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<sb-image>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const imageSrc = 'https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg';

render(
  html`
    <h2>This is a &lt;sb-image&gt;</h2>
    <sb-image .imageSrc=${imageSrc}></sb-image>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;sb-image&gt;</h2>
<sb-image imageSrc="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg"></sb-image>

  </div>
</section>
