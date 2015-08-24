var bowerPath;

bowerPath = '../../bower_components/';

require.config({
  paths: {
    angular: bowerPath + 'angular/angular',
    angularUIRouter: bowerPath + 'angular-ui-router/release/angular-ui-router',
    jquery: bowerPath + 'jquery/dist/jquery'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularUIRouter: ['angular']
  },
  deps: ['bootstrap'],
  urlArgs: 'time=' + (new Date()).getTime()
});
