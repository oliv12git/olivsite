# olivsite

My personal website: tech, my PC setup, and favourite Valve games.

## Run locally

The site is plain HTML, CSS, and JavaScript. There are no packages to install or build step to run.

From the repository root, serve the `dist` directory with Python 3:

```sh
python -m http.server 8000 --directory dist
```

Open <http://localhost:8000>. On Windows, use `py` instead of `python` if needed.

## Edit the site

- `dist/index.html` — profile, PC specifications, games, and page metadata.
- `dist/style.css` — layout, colours, typography, and responsive styles. Shared values are in `:root`.
- `dist/script.js` — optional Steam name copying and avatar error handling.
- `dist/portal2.jpg` — the existing Portal 2 artwork used in the profile card.
- `dist/favicon.ico` — the site icon.

`dist` contains the maintained source files as well as the deployable site. Despite the folder name, it is not generated. The other existing media files are retained for future use and are not loaded by the page.

The page content and navigation work with JavaScript disabled. Copying the Steam name is available only when the Clipboard API exists (normally HTTPS or localhost); denied clipboard access displays a manual-copy hint. The Steam avatar is an external image, with a local monogram beneath it and an error handler to hide failed downloads.

## Check changes

If Node.js is installed, check the JavaScript syntax:

```sh
node --check dist/script.js
```

Preview at desktop and mobile widths, tab through the links and copy button, and check the page with JavaScript disabled and reduced motion enabled. All local links and assets are relative so the site also works under a subdirectory.

## Deploy

Serve the contents of `dist` from any static web host over HTTPS. No server-side code, environment variables, or build command is needed. Updating this repository alone does not configure hosting.

The metadata deliberately omits a canonical URL and absolute social-preview image URL until a production domain is configured. Add those to `dist/index.html` when the final public URL is known.

Portal and the other game names and artwork belong to their respective owners. This is a personal fan site, not an official Valve website.
