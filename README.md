# shortcuts.js
Simple lightweight JS keyboard shortcuts library

## Usage
```html
<script src="shortcuts.js" type="text/javascript"></script>
```

### Start
```js
shortcuts.start()
```

### Add new shortcut
```js
shortcuts.add('alt+arrowleft', (shortcut) => {
  alert(shortcut)
})
```

### Remove shortcut
```js
shortcuts.remove('alt+arrowleft')
```

### Stop
```js
shortcuts.stop()
```
