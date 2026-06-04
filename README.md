# Anime Site

A responsive anime-themed website built with HTML, CSS, and JavaScript. The project combines an anime discovery homepage, merchandise pages, user authentication, a protected shopping cart, upcoming anime highlights, and a contact page.

## Features

- Anime landing page with animated hero visuals and video backgrounds
- Anime history and featured anime sections
- Merchandise listing and product detail page
- Firebase email/password signup and login
- Logout state handling in the navigation
- Protected cart page for logged-in users
- Cart storage with `localStorage`
- Quantity updates, item removal, and grand total calculation
- Upcoming anime page with scroll reveal animation
- Contact page with embedded Google Map and team/contact details
- Responsive layout for desktop, tablet, and mobile screens

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Firebase Authentication
- Firebase Firestore setup
- Firebase Analytics setup
- Font Awesome icons
- Browser `localStorage`

## Project Structure

```text
.
|-- index.html          # Homepage with hero, anime history, featured anime, and new-gen anime
|-- About.html          # Anime merchandise listing page
|-- sproduct.html       # Product detail page with add-to-cart logic
|-- cart.html           # Protected shopping cart page
|-- login.html          # Firebase login page
|-- singup.html         # Firebase signup page
|-- upcoming.html       # Upcoming anime page
|-- contact.html        # Contact page with map and form layout
|-- firebase.js         # Firebase app/auth/firestore initialization
|-- authCheck.js        # Redirects logged-out users from protected pages
|-- main.js             # Mobile menu and scroll reveal behavior
|-- style.css           # Main styling and responsive design
|-- img/                # Images, banners, videos, product, anime, and contact assets
|-- public/             # Placeholder assets
|-- styles/             # Additional global styles
`-- docs/               # Static hosting support files
```

## Getting Started

This is a static frontend project, so there is no package installation step.

1. Clone or download the project.
2. Open the project folder.
3. Run it with a local server.

Using Python:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/index.html
```

You can also use the VS Code Live Server extension and open `index.html`.

## Firebase Setup

The project uses Firebase from CDN imports inside the HTML and JavaScript files. Firebase configuration is stored in `firebase.js`.

Authentication flow:

- `singup.html` creates a new account with email and password.
- `login.html` signs in an existing user.
- `index.html` updates the navigation based on login/logout state.
- `authCheck.js` protects pages such as `cart.html`.
- `sproduct.html` requires login before adding products to the cart.

If you use your own Firebase project, replace the values in `firebase.js` with your Firebase web app config and enable Email/Password authentication in the Firebase Console.

## Cart Behavior

The shopping cart is stored in the browser with `localStorage`.

- Products are added from `sproduct.html`.
- Cart data is saved under the `cart` key.
- `cart.html` renders saved items, updates quantities, removes items, and calculates the grand total.
- Cart data is local to the current browser/device.

## Main Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Main anime homepage |
| `About.html` | Anime merchandise gallery |
| `sproduct.html` | Product details and add-to-cart |
| `cart.html` | Shopping cart |
| `login.html` | User login |
| `singup.html` | User signup |
| `upcoming.html` | Upcoming anime releases |
| `contact.html` | Contact information and map |

## Notes

- Some file names are case-sensitive on hosted servers. For best results, keep links and file names consistent, especially `Upcoming.html`/`upcoming.html` and `singup.html`.
- Firebase module imports need a local server or hosted environment. Opening files directly with `file://` may cause module or browser security issues.
- The project currently uses frontend-only cart storage. A production version should store orders and cart data in a backend or Firestore.

## Future Improvements

- Add checkout and order history
- Store cart items per user in Firestore
- Add product filtering and search
- Improve form validation and contact form submission
- Fix text encoding issues in some pages
- Add separate product detail pages for each merch item
