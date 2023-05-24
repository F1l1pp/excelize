import {capitalize} from "@core/utils";

export class DomListener {
        constructor($root, listeners = []) {
            if (!$root) {
                throw new Error('No $root provided for DomListener')
            }
            this.$root = $root
            this.listeners = listeners
        }
        initDOMListeners() {
                this.listeners.forEach(listeners => {
                    const method = getMethodName(listeners)
                    if (!this[method]) {
                        const name = this.name || ''
                        throw new Error(
                            `Метод ${method} не работает в ${name} компоненте`)
                    }
                this[method] = this[method].bind(this)
                // тоже самое, что и addEventListener
                this.$root.on(listeners, this[method])
            })
        }
        removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
        }
}
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}