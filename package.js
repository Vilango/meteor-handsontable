/* 
* @Author: sg
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   gb
* @Last Modified time: 2014-08-28 10:36:00
* @Email: gerwin.brunner@vilango.com 
*/
Package.describe({
  summary: "Handsontable 0.11.0-beta3 for meteor",
  version: "0.11.0-beta4-i",
  name: "gbrunner:handsontable",
  git: "https://github.com/Vilango/meteor-handsontable.git"
});
Package.on_use(function (api, where) {
  //api.versionsFrom('METEOR@0.9.0.1');
  //api.versionsFrom('METEOR@0.9.1');
	//api.use(['jquery'], 'client');
  api.use('jquery@1.0.0', ['client']);

	api.add_files(['libs/jquery.handsontable.full.js','libs/jquery.handsontable.full.css'], 'client');
	api.export("Handsontable");
});