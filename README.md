# hotkeys-nano
Simple lightweight JS keyboard hotkeys library

## Installation
```
yarn add hotkeys-nano
```
or
```
npm install hotkeys-nano
```

### Configure
```js
Hotkeys.configure()
```
Look at the console

## Usage
```js
import Hotkeys from 'hotkeys-nano'
// or import as module from unpkg:
// import Hotkeys from 'https://unpkg.com/hotkeys-nano'

let hotkeys = new Hotkeys

hotkeys.set('ControlLeft+KeyS', e => {
	e.preventDefault()
	console.log('Saved')
})

hotkeys.start()
```

The Hotkeys object implements the standart js Set object
<br>and it adds the following methods:

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
