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

let hotkeys = new Hotkeys

hotkeys.set('ControlLeft+KeyS', e => {
	e.preventDefault()
	console.log('Saved')
})

hotkeys.set('ControlLeft+ShiftLeft+KeyZ, ControlLeft+KeyY', e => {
	console.log('Ctrl+Y')
})

hotkeys.start()
```

### Create hotkeys listener
```js
let hotkeys = new Hotkeys(target: Node)
```

The Hotkeys object implements the standart js Map object
<br>and it adds the following methods:

### Start listening
```js
hotkeys.start()
```

### Set new hotkey
```js
hotkeys.set(hotkeys: String|Array, callback: Function)
```
###### Example
```js
hotkeys.set('AltLeft+ArrowRight', e => {
	console.log(e)
})
```

### Delete hotkey
```js
hotkeys.delete(hotkeys: String|Array)
```
###### Example
```js
hotkeys.delete('AltLeft+ArrowRight')
```

### Stop listening
```js
hotkeys.stop()
```
