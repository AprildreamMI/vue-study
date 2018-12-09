Vue.directive('closebox',{
    bind(el, binding, vnode) {
        document.onclick = function (e) {
            console.log(el)
            console.log(e.target)
            if (el.contains(e.target)) {
                return false
            }
            if (binding.expression) {
                binding.value(e)
            }
        }
    },
    unbind() {
        document.onclick = null
    }
})
