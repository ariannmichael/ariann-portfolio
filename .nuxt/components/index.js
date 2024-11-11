export { default as About } from '../../components/About.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as Experience } from '../../components/Experience.vue'
export { default as Home } from '../../components/Home.vue'
export { default as TheNavbar } from '../../components/TheNavbar.vue'
export { default as Work } from '../../components/Work.vue'
export { default as ModelIProject } from '../../components/Model/IProject.ts'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
