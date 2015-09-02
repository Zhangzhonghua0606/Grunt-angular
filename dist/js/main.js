var bowerPath;

bowerPath = '../../bower_components/';

require.config({
  paths: {
    angular: bowerPath + 'angular/angular',
    angularUIRouter: bowerPath + 'angular-ui-router/release/angular-ui-router',
    angularAnimate: bowerPath + 'angular-animate/angular-animate',
    jquery: bowerPath + 'jquery/dist/jquery',
    uiBootstrap: bowerPath + 'angular-bootstrap/ui-bootstrap.min'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularUIRouter: ['angular'],
    angularAnimate: ['angular'],
    uiBootstrap: ['angular']
  },
  deps: ['bootstrap'],
  urlArgs: 'time=' + (new Date()).getTime()
});
