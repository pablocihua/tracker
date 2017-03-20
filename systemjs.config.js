/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'build/app', // 'dist',
    '@angular':                   'node_modules/@angular',
    '@angular2-material':         'node_modules/@angular2-material',
    '@vaadin':                    'node_modules/@vaadin',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'bootstrap':                  'node_modules/bootstrap/dist/js',
    'jsonapi-datastore':          'node_modules/jsonapi-datastore/dist',
    'angular2-localstorage':      'build/node_modules/angular2-localstorage',
    'components':                 'build/app/components',
    'objects':                    'build/app/objects',
    'services':                   'build/app/services',
    'constants':                  'build/app/constants',
    'routes':                     'build/app/routes',
    'pipes':                      'build/app/pipes',
    'jwt-decode':                 'node_modules/jwt-decode/lib',
    'jquery':                     'node_modules/jquery/dist',
    'jsonapi-datastore':          'node_modules/jsonapi-datastore/dist',
    'moment':                     'node_modules/moment',
    'ng2-uploader':               'node_modules/ng2-uploader',
    'actioncable':                'node_modules/actioncable/lib/assets/compiled',
    'chart.js':                   'node_modules/chart.js/src',
    'chartjs-color':              'node_modules/chartjs-color',
    'chartjs-color-string':       'node_modules/chartjs-color-string',
    'color-name':                 'node_modules/color-name',
    'color-convert':              'node_modules/color-convert'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'bootstrap':                  { defaultExtension: 'js', main: 'bootstrap.js' },
    'angular2-localstorage':      { defaultExtension: 'js' },
    'jwt-decode':                 { main: 'index.js', defaultExtension: 'js' },
    'jquery':                     { main: 'jquery.js', defaultExtension: 'js' },
    'jsonapi-datastore':          { main: 'jsonapi-datastore.js', defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' },
    'hammerjs':                   { main: 'hammer.js', defaultExtension: 'js'},
    'ng2-uploader':               { main: 'ng2-uploader.js', defaultExtension: 'js' },
    'actioncable':                { main: 'action_cable', defaultExtension: 'js'},
    'chart.js':                   { main: 'chart.js', defaultExtension: 'js' },
    'chartjs-color':              { main: 'index.js', defaultExtension: 'js'},
    'chartjs-color-string':       { main: 'color-string.js', defaultExtension: 'js'},
    'color-name':                 { main: 'index.js', defaultExtension: 'js'},
    'color-convert':              { main: 'index.js', defaultExtension: 'js'}
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  var materialPackages = [
    'button',
    'tutton-toggle',
    'card',
    'checkbox',
    'core',
    'grid-list',
    'icon',
    'icon-registry',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'slider',
    'tabs',
    'toolbar',
    'tooltip'
  ]

  var vaadinPackages = [
    'angular2-polymer'
  ]
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  function packMaterial(pkgName) {
    packages['@angular2-material/'+pkgName] = { main: pkgName + '.umd.js' };
  }

  function packVaadin(pkgName) {
    packages['@vaadin/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  materialPackages.forEach(packMaterial);
  vaadinPackages.forEach(packVaadin);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
