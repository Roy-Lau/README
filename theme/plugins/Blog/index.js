// 参考 https://github.com/cnguu/vuepress-theme-yur/blob/master/yur/plugins/Blog/index.js
export default function blog (Vue) {
  Vue.mixin({
    created () {
      const { post: { cover } } = this.$themeConfig
      if (!this.$posts) {
        const today = new Date().toLocaleDateString()
        const { pages } = this.$site
        let posts = {}
        if (pages && pages.length) {
          posts = pages.filter(page => {
            const { frontmatter: { created } } = page
            return !(created === undefined)
          })
          for (const post of posts) {
            const { frontmatter: { created, updated }, path } = post

            if (created) {
              post.frontmatter.created = new Date(created).toLocaleDateString()
            } else {
              post.frontmatter.created = today
            }
            if (updated) {
              post.frontmatter.updated = new Date(updated).toLocaleDateString()
            } else {
              post.frontmatter.updated = today
            }
            if (path) {
              post.category = getCurrentPage(path)
              post.categoryText = getCategoryText(this.$config.navs, post.category)
            }
          }
          posts.sort((a, b) => {
            return new Date(b.frontmatter.updated).getTime() - new Date(a.frontmatter.updated).getTime()
          })
        }
        Vue.prototype.$posts = posts
      }

      // if (!this.$categories) {
      //   const { navs } = this.$config
      //   const categories = {}
      //   if (navs && navs.length) {
      //     navs.forEach(nav => {
      //       categories[nav.link.substring(1, nav.link.length - 1)] = []
      //       nav.key = nav.link.split('/')[1]
      //     })
      //     Vue.prototype.$navs = navs

      //     if (this.$posts.length) {
      //       this.$posts.forEach(post => {
      //         const { category } = post
      //         if (category && hasOwn(categories, category)) {
      //           categories[category].push(post)
      //         }
      //       })
      //     }
      //   }
      //   Vue.prototype.$categories = categories
      // }

      // if (!this.$tags) {
      //   const _tags = {}
      //   if (this.$posts.length) {
      //     for (const post of this.$posts) {
      //       const { tags } = post.frontmatter
      //       if (tags && tags.length) {
      //         for (const tag of tags) {
      //           if (!hasOwn(_tags, tag)) {
      //             _tags[tag] = []
      //           }
      //           _tags[tag].push(post)
      //         }
      //       }
      //     }
      //   }
      //   Vue.prototype.$tags = _tags
      // }

      // if (!this.$timeline) {
      //   const timeline = []
      //   const colors = ['pink', 'red', 'orange', 'cyan', 'purple']
      //   if (this.$posts.length) {
      //     const posts = JSON.parse(JSON.stringify(this.$posts))
      //     posts.sort((a, b) => {
      //       return new Date(b.frontmatter.created).getTime() - new Date(a.frontmatter.created).getTime()
      //     })

      //     let item = {}
      //     let preColor = ''
      //     for (const post of posts) {
      //       const created = yearWithMonth(post.frontmatter.created)
      //       if (!hasOwn(item, 'created')) {
      //         item.created = created
      //       } else if (item.created !== created) {
      //         timeline.push(item)
      //         item = { created }
      //       }
      //       if (!hasOwn(item, 'color')) {
      //         item.color = shuffle(colors)[0]
      //         while (item.color === preColor) {
      //           item.color = shuffle(colors)[0]
      //         }
      //         preColor = item.color
      //       }
      //       if (!hasOwn(item, 'posts')) {
      //         item.posts = []
      //       }
      //       item.posts.push(post)
      //     }
      //     timeline.push(item)
      //     timeline[0].color = 'blue'
      //   }
      //   Vue.prototype.$timeline = timeline
      // }
    },
  })
}