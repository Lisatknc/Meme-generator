const path = require('path');
module.exports = {

  "entry": {
  "index": "./src/index.js",
  },
  "output": {
    "filename": "index.pack.js",
    // "path": "path.resolve(__dirname)",
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
}
}
