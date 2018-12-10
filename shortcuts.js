
shortcuts = {
	add: function(shortcut, callback) {
		this.shortcuts[shortcut.toLowerCase()] = callback
	},
	remove: function(shortcut) {
		delete this.shortcuts[shortcut.toLowerCase()]
	},
	keys: {},
	shortcuts: {},
	keydown: function(event) {
		this.keys[event.key.toLowerCase()] = true
		for(let shortcut in this.shortcuts) {
			let comb = true
			shortcut.split('+').forEach(key => {
				if(!comb) return
				if(!this.keys[key]) comb = false
			})
			if(comb) {
				event.preventDefault()
				this.shortcuts[shortcut](shortcut)
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
