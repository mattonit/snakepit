'use strict'

module.exports = () => {
  return {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: {
      autoprefixer: {
        cascade: false
      },
    }
  }
}
