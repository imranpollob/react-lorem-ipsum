# Lorem Ipsum Generator
A simple React app to generate customizable Lorem Ipsum text.

## Features
- Generate multiple paragraphs of Lorem Ipsum text.
- Configure words per sentence (min/max).
- Configure sentences per paragraph (min/max).
- One-click copy to clipboard with fallback for older browsers.
- Responsive layout and keyboard-friendly inputs.

![Screenshot](PUBLIC/screenshot.png)

## Getting Started
- Install: `npm install`
- Dev server: `npm run dev` (Vite)
- Production build: `npm run build`
- Preview build: `npm run preview`

## How To Use
1) Adjust the inputs to your desired ranges and paragraph count.
2) Click Generate to render the text.
3) Click Copy to copy the generated text to your clipboard.

## Notes
- Clipboard: Uses `navigator.clipboard` when available; falls back to a safe textarea copy. Clipboard APIs require HTTPS or `http://localhost` in many browsers.
- Assets: Vite serves static assets from `public/` if needed.

