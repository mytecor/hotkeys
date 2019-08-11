'use strict'

class Hotkeys extends Map {
	constructor() {
		super()

		this.downkeys = new Set()

		this.keydown = event => {
			this.downkeys.add(event.code)

			nextHotkey:
			for(let [hotkey, callback] of this) {
				for(let key of hotkey)
					if(!this.downkeys.has(key))
						continue nextHotkey

				callback(event)
			}
		}

		this.keyup = event => this.downkeys.delete(event.code)
	}

	set(hotkey, callback) {
		super.set(hotkey.split('+'), callback)
		return this
	}

	delete(hotkey) {
		nextHotkey:
		for(let [hkey] of this)
			if(hotkey == hkey.join('+')) return super.delete(hkey)
		return this
	}

	start() {
		document.addEventListener('keydown', this.keydown)
		document.addEventListener('keyup', this.keyup)
		return this
	}

	stop() {
		document.removeEventListener('keydown', this.keydown)
		document.removeEventListener('keyup', this.keyup)
		return this
	}

	configure() {
		let keydown = event => {
			event.returnValue = event.preventDefault()
			this.downkeys.add(event.code)
		}

		let keyup = event => {
			document.removeEventListener('keydown', keydown)
			document.removeEventListener('keyup', keyup)
			console.log(Array.from(this.downkeys.keys()).join('+'))
			this.downkeys.clear()
		}

		document.addEventListener('keydown', keydown)
		document.addEventListener('keyup', keyup)
		console.log('now it is waiting for a combination')
	}
}