/* 
* @Author: sg
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   gb
* @Last Modified time: 2014-08-28 10:36:00
* @Email: gerwin.brunner@vilango.com 
*/
Package.describe({
  summary: "Handsontable 0.11.0-beta3 for meteor",
  version: "0.11.0-beta3-a",
  name: "gbrunner:handsontable",
  git: "https://github.com/Vilango/meteor-handsontable.git"
});
Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');
	api.use(['jquery'], 'client');
	api.addFiles(['libs/jquery.handsontable.full.js','libs/jquery.handsontable.full.css'], 'client');
	api.export("Handsontable");
});