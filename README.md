# hotkeys.js
Simple lightweight JS keyboard hotkeys library

## Usage
```html
<script src="hotkeys.js" type="text/javascript"></script>
```

### Start
```js
hotkeys.start()
```

### Add new hotkey
```js
hotkeys.add('alt+arrowleft', (hotkey) => {
  alert(hotkey)
})
```

### Remove hotkey
```js
hotkeys.remove('alt+arrowleft')
```

### Stop
```js
hotkeys.stop()
```
