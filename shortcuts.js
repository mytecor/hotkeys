'use strict'

let hotkeys = {
	add: function(shortcut, callback) {
		this.hotkeys[shortcut.toLowerCase()] = callback
	},
	remove: function(shortcut) {
		delete this.hotkeys[shortcut.toLowerCase()]
	},
	keys: {},
	hotkeys: {},
	keydown: function(event) {
		this.keys[event.key.toLowerCase()] = true
		for(let shortcut in this.hotkeys) {
			let comb = true
			shortcut.split('+').forEach(key => {
				if(!comb) return
				if(!this.keys[key]) comb = false
			})
			if(comb) {
				event.preventDefault()
				this.hotkeys[shortcut](shortcut)
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
