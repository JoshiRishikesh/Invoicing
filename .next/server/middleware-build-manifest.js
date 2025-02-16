self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/all-invoices": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/all-invoices.js"
    ],
    "/calendar": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/calendar.js"
    ],
    "/delivery-status": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/delivery-status.js"
    ],
    "/invoice": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/invoice.js"
    ],
    "/print-preview": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/print-preview.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];