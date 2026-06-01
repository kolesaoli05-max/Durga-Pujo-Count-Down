# 🪔 Durga Puja 2026 Countdown Timer

A festive countdown timer built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 📸 Preview

> A full-screen background image with a warm dark overlay, animated digit cards, and elegant serif typography counting down to **October 17, 2026**.

---

## ✨ Features

- ⏱ Live countdown to Durga Puja 2026 (October 17)
- 🖼 Full-screen background image with cinematic dark overlay
- 🎞 Smooth bump animation on the seconds digit
- 📱 Responsive design — works on all screen sizes
- 🔤 Google Fonts: Cinzel Decorative + Raleway
- ⚡ Zero dependencies — pure HTML, CSS, JS

---

## 📁 Project Structure

```
puja-countdown/
├── index.html       # Main HTML file
├── style.css        # All styling
├── script.js        # Countdown logic

```

---

## 🚀 Getting Started

Just open `index.html` directly in your browser — no server needed.

```bash
# Or use VS Code Live Server extension
```

---

## 🛠 How It Works

The countdown logic in `script.js` calculates the difference between the current time and the target date:

```js
const pujorDate = new Date(2026, 9, 17).getTime(); // 9 = October (0-indexed)

setInterval(() => {
  let time = pujorDate - Date.now();

  const days  = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((time % (1000 * 60)) / 1000);

  // update the DOM...
}, 1000);
```

> ⚠️ **Note:** JavaScript months are 0-indexed — `9` means October, not September.

---

## 🎨 Customization

| What | Where | How |
|------|-------|-----|
| Target date | `script.js` | Change `new Date(2026, 9, 17)` |
| Background image | `style.css` | Update `background-image` URL |
| Title text | `index.html` | Edit `.title` and `.subtitle` |
| Overlay color | `style.css` | Edit the `.overlay` gradient |
| Font | `style.css` | Swap Google Fonts import |

---

## 📦 Built With

- HTML5
- CSS3
- Vanilla JavaScript

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ for Durga Puja 2026 🪔</p>
Author -- Saoli Kole
