var bowerPath;

bowerPath = '../../bower_components/';

require.config({
  paths: {
    angular: bowerPath + 'angular/angular',
    angularUIRouter: bowerPath + 'angular-ui-router/release/angular-ui-router',
    jquery: bowerPath + 'jquery/dist/jquery',
    uiBootstrap: bowerPath + 'angular-bootstrap/ui-bootstrap.min'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularUIRouter: ['angular'],
    uiBootstrap: ['angular']
  },
  deps: ['bootstrap'],
  urlArgs: 'time=' + (new Date()).getTime()
});
