## voice-over-translation contributing guide

## @vot.js/ext

Don't forget to pass `{ fetchFn: GM_fetch }` option to getVideoID and getVideoData

### Updating @vot.js/\* packages

Casual:

1. Install new version of `@vot.js/...` with

```bash
npm install @vot.js/...
```

If patches broken after casual:

1. Remove "postinstall" script from package.json
2. Remove `@vot.js/...` package with

```bash
npm uninstall @vot.js/...
```

3. Install new version of `@vot.js/...` with

```bash
npm install @vot.js/...
```

4. Restore "postinstall" script in package.json
5. Run patch-package

```bash
npx patch-package
```

6. If it ended with an error run

```bash
npx patch-package --partial
```

7. Fix errors from patch-package-errors.log
8. Run patch-package update

```bash
npx patch-package @vot.js/...
```

9. Repeat 5-7 steps before success applying patches
