export const About = () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Contact = () => import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const Experience = () => import('../../components/Experience.vue' /* webpackChunkName: "components/experience" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const TheNavbar = () => import('../../components/TheNavbar.vue' /* webpackChunkName: "components/the-navbar" */).then(c => wrapFunctional(c.default || c))
export const Work = () => import('../../components/Work.vue' /* webpackChunkName: "components/work" */).then(c => wrapFunctional(c.default || c))
export const ModelIProject = () => import('../../components/Model/IProject.ts' /* webpackChunkName: "components/model-i-project" */).then(c => wrapFunctional(c.default || c))

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
