This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```
npm run develop
```

- Runs the app in development mode while watching the tailwind_custom_entry.css file.

```
npm run build
```

- Builds files into `build` folder, in production mode
  - production mode means:
    - purgecss - unused tailwindcss css will be removed
    - autoprefixer - vender prefixes added
    - cssnano - css will be minimized

<br />

---

<br />

### To use this repo with Firebase auth:

- checkout the branch: [**_`with_firebase_auth`_**](https://github.com/stevenjchang/template-react-tailwind-purgecss-watch/tree/with_firebase_auth)

<br />

---

<br />

## NOTES:

### Here's what some of the packages do:

- `purgecss` - by default, tailwindcss imports all classes. purgecss removes all unused classes, significantly reducing compiled file size.
- `cssnano` - css minifier + remove css comments
- `autoprefixer` - Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website.

### Check out REFERENCES.md for helpful articles and resources used in this repo
