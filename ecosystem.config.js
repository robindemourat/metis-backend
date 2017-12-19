module.exports = {
  apps : [{
    name        : "app",
    script      : "./build/server.js",
    env: {
      "NODE_ENV": "production",
    }
  },
  ]
}
