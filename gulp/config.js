var dest = "./_build";
var src = '.';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + "/sass/*.{sass,scss}",
    origin: src,
    dest: dest + "/css",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/img' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  markup: {
    src: ["./**/*.md", "./**/*.html", "./**/*.xml", "./**/*.txt", "!./node_modules/**/*", "!./_build/**/*"],
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/plugins.js',
      dest: dest + '/js/',
      outputName: 'plugins.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    },{
      entries: src + '/js/main.js',
      dest: dest + '/js/',
      outputName: 'main.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
