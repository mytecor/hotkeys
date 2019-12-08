
export default class Hotkeys extends Map {
	constructor(target = document) {
		super()

		this.target = target
		this.downkeys = new Set

		this.keydown = e => {
			this.downkeys.add(e.code)

			nextHotkey:
			for(let [hotkey, callback] of this) {
				for(let key of hotkey)
					if(!this.downkeys.has(key))
						continue nextHotkey

				callback(e)
			}
		}

		this.keyup = e => this.downkeys.delete(e.code)
	}

	set(hotkeys, callback) {
		(hotkeys + '').replace(/ /g, '').split(',').forEach(hotkey => super.set(hotkey.split('+'), callback))
		return this
	}

	delete(hotkeys) {
		(hotkeys + '').replace(/ /g, '').split(',').forEach(hotkey => {
			for(let [hkey] of this)
				if(hotkey == hkey.join('+')) return super.delete(hkey)
		})
		return this
	}

	start() {
		this.target.addEventListener('keydown', this.keydown)
		this.target.addEventListener('keyup', this.keyup)
		return this
	}

	stop() {
		this.target.removeEventListener('keydown', this.keydown)
		this.target.removeEventListener('keyup', this.keyup)
		return this
	}

	static configure() {
		let downkeys = new Set
		
		let keydown = e => {
			e.preventDefault()
			downkeys.add(e.code)
		}

		let keyup = e => {
			document.removeEventListener('keydown', keydown)
			document.removeEventListener('keyup', keyup)
			console.log(Array.from(downkeys.keys()).join('+'))
		}

		document.addEventListener('keydown', keydown)
		document.addEventListener('keyup', keyup)
		console.log('[hotkeys-nano] Now I am waiting for a combination')
	}
}