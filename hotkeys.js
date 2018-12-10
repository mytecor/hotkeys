'use strict'

let hotkeys = {
	add: function(hotkey, callback) {
		this.hotkeys[hotkey.toLowerCase()] = callback
	},
	remove: function(hotkey) {
		delete this.hotkeys[hotkey.toLowerCase()]
	},
	keys: {},
	hotkeys: {},
	keydown: function(event) {
		this.keys[event.key.toLowerCase()] = true
		for(let hotkey in this.hotkeys) {
			let comb = true
			hotkey.split('+').forEach(key => {
				if(!comb) return
				if(!this.keys[key]) comb = false
			})
			if(comb) {
				event.preventDefault()
				this.hotkeys[hotkey](hotkey)
			}
		}
	},
	keyup: function(event) {
		this.keys[event.key.toLowerCase()] = false
	},
	start: function() {
		document.addEventListener('keydown', this.keydown.bind(this))
		document.addEventListener('keyup', this.keyup.bind(this))
	},
	stop: function() {
		document.removeEventListener('keydown', this.keydown.bind(this))
		document.removeEventListener('keyup', this.keyup.bind(this))
	}
}
