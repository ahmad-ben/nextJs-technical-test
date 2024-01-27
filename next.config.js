// next.config.js
module.exports = {
  async rewrites() {
      return {
        beforeFiles: [
            {
                source: '/home',
                destination: '/',
            }
        ]
      }
  }
};