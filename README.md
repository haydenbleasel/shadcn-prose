# shadcn-typography

A drop-in replacement for `@tailwindcss/typography`, designed for use with shadcn/ui. Includes headings, paragraphs, lists and more.

## Installation

Simply install the package:

```bash
npm install -D shadcn-typography
```

Then update your `globals.css`:

```css
@import 'shadcn-typography';
```

## Usage

Add a `typography` class to your content and you're good to go:

```tsx
<div className="typography">
  <h1>Hello world</h1>
  <p>This is a paragraph</p>
</div>
```