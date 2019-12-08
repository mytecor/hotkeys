# hotkeys.js
Simple lightweight JS keyboard hotkeys library

## Usage
```html
<script src="hotkeys.js" type="text/javascript"></script>
<script>
let hotkeys = new Hotkeys

hotkeys.set('ControlLeft+KeyS', e => {
	e.preventDefault()
	console.log('Saved')
})

hotkeys.start()
</script>
```

The Hotkeys object implements the standart js Map object
<br>and it adds the following methods:

### Configure
```js
Hotkeys.configure()
```
Look at the console

### Start listening
```js
hotkeys.start()
```

### Set new hotkey
```js
hotkeys.set('AltLeft+ArrowRight', e => {
	alert(e)
})
```

### Delete hotkey
```js
hotkeys.delete('AltLeft+ArrowRight')
```

### Stop listening
```js
hotkeys.stop()
```
