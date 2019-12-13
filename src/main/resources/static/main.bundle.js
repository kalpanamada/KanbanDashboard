webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    width: 9rem;\r\n}\r\n.card-body,.panel-default{\r\n    padding: 5px;\r\n}\r\n.yellowgreen{\r\n    background-color: yellowgreen !important;\r\n}\r\n.skyblue{\r\n    background-color: skyblue !important;\r\n}\r\n.tan{\r\n    background-color: tan !important;\r\n}\r\n.darkkhaki{\r\n    background-color: darkkhaki !important;\r\n}\r\n\r\ntable.table-bordered{\r\n    border:1px solid #48BF94;\r\n    margin-top:20px;\r\n  }\r\ntable.table-bordered > thead > tr > th{\r\n    border:1px solid #48BF94;\r\n}\r\ntable.table-bordered > tbody >tr > th {\r\n    border:1px solid #48BF94;\r\n}\r\ntable.table-bordered > tbody >tr > td {\r\n    border:1px solid #48BF94;\r\n}\r\n\r\n.freezeBtn{\r\n    margin-top:10px;\r\n    font-size: 14px;\r\n    font-weight: 900;\r\n}\r\n\r\n.recently-closed{\r\n    font-weight:bold;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n  \r\n  .demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n\r\n\r\n\r\n  .mat-tab-label {\r\n   \r\n    padding: 5px;\r\n    background-color: transparent;\r\n  /*  color: #4D1B89; */\r\n    font-weight: 700;\r\n}\r\n\r\n/* Styles for the active tab label */\r\n.mat-tab-label.mat-tab-label-active {\r\n    \r\n    padding: 5px;\r\n    background-color: transparent;\r\n    color: #2A3185;\r\n    font-weight: 700;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n    border: none;\r\n}\r\n\r\n.navTabs{\r\n    color: black;\r\n    border-radius: 5px;\r\n    padding: 15px;\r\n}\r\n.nav-link.active{\r\n    background-color: 0275d8 !important;\r\n    border-radius: 0px !important;\r\n    color: white !important;\r\n}\r\n.nav-item{\r\n    padding: 0px !important;\r\n}\r\nbody{\r\n    background-color: white !important;\r\n}\r\nli{\r\n    background-color: gainsboro;\r\n    font-weight: bold;\r\n}\r\n.pageTitle{\r\n    font-family: fantasy;\r\n    color: #0275d8;\r\n    font-size: 45px;\r\n}\r\n\r\n.table-fixed tbody {\r\n    height: 400px;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n  }\r\n  .table-fixed {\r\n    width: 100%;\r\n  }\r\n  .table-fixed thead, .table-fixed tbody, .table-fixed tr{\r\n    display: block;\r\n  }\r\n.uploadSuccess{\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: green;\r\n}\r\n.uploadError{\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: red;\r\n}\r\n.mappingTable{\r\n    margin-top: 5px;\r\n    width:600px;\r\n    text-align: center;\r\n}\r\n\r\n.tablePadding{\r\n    padding: 5px; \r\n    width: 270px;\r\n    background-color:#0275d8;\r\n    border-radius: 6px;\r\n}\r\n.mappingTableData{\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.mappingTable th{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class = \"row\">\n    <div class=\"col-sm-8\">\n      <h1 class=\"pageTitle\">Kanban Dashboard</h1>\n    </div>\n    <!-- Date Picker -->\n    <div class=\"col-sm-3\" style=\"margin-top: 10px\"> \n      <form #myForm=\"ngForm\" novalidate>\n        <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\n                        (dateChanged)=\"onDateChangedPlan($event)\" [selDate]=\"selDate\" required ></my-date-picker>\n      </form>\n    </div>\n  </div>\n  <!--  Tabs -->\n  <ul class=\"nav nav-pills row navTabs\">\n    <li class=\"nav-item col-sm-3\">\n      <a style=\"text-align: center;cursor: pointer\" class=\"nav-link active\" id=\"plan\" data-toggle=\"tab\" (click)=\"changeTab('plan')\" role=\"tab\">Plan</a>\n    </li>\n    <li class=\"nav-item col-sm-3\">\n      <a style=\"text-align: center;cursor: pointer\" class=\"nav-link\" id=\"actual\" data-toggle=\"tab\" (click)=\"changeTab('actual')\" role=\"tab\">Actual</a>\n    </li>\n    <li class=\"nav-item col-sm-3\" *ngIf=\"uploadDefectsTab\">\n      <a style=\"text-align: center;cursor: pointer\" class=\"nav-link\" id=\"upload\" data-toggle=\"tab\" (click)=\"uploadTab()\" role=\"tab\">Upload Defects</a>\n    </li>\n    <li class=\"nav-item col-sm-3\">\n      <a style=\"text-align: center;cursor: pointer\" class=\"nav-link\" id=\"updateCollection\" data-toggle=\"tab\" (click)=\"updateCollection()\" role=\"tab\">Update Collections</a>\n    </li>\n  </ul>\n\n  <div *ngIf=\"tableView\"> \n    <div class=\"row\">  \n      <!--Plan/Actual table start-->\n      <div class=\"col-sm-10\" *ngIf=\"showTable\"> \n        <table class=\"table table-fixed\" style=\"margin-top: 5px\">\n          <thead>\n            <tr>\n              <th style = \"width: 153px\" scope=\"col\">Defects</th>\n              <th style = \"width: 153px\" scope=\"col\">Analysis</th>\n              <th style = \"width: 153px\" scope=\"col\">Fixed</th>\n              <th style = \"width: 153px\" scope=\"col\">Retest</th>\n              <th style = \"width: 153px\" scope=\"col\">Deployment</th>\n              <th style = \"width: 153px\" scope=\"col\">Onhold</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td [dragula]='\"first-bag\"' [dragulaModel]='newDefects'>\n                <div *ngFor = \"let item of newDefects\" style=\"padding:5px;width:120px;\"> \n                      <div [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='PV'}\" style=\"border-radius: 5px;padding: 5px;\">\n                          <div>\n                            <div>\n                              <b>{{item.defectId}}</b>\n                              <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                              <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                              <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                            <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                          </div>\n                            <div>\n                              <span *ngIf=\"item.module=='' || item.module == null;else module\" class=\"badge badge-primary\">{{item.module}}</span>\n                              <ng-template #module>\n                                  <span  class=\"badge badge-primary\">{{item.module.substring(0, 2)}}</span>\n                              </ng-template>\n                              <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                              <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                              <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                              <span *ngIf=\"item.workedBy=='' || item.workedBy == null;else workedBy\" class=\"badge badge-primary\">{{item.workedBy}}</span>\n                              <ng-template #workedBy>\n                                  <span  class=\"badge badge-primary\">{{item.workedBy.substring(0, 4)}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                    </div>\n                </div>\n              </td>\n              <td  [dragula]='\"first-bag\"' [dragulaModel]='analysis'>\n                <div *ngFor = \"let item of analysis\" style=\"padding:5px;width:120px\">\n                  <div [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='PV'}\" style=\"border-radius: 5px;padding: 5px;\">\n                    <div>\n                      <div>\n                          <b>{{item.defectId}}</b>\n                          <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                    </div>\n                      <div>\n                        <span *ngIf=\"item.module=='' || item.module == null;else module\" class=\"badge badge-primary\">{{item.module}}</span>\n                        <ng-template #module>\n                          <span  class=\"badge badge-primary\">{{item.module.substring(0, 2)}}</span>\n                        </ng-template>\n                        <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                        <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                        <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                        <span *ngIf=\"item.workedBy=='' || item.workedBy == null;else workedBy\" class=\"badge badge-primary\">{{item.workedBy}}</span>\n                        <ng-template #workedBy>\n                          <span  class=\"badge badge-primary\">{{item.workedBy.substring(0, 4)}}</span>\n                        </ng-template>\n                      </div>\n                    </div>\n              </div>\n                </div>\n              </td>\n              <td  [dragula]='\"first-bag\"' [dragulaModel]='fixed'>\n                <div *ngFor = \"let item of fixed\" style=\"padding:5px;width: 120px;\">\n                  <div [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='PV'}\" style=\"border-radius: 5px;padding: 5px;\">\n                    <div>\n                      <div>\n                          <b>{{item.defectId}}</b>\n                          <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                    </div>\n                      <div>\n                        <span *ngIf=\"item.module=='' || item.module == null;else module\" class=\"badge badge-primary\">{{item.module}}</span>\n                        <ng-template #module>\n                          <span  class=\"badge badge-primary\">{{item.module.substring(0, 2)}}</span>\n                        </ng-template>\n                        <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                        <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                        <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                        <span *ngIf=\"item.workedBy=='' || item.workedBy == null;else workedBy\" class=\"badge badge-primary\">{{item.workedBy}}</span>\n                        <ng-template #workedBy>\n                          <span  class=\"badge badge-primary\">{{item.workedBy.substring(0, 4)}}</span>\n                        </ng-template>\n                      </div>\n                    </div>\n              </div>\n                </div>\n              </td>\n              <td  [dragula]='\"first-bag\"' [dragulaModel]='retest'>\n                <div *ngFor = \"let item of retest\" style=\"padding:5px;width:120px;\">\n                  <div [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='PV'}\" style=\"border-radius: 5px;padding: 5px;\">\n                    <div>\n                      <div>\n                          <b>{{item.defectId}}</b>\n                          <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                    </div>\n                      <div>\n                        <span *ngIf=\"item.module=='' || item.module == null;else module\" class=\"badge badge-primary\">{{item.module}}</span>\n                        <ng-template #module>\n                          <span  class=\"badge badge-primary\">{{item.module.substring(0, 2)}}</span>\n                        </ng-template>\n                        <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                        <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                        <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                        <span *ngIf=\"item.workedBy=='' || item.workedBy == null;else workedBy\" class=\"badge badge-primary\">{{item.workedBy}}</span>\n                        <ng-template #workedBy>\n                          <span  class=\"badge badge-primary\">{{item.workedBy.substring(0, 4)}}</span>\n                        </ng-template>\n                      </div>\n                    </div>\n              </div>\n                </div>\n              </td>\n              <td  [dragula]='\"first-bag\"' [dragulaModel]='deployment'>\n                <div *ngFor = \"let item of deployment\"  style=\"padding:5px;width: 120px\">\n                  <div [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='PV'}\" style=\"border-radius: 5px;padding: 5px;\">\n                    <div>\n                      <div>\n                          <b>{{item.defectId}}</b>\n                          <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                    </div> \n                      <div>\n                        <span *ngIf=\"item.module=='' || item.module == null;else module\" class=\"badge badge-primary\">{{item.module}}</span>\n                        <ng-template #module>\n                          <span  class=\"badge badge-primary\">{{item.module.substring(0, 2)}}</span>\n                        </ng-template>\n                        <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                        <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                        <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                        <span *ngIf=\"item.workedBy=='' || item.workedBy == null;else workedBy\" class=\"badge badge-primary\">{{item.workedBy}}</span>\n                        <ng-template #workedBy>\n                          <span  class=\"badge badge-primary\">{{item.workedBy.substring(0, 4)}}</span>\n                        </ng-template>\n                      </div>\n                    </div>\n              </div>\n                </div>\n              </td>\n              <td  [dragula]='\"first-bag\"' [dragulaModel]='onhold'>\n                <div *ngFor = \"let item of onhold\"  style=\"padding:5px;width: 120px\">\n                  <div [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='PV'}\" style=\"border-radius: 5px;padding: 5px;\">\n                    <div>\n                      <div>\n                          <b>{{item.defectId}}</b>\n                          <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                          <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                    </div>\n                      <div>\n                        <span *ngIf=\"item.module=='' || item.module == null;else module\" class=\"badge badge-primary\">{{item.module}}</span>\n                        <ng-template #module>\n                          <span  class=\"badge badge-primary\">{{item.module.substring(0, 2)}}</span>\n                        </ng-template>\n                        <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                        <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                        <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                        <span *ngIf=\"item.workedBy=='' || item.workedBy == null;else workedBy\" class=\"badge badge-primary\">{{item.workedBy}}</span>\n                        <ng-template #workedBy>\n                          <span  class=\"badge badge-primary\">{{item.workedBy.substring(0, 4)}}</span>\n                        </ng-template>\n                      </div>\n                    </div>\n              </div>\n                </div>\n              </td>     \n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-sm-10\" *ngIf = \"!showTable\">\n        <h1>No Data Available</h1>\n      </div>\n      <!--Plan/Actual table end-->\n      <div class=\"col-sm-2\">\n        <div>\n            <button type=\"button\" *ngIf=\"(tabSelected=='plan' || tabSelected == '') && freeze == true\" class=\"btn btn-primary freezeBtn\" (click)=\"freezePlan()\">Freeze plan</button>\n        </div>\n        <div>\n            <button type=\"button\" *ngIf=\"(tabSelected=='plan' || tabSelected == '') && freeze == false\" class=\"btn btn-primary freezeBtn\" data-toggle=\"modal\" data-target=\"#Warning\">Unfreeze plan</button>\n        </div>\n        <!-- AQI table -->\n        <div class=\"row\" > \n          <table class=\"table table-bordered table-success\" style=\"line-height: 6px;\">\n            <thead>\n              <tr>\n                <th colspan=\"3\" style=\"text-align: center; font-size: 14px;\">AQI</th>\n              </tr>\n              <tr>\n                <th colspan=\"3\" style=\"text-align: center;font-size: 14px;\">{{AQIData.AQI}}</th>\n              </tr>\n            </thead>\n            <tbody style =\"font-size: 14px;\">\n              <tr>\n                <th>S1</th>\n                <th>S2</th>\n                <th>S3</th>\n              </tr>\n              <tr>\n                <td>\n                  <a *ngIf=\"AQIData.severity1>0;else zeroDefect\" data-toggle=\"modal\" data-target=\"#defectListModal\" href=\"#\" (click)=\"loadTable('AQI','Severity 1')\">{{AQIData.severity1}}</a>\n                  <ng-template #zeroDefect>\n                    <span>0</span>\n                  </ng-template>\n                </td>\n                <td>\n                  <a *ngIf=\"AQIData.severity2>0;else zeroDefect\" data-toggle=\"modal\" data-target=\"#defectListModal\" href=\"#\" (click)=\"loadTable('AQI','Severity 2')\">{{AQIData.severity2}}</a>\n                </td>\n                <td>\n                  <a *ngIf=\"AQIData.severity3>0;else zeroDefect\" data-toggle=\"modal\" data-target=\"#defectListModal\" href=\"#\" (click)=\"loadTable('AQI','Severity 3')\">{{AQIData.severity3}}</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <!-- Recently closed defects table -->\n        <div class=\"row\" > \n          <table class=\"table table-bordered table-info\" style=\"line-height: 12px;\">\n            <thead>\n              <tr>\n                <th colspan=\"3\" style=\"text-align: center; font-size: 14px;\">Recently Closed/Cancelled</th>\n              </tr>\n            </thead>\n            <tbody style =\"font-size: 14px;\">\n              <tr>\n                <td>\n                  <div class=\"recently-closed\"> Select Week # </div><!--   strat from here  -->\n                    <label class=\"form-check-label\">\n                        <input type=\"radio\" class=\"form-check-input\" name=\"week\"  (click)=\"radioButtonClick(1)\" checked>\n                        1\n                    </label>\n                    <label class=\"form-check-label\">\n                        <input type=\"radio\" class=\"form-check-input\" name=\"week\" (click)=\"radioButtonClick(2)\">\n                        2\n                    </label>\n                    <label class=\"form-check-label\">\n                        <input type=\"radio\" class=\"form-check-input\" name=\"week\" (click)=\"radioButtonClick(3)\">\n                      3\n                    </label>\n                    <label class=\"form-check-label\">\n                        <input type=\"radio\" class=\"form-check-input\" name=\"week\" (click)=\"radioButtonClick(4)\">\n                        4\n                    </label>\n                </td>\n                <td>\n                    <a data-toggle=\"modal\" (click)=\"loadTable('Closed',daysString)\" href=\"#\" data-target=\"#defectListModal\">{{defectsCount}}</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <!-- Release defects table -->\n        <div class=\"row\" > \n          <table class=\"table table-bordered table-success\" style=\"line-height: 6px;\">\n            <thead>\n              <tr>\n                <th  style=\"text-align: center; font-size: 14px;\">Release Date</th>\n                <th style=\"text-align: center;font-size: 14px;\">Count</th>\n              </tr>\n            </thead>\n            <tbody style =\"font-size: 14px;\">\n              <tr >\n                <td> \n                  {{releaseListDefects.date}}\n                </td>\n                <td>\n                  <a data-toggle=\"modal\" (click)=\"loadTable('Release',releaseListDefects.date)\" href=\"#\" data-target=\"#defectListModal\"> {{releaseListDefects.count}}</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Upload tab view -->\n  <div *ngIf=\"uploadTabView\" style=\"margin-top:20px;\">\n    <h2>Select file to upload Defects/Template</h2>\n    <div class=\"form-group row\">\n      <div class=\"col-3\" style=\"margin:20px;\">\n        <select class=\"form-control\" id=\"exampleSelect1\" name=\"dropdownValue\" [(ngModel)]=\"dropdownValue\" (change)=\"uploadDropdownChange()\">\n            <option>Select</option>\n            <option *ngFor=\"let template of templates\">{{template}}</option>\n        </select>\n      </div>\n      <div style=\"margin: 20px\">\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#createTemplate\">create new template</button>\n      </div>\n    </div>\n    <div *ngIf = \"dropdownValue!='Select'\">\n      <div style=\"margin: 20px\">\n        <input type=\"file\" (change)=\"selectFile($event)\" class=\"File\" name=\"uploadedFile\">\n      </div>\n      <div style=\"margin: 20px\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"uploadDefects()\">upload</button>\n      </div>\n    </div>\n    <div *ngIf=\"upload\" class=\"uploadSuccess\">\n      Uploaded successfully.\n    </div>\n    <div *ngIf=\"upload\" class=\"uploadError\">\n        Some error occured , Please try again later.\n    </div>\n    <div  style =\"align-items: center\" *ngIf=\"showMappingTable\">\n      <table class=\"table mappingTable\">\n        <thead style=\"font-size: 20px;\">\n          <tr>\n            <th scope=\"col\">Reference Columns</th>\n            <th scope=\"col\">-</th>\n            <th scope=\"col\">Uploaded columns</th>\n          </tr>\n        </thead>\n        <tbody class=\"mappingTableData\">\n          <tr>\n            <td>\n              <div style=\"padding: 5px;\" *ngFor=\"let column of referenceTemplateColumns\">\n                <div class=\"tablePadding\">\n                  {{column.columnName}}\n                </div>\n              </div>\n            </td>\n            <td style=\"width:160px;background-color: white;\">\n              <div style=\"padding: 5px;\" *ngFor=\"let column of referenceTemplateColumns\">\n                <div style=\"padding: 5px;\">\n                  -\n                </div>\n              </div>\n            </td>\n            <td [dragula]='\"second-bag\"' [dragulaModel]='uploadedTemplateColumns'>\n              <div style=\"padding: 5px;\" *ngFor=\"let columns of uploadedTemplateColumns\">\n                <div class=\"tablePadding\">\n                  {{columns.headerName}}\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div style=\"margin: 20px\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"uploadMappedColumns()\">submit</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Update Collection tab view-->\n  <div *ngIf=\"updateCollectionTabView\" style=\"margin-top:20px;\">\n    <div style=\"margin: 20px\">\n      <h2> Select collection to modify </h2>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-3\" style=\"margin:20px;\">\n        <select class=\"form-control\" id=\"exampleSelect1\" name=\"dropdownValue\" [(ngModel)]=\"dropdownValue\" (change)=\"dropdownChange()\">\n            <option>Select</option>\n            <option>Users</option>\n            <option>Modules</option>\n            <option>Release Dates</option>\n        </select>\n      </div>\n    </div>\n    <table class=\"table\">\n        <thead>\n          <tr>\n            <th *ngFor=\"let key of tableKeys\">{{key}}</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of tableValues\" >\n            <td *ngFor=\"let heads of tableKeys\">{{data[heads]}}</td>\n            <td><a href=\"\" data-toggle=\"modal\" href=\"#\" data-target=\"#editRowModal\" (click)=\"modifyRow(data)\"><i class=\"fa fa-pencil\"></i></a></td>\n            <td><a href=\"\" data-toggle=\"modal\" href=\"#\" data-target=\"#deleteRowModal\" (click)=\"modifyRow(data)\"><i class=\"fa fa-trash-o\"></i></a></td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n\n  <!-- Edit Defect Details Modal -->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{clickedDefect.defectId}}</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div>{{clickedDefect.description}}</div>\n            <form #editForm=\"ngForm\">\n              <div class=\"form-group row\">\n                <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">Module</label>\n                <div class=\"col-10\">\n                  <select class=\"form-control\" id=\"exampleSelect1\" name=\"module\" [(ngModel)]=\"clickedDefect.module\">\n                    <option *ngFor = \"let item of modulesList\">{{item.module}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">Severity</label>\n                <div class=\"col-10\">\n                  <select class=\"form-control\" id=\"exampleSelect1\" name=\"severity\" [(ngModel)]=\"clickedDefect.severity\">\n                      <option>Severity 1</option>\n                      <option>Severity 2</option>\n                      <option>Severity 3</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">Worked By</label>\n                <div class=\"col-10\">\n                  <select class=\"form-control\" id=\"exampleSelect1\" name=\"workedBy\" [(ngModel)]=\"clickedDefect.workedBy\">\n                    <option>{{clickedDefect.workedBy}}</option>\n                    <option *ngFor = \"let item of userList\">{{item}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">ETA</label>\n                <div class=\"col-10\">\n                  <select class=\"form-control\" id=\"exampleSelect1\" name=\"eta\" [(ngModel)]=\"clickedDefect.eta\">\n                    <option>N/A</option>\n                    <option *ngFor = \"let item of releaseList\">{{item}}</option>\n                  </select>\n                </div>\n              </div>\n                <div class=\"form-group row\">\n                  <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">Progress</label>\n                  <div class=\"col-10\">\n                    <select class=\"form-control\" id=\"exampleSelect1\" name=\"progress\" [(ngModel)]=\"clickedDefect.progress\">\n                      <option>Not started</option>\n                      <option>In progress</option>\n                      <option>Completed</option>                   \n                    </select>\n                  </div>\n                </div>\n              <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">Complexity</label>\n                <div class=\"col-10\">\n                  <input class=\"form-control\" type=\"text\" id=\"example-text-input\" name=\"complexity\" [(ngModel)]=\"clickedDefect.complexity\">\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"update(editForm.value)\">update</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  <!--  Defect Table Modal -->\n    <div class=\"modal fade\" id=\"defectListModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 95%\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-weight: bolder\">{{selectedTable}}Defects</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n          </div>\n          <div class=\"modal-body\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>DefectId</th>\n                  <th>Summary</th>                        \n                  <th>Module</th>                        \n                  <th>Severity</th>\n                  <th>Defect type</th>\n                  <th>Phase found in</th>\n                  <th>Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of tableData\">\n                  <td>{{data.DefectId}}</td>\n                  <td>{{data.Summary}}</td>\n                  <td>{{data['Application Found In SubTeam']}}</td>\n                  <td>{{data.Severity}}</td>\n                  <td>{{data['Defect Type']}}</td>\n                  <td>{{data['Phase Found In']}}</td>\n                  <td>{{data.Status}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n     <!-- Warning modal unfreeze plan-->\n    <div class=\"modal fade\" id=\"Warning\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 500px\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-weight: bolder\">Warning</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n          </div>\n          <div class=\"modal-body\">\n              <div>\n                On clicking Ok your actual becomes your plan\n              </div>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"unFreezePlan()\">Ok</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Edit collection modal -->\n    <div class=\"modal fade\" id=\"editRowModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 500px\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-weight: bolder\">Update Collection</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n          </div>\n          <div class=\"modal-body\">\n            <table class=\"table borderless\">\n              <tbody>\n                <tr *ngFor=\"let heads of tableKeys\">\n                  <th scope=\"row\">{{heads}}</th>\n                  <td><input type=\"text\"[(ngModel)]=\"selectedTableRow[heads]\"></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"editCollectionDetails()\">Update</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Delete collection modal -->\n    <div class=\"modal fade\" id=\"deleteRowModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 500px\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-weight: bolder\">Delete Collection</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n          </div>\n          <div class=\"modal-body\">\n            <div>\n              <h4>Are you sure,you want to delete this record</h4>\n            </div>\n            <table class=\"table borderless\">\n              <tbody>\n                <tr *ngFor=\"let heads of tableKeys\">\n                  <th scope=\"row\">{{heads}}</th>\n                  <td>-</td>\n                  <td>{{selectedTableRow[heads]}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteRow()\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- create template -->\n    <div class=\"modal fade\" id=\"createTemplate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 500px\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-weight: bolder\">Create new template</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n          </div>\n          <div class=\"modal-body\">\n              <div>\n               Template name:\n               <input type=\"text\" [(ngModel)]=\"templateName\">\n               <input type=\"file\" (change)=\"selectFile($event)\" class=\"File\" name=\"uploadedFile\">\n              </div>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"uploadTemplate()\">Upload Template</button>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defectlist_service__ = __webpack_require__("../../../../../src/app/defectlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(defectListService, dragulaService, http, cookieService) {
        var _this = this;
        this.defectListService = defectListService;
        this.dragulaService = dragulaService;
        this.http = http;
        this.cookieService = cookieService;
        this.newDefects = [];
        this.analysis = [];
        this.fixed = [];
        this.retest = [];
        this.deployment = [];
        this.onhold = [];
        this.formattedDate = "";
        this.clickedDefect = {};
        this.modulesList = [];
        this.selDate = { year: 0, month: 0, day: 0 };
        this.userList = [];
        this.releaseList = [];
        this.tabSelected = "";
        this.AQIData = {};
        this.showTable = true;
        this.tableData = [];
        this.selectedTable = "";
        this.releaseListDefects = [];
        this.freeze = true;
        this.uploadTabView = false;
        this.uploadDefectsTab = true;
        this.updateCollectionTabView = false;
        this.dropdownValue = "Select";
        this.tableView = true;
        this.tableValues = [];
        this.tableKeys = [];
        this.selectedTableRow = {};
        this.fileList = null;
        this.unfreezeClicked = false;
        this.templates = [];
        this.templateName = '';
        this.uploadedTemplateColumns = [];
        this.referenceTemplateColumns = [];
        this.mappedColumns = [];
        this.upload = null;
        this.showMappingTable = null;
        this.todayDate = new Date();
        var d = new Date();
        this.selDate = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.tabSelected = "plan";
        this.dragulaService.drop.subscribe(function (value) {
            for (var i = 0; i < _this.analysis.length; i++) {
                if (_this.analysis[i].status != "Analysis") {
                    _this.analysis[i].status = "Analysis";
                    _this.analysis[i].progress = "Not started";
                    if (_this.tabSelected == "actual") {
                        _this.updateActual(_this.analysis[i]);
                    }
                    break;
                }
            }
            for (var i = 0; i < _this.fixed.length; i++) {
                if (_this.fixed[i].status != "Fixed") {
                    _this.fixed[i].status = "Fixed";
                    _this.fixed[i].progress = "Not started";
                    if (_this.tabSelected == "actual") {
                        _this.updateActual(_this.fixed[i]);
                    }
                    break;
                }
            }
            for (var i = 0; i < _this.retest.length; i++) {
                if (_this.retest[i].status != "Retest") {
                    _this.retest[i].status = "Retest";
                    _this.retest[i].progress = "Not started";
                    if (_this.tabSelected == "actual") {
                        _this.updateActual(_this.retest[i]);
                    }
                    break;
                }
            }
            for (var i = 0; i < _this.deployment.length; i++) {
                if (_this.deployment[i].status != "Deployment") {
                    _this.deployment[i].status = "Deployment";
                    _this.deployment[i].progress = "Not started";
                    if (_this.tabSelected == "actual") {
                        _this.updateActual(_this.deployment[i]);
                    }
                    break;
                }
            }
            for (var i = 0; i < _this.onhold.length; i++) {
                if (_this.onhold[i].status != "Onhold") {
                    _this.onhold[i].status = "Onhold";
                    _this.onhold[i].progress = "Not started";
                    if (_this.tabSelected == "actual") {
                        _this.updateActual(_this.onhold[i]);
                    }
                    break;
                }
            }
            for (var i = 0; i < _this.newDefects.length; i++) {
                if (_this.newDefects[i].status != "") {
                    _this.newDefects[i].status = "";
                    _this.newDefects[i].progress = "Not started";
                    if (_this.tabSelected == "actual") {
                        _this.updateActual(_this.newDefects[i]);
                    }
                    break;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.dateFormatter(this.selDate);
        this.loadData();
        this.getUsersList();
        this.getModulesList();
        this.getReleaseList();
        this.getAQIData();
        this.radioButtonClick(1);
        this.getReleaseDateAndDefects();
        /*if(this.cookieService.check('freeze') && this.cookieService.get('freeze')=='true'){
          this.freeze = false;
        }
        else if(this.cookieService.check('freeze') && this.cookieService.get('freeze')=='false'){
          this.freeze = true;
        }*/
    };
    AppComponent.prototype.loadData = function () {
        if (this.tabSelected == "plan" || this.tabSelected == "") {
            this.getDefectListPlan(this.formattedDate);
        }
        else {
            this.getDefectListActual(this.formattedDate);
        }
    };
    AppComponent.prototype.onDateChangedPlan = function (event) {
        var currentDate = this.todayDate.getDate();
        var currentMonth = this.todayDate.getMonth() + 1;
        var currentYear = this.todayDate.getFullYear();
        if (currentDate != event.date.day || currentMonth != event.date.month || currentYear != event.date.year) {
            this.freeze = null;
            this.uploadDefectsTab = false;
        }
        else {
            this.uploadDefectsTab = true;
            // write code to display freeze or unfreeze based on api responce
        }
        this.dateFormatter(event.date);
        this.loadData();
        document.getElementById('plan').classList.add("active");
        document.getElementById('actual').classList.remove("active");
        document.getElementById('upload').classList.remove("active");
        document.getElementById('updateCollection').classList.remove("active");
        this.tabSelected = 'plan';
        this.uploadTabView = false;
        this.updateCollectionTabView = false;
        this.tableView = true;
    };
    AppComponent.prototype.changeTab = function (tab) {
        this.uploadTabView = false;
        this.updateCollectionTabView = false;
        this.tableView = true;
        if (tab == "plan") {
            this.tabSelected = "plan";
        }
        else {
            this.tabSelected = "actual";
        }
        this.loadData();
    };
    AppComponent.prototype.getDefectListPlan = function (date) {
        var _this = this;
        var data;
        this.defectListService.getDefectListPlan(this.formattedDate)
            .finally(function () {
            if (_this.analysis.length <= 0 && _this.fixed.length <= 0 && _this.retest.length <= 0 && _this.deployment.length <= 0 && _this.onhold.length <= 0 && _this.newDefects.length <= 0) {
                _this.showTable = false;
            }
            else {
                _this.showTable = true;
            }
        })
            .subscribe(function (res) { return data = res; }, function (err) {
            _this.analysis = [];
            _this.deployment = [];
            _this.fixed = [];
            _this.newDefects = [];
            _this.retest = [];
            _this.onhold = [];
        }, function () {
            _this.analysis = [];
            _this.deployment = [];
            _this.fixed = [];
            _this.newDefects = [];
            _this.retest = [];
            _this.onhold = [];
            _this.version = data.version;
            // if(this.tabSelected == "plan" || this.tabSelected == ""){
            for (var i = 0; i < data.plan.length; i++) {
                if (data.plan[i].status == "Analysis") {
                    _this.analysis.push(data.plan[i]);
                }
                else if (data.plan[i].status == "Fixed") {
                    _this.fixed.push(data.plan[i]);
                }
                else if (data.plan[i].status == "Retest") {
                    _this.retest.push(data.plan[i]);
                }
                else if (data.plan[i].status == "Deployment") {
                    _this.deployment.push(data.plan[i]);
                }
                else if (data.plan[i].status == "Onhold") {
                    _this.onhold.push(data.plan[i]);
                }
                else {
                    _this.newDefects.push(data.plan[i]);
                }
            }
            // }
            /*   else{
                 for(let i=0;i<data.actual.length;i++){
                   if(data.actual[i].status=="Analysis"){
                       this.analysis.push(data.actual[i]);
                   }
                   else if(data.actual[i].status=="Fixed"){
                       this.fixed.push(data.actual[i]);
                   }
                   else if(data.actual[i].status=="Retest"){
                       this.retest.push(data.actual[i]);
                   }
                   else if(data.actual[i].status=="Deployment"){
                       this.deployment.push(data.actual[i]);
                   }
                   else if(data.actual[i].status=="Onhold"){
                       this.onhold.push(data.actual[i]);
                   }
                   else{
                       this.newDefects.push(data.actual[i]);
                   }
                 }
               } */
        });
    };
    AppComponent.prototype.updateActual = function (defect) {
        var data;
        var actual = [];
        actual.push(defect);
        var request = {
            date: this.formattedDate,
            actual: actual,
            version: this.version
        };
        this.defectListService.updateActual(request).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
        });
        console.log(data);
    };
    AppComponent.prototype.getUsersList = function () {
        var _this = this;
        var data;
        this.defectListService.getUsersList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            for (var i = 0; i < data.length; i++) {
                _this.userList.push(data[i].name);
            }
        });
    };
    AppComponent.prototype.getModulesList = function () {
        var _this = this;
        var data;
        this.defectListService.getModuleList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            for (var i = 0; i < data.length; i++) {
                var obj = {};
                obj.module = data[i].module;
                obj.alias = data[i].alias;
                _this.modulesList.push(obj);
            }
        });
    };
    AppComponent.prototype.getReleaseList = function () {
        var _this = this;
        var data;
        this.defectListService.getReleaseList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            for (var i = 0; i < data.length; i++) {
                _this.releaseList.push(data[i].key);
            }
        });
    };
    AppComponent.prototype.getReleaseDateAndDefects = function () {
        var _this = this;
        var data;
        this.defectListService.getReleaseListDefects().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.releaseListDefects = data;
        });
    };
    AppComponent.prototype.getAQIData = function () {
        var _this = this;
        var data;
        this.defectListService.getAQIData().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.AQIData = data;
        });
    };
    AppComponent.prototype.dateFormatter = function (date) {
        var day = date.day;
        var month = date.month;
        if (date.day < 10) {
            day = "0" + date.day;
        }
        if (date.month < 10) {
            month = "0" + date.month;
        }
        this.formattedDate = month + "-" + day + "-" + date.year;
    };
    AppComponent.prototype.edit = function (defectObj) {
        this.clickedDefect = defectObj;
    };
    AppComponent.prototype.update = function (values) {
        if (this.clickedDefect.status == "Analysis") {
            this.updateArray(this.analysis, values);
        }
        else if (this.clickedDefect.status == "Fixed") {
            this.updateArray(this.fixed, values);
        }
        else if (this.clickedDefect.status == "Retest") {
            this.updateArray(this.retest, values);
        }
        else if (this.clickedDefect.status == "Deployment") {
            this.updateArray(this.deployment, values);
        }
        else if (this.clickedDefect.status == "Onhold") {
            this.updateArray(this.onhold, values);
        }
        else {
            this.updateArray(this.newDefects, values);
        }
    };
    AppComponent.prototype.updateArray = function (array, values) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].defectId == this.clickedDefect.defectId) {
                array[i].module = values.module;
                array[i].severity = values.severity;
                array[i].workedBy = values.workedBy;
                array[i].eta = values.eta;
                array[i].progress = values.progress;
                array[i].complexity = values.complexity;
                if (this.tabSelected == "actual") {
                    this.updateActual(array[i]);
                }
            }
        }
    };
    AppComponent.prototype.freezePlan = function () {
        var _this = this;
        this.freeze = false;
        var plan = [];
        plan = Array.prototype.concat(this.newDefects, this.analysis, this.fixed, this.retest, this.deployment, this.onhold);
        var request = {
            date: this.formattedDate,
            plan: plan,
            actual: plan,
            version: this.version
        };
        var data;
        this.defectListService.insertPlanMapping(request).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            if (data == "sucess") {
                _this.cookieService.set('freeze', 'true');
            }
        });
    };
    AppComponent.prototype.loadTable = function (table, tableValue) {
        var _this = this;
        if (table == "AQI") {
            this.selectedTable = "AQI ";
        }
        else if (table == "Closed") {
            this.selectedTable = "Recently Closed/Cancelled ";
        }
        else if (table == "Release") {
            this.selectedTable = "Release ";
        }
        var data;
        var request = {
            query: table,
            value: tableValue
        };
        this.defectListService.getDefectsTable(request).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.tableData = data;
        });
    };
    AppComponent.prototype.radioButtonClick = function (number) {
        var _this = this;
        this.days = number * 7;
        this.daysString = this.days.toString();
        var data;
        this.defectListService.getClosedDefectsData(this.days).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.defectsCount = data;
        });
    };
    AppComponent.prototype.unFreezePlan = function () {
        this.freeze = true;
        this.unfreezeClicked = true;
        this.getDefectListActual(this.formattedDate);
    };
    AppComponent.prototype.uploadTab = function () {
        var _this = this;
        var data;
        this.uploadTabView = true;
        this.updateCollectionTabView = false;
        this.tableView = false;
        this.dropdownValue = "Select";
        this.defectListService.getTemplates().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.templates = data;
        });
    };
    AppComponent.prototype.updateCollection = function () {
        this.updateCollectionTabView = true;
        this.uploadTabView = false;
        this.tableView = false;
        this.tableKeys = [];
        this.tableValues = [];
        this.dropdownValue = "Select";
    };
    AppComponent.prototype.selectFile = function (event) {
        this.fileList = event.target.files;
    };
    AppComponent.prototype.uploadTemplate = function () {
        var _this = this;
        var data;
        if (this.fileList.length > 0) {
            var file = this.fileList[0];
            var formData = new FormData();
            formData.append('uploadedFile', file, file.name);
            this.http.post('http://' + "localhost:8085/KanbanDashboard/manageTemplate/readTempHeader", formData, this.templateName)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error); })
                .subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
                _this.uploadedTemplateColumns = data;
                _this.getReferenceTempColumns();
                console.log(JSON.stringify(_this.uploadedTemplateColumns));
            });
        }
    };
    AppComponent.prototype.getDefectListActual = function (date) {
        var _this = this;
        var data;
        this.defectListService.getDefectListActual(this.formattedDate)
            .finally(function () {
            if (_this.analysis.length <= 0 && _this.fixed.length <= 0 && _this.retest.length <= 0 && _this.deployment.length <= 0 && _this.onhold.length <= 0 && _this.newDefects.length <= 0) {
                _this.showTable = false;
            }
            else {
                _this.showTable = true;
            }
        })
            .subscribe(function (res) { return data = res; }, function (err) {
            _this.analysis = [];
            _this.deployment = [];
            _this.fixed = [];
            _this.newDefects = [];
            _this.retest = [];
            _this.onhold = [];
        }, function () {
            _this.analysis = [];
            _this.deployment = [];
            _this.fixed = [];
            _this.newDefects = [];
            _this.retest = [];
            _this.onhold = [];
            _this.version = data.version;
            /* if(this.tabSelected == "plan" || this.tabSelected == ""){
              for(let i=0;i<data.plan.length;i++){
                if(data.plan[i].status=="Analysis"){
                    this.analysis.push(data.plan[i]);
                }
                else if(data.plan[i].status=="Fixed"){
                    this.fixed.push(data.plan[i]);
                }
                else if(data.plan[i].status=="Retest"){
                    this.retest.push(data.plan[i]);
                }
                else if(data.plan[i].status=="Deployment"){
                    this.deployment.push(data.plan[i]);
                }
                else if(data.plan[i].status=="Onhold"){
                    this.onhold.push(data.plan[i]);
                }
                else{
                    this.newDefects.push(data.plan[i]);
                }
              }
            } */
            // else{
            for (var i = 0; i < data.actual.length; i++) {
                if (data.actual[i].status == "Analysis") {
                    _this.analysis.push(data.actual[i]);
                }
                else if (data.actual[i].status == "Fixed") {
                    _this.fixed.push(data.actual[i]);
                }
                else if (data.actual[i].status == "Retest") {
                    _this.retest.push(data.actual[i]);
                }
                else if (data.actual[i].status == "Deployment") {
                    _this.deployment.push(data.actual[i]);
                }
                else if (data.actual[i].status == "Onhold") {
                    _this.onhold.push(data.actual[i]);
                }
                else {
                    _this.newDefects.push(data.actual[i]);
                }
            }
            if (_this.unfreezeClicked == true) {
                _this.cookieService.set('freeze', 'false');
            }
            //} 
        });
    };
    AppComponent.prototype.dropdownChange = function () {
        var _this = this;
        var data;
        console.log(this.dropdownValue);
        if (this.dropdownValue == "Users") {
            this.defectListService.getUsers().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
                _this.tableValues = data;
                _this.tableKeys = Object.keys(_this.tableValues[0]);
            });
        }
        else if (this.dropdownValue == "Modules") {
            this.defectListService.getModuleList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
                _this.tableValues = data;
                _this.tableKeys = Object.keys(_this.tableValues[0]);
            });
        }
        else if (this.dropdownValue == "Release Dates") {
            this.defectListService.getReleaseList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
                _this.tableValues = data;
                _this.tableKeys = Object.keys(_this.tableValues[0]);
            });
        }
    };
    AppComponent.prototype.modifyRow = function (data) {
        this.selectedTableRow = data;
    };
    AppComponent.prototype.editCollectionDetails = function () {
        var data;
        if (this.dropdownValue == "Users") {
            this.defectListService.editUser(this.selectedTableRow).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            });
        }
        else if (this.dropdownValue == "Modules") {
            this.defectListService.editModule(this.selectedTableRow).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            });
        }
        else if (this.dropdownValue == "Release Dates") {
            this.defectListService.editRelease(this.selectedTableRow).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            });
        }
    };
    AppComponent.prototype.deleteCollectionDetails = function () {
        var data;
        if (this.dropdownValue == "Users") {
            this.defectListService.deleteUser(this.selectedTableRow).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            });
        }
        else if (this.dropdownValue == "Modules") {
            this.defectListService.deleteModule(this.selectedTableRow).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            });
        }
        else if (this.dropdownValue == "Release Dates") {
            this.defectListService.deleteRelease(this.selectedTableRow).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            });
        }
    };
    AppComponent.prototype.getReferenceTempColumns = function () {
        var _this = this;
        var data;
        this.defectListService.getReferenceTempColumns().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.referenceTemplateColumns = data;
            console.log(JSON.stringify(_this.referenceTemplateColumns));
            _this.checkArraySize();
        });
    };
    AppComponent.prototype.checkArraySize = function () {
        if (this.referenceTemplateColumns.length > this.uploadedTemplateColumns.length) {
            for (var i = this.uploadedTemplateColumns.length; i < this.referenceTemplateColumns.length; i++) {
                this.uploadedTemplateColumns.push({ "headerName": "empty" });
            }
        }
        //this.uploadMappedColumns();
        this.showMappingTable = true;
    };
    AppComponent.prototype.uploadMappedColumns = function () {
        var _this = this;
        //console.log(JSON.stringify(this.uploadedTemplateColumns));
        for (var i = 0; i < this.uploadedTemplateColumns.length; i++) {
            if (this.uploadedTemplateColumns[i].headerName != "empty") {
                this.mappedColumns.push({ "referenceColumn": this.referenceTemplateColumns[i].columnName, "mappingColumn": this.uploadedTemplateColumns[i].headerName });
            }
        }
        console.log(JSON.stringify(this.mappedColumns));
        var data;
        var request = {
            templateName: this.templateName,
            mappingColumns: this.mappedColumns
        };
        this.defectListService.mappingFields(request).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.referenceTemplateColumns = data;
            console.log(JSON.stringify(_this.referenceTemplateColumns));
            _this.checkArraySize();
        });
    };
    AppComponent.prototype.uploadDefects = function () {
        var _this = this;
        if (this.fileList.length > 0) {
            var file = this.fileList[0];
            var formData = new FormData();
            formData.append('uploadedFile', file, file.name);
            formData.append('templateName', this.dropdownValue);
            this.http.post('http://' + "localhost:8085/KanbanDashboard/dumpIngestion/ingest", formData, this.dropdownValue)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error); })
                .subscribe(function (data) { return console.log('success'); }, function (error) {
                _this.upload = false;
            }, function () {
                _this.upload = true;
            });
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "inputEl", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__defectlist_service__["a" /* DefectlistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__defectlist_service__["a" /* DefectlistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plan_plan_component__ = __webpack_require__("../../../../../src/app/plan/plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__defectlist_service__ = __webpack_require__("../../../../../src/app/defectlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














/*const appRoutes: Routes = [
  { path: '',redirectTo:'plan',pathMatch:'full' },
  { path: 'status', component: StatusComponent },
  { path: 'plan', component: PlanComponent }
];*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__plan_plan_component__["a" /* PlanComponent */],
            __WEBPACK_IMPORTED_MODULE_6__status_status_component__["a" /* StatusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            //RouterModule.forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__defectlist_service__["a" /* DefectlistService */], __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__["a" /* CookieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/defectlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefectlistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefectlistService = (function () {
    function DefectlistService(http) {
        this.http = http;
    }
    DefectlistService.prototype.getDefectListPlan = function (request) {
        // let data=JSON.stringify(request);
        // let data = "11-07-2017";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/dashBoard/getBucketMappingPlanData", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.getDefectListActual = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/dashBoard/getBucketMappingData", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.insertPlanMapping = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/dashBoard/insertPlanMapping", request, options).map(function (res) { return res.text(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.text().error || 'Server error');
        });
    };
    DefectlistService.prototype.getUsersList = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/generic/getUsersList")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.getModuleList = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/generic/getModuleList")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.getReleaseList = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/generic/getReleaseList")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.getAQIData = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/generic/getAQI")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.getReleaseListDefects = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/generic/getReleaseDefects")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.updateActual = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/dashBoard/updateActualMapping", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.getDefectsTable = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/generic/getDefectDetails", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.getClosedDefectsData = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/generic/getClosedAndCancelledDefects", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.getUsers = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/manageCollection/getUsersList")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.editUser = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageCollection/editUser", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.editModule = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageCollection/editModule", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.editRelease = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageCollection/editRelease", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.deleteUser = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageCollection/deleteUser", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.deleteModule = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageCollection/deleteModule", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.deleteRelease = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageCollection/deleteRelease", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DefectlistService.prototype.getTemplates = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/manageTemplate/getTemplateList")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.getReferenceTempColumns = function () {
        return this.http.get('http://' + "localhost:8085/KanbanDashboard/manageTemplate/getReferenceTempColumns")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DefectlistService.prototype.mappingFields = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://' + "localhost:8085/KanbanDashboard/manageTemplate/mappingFields", request, options).map(function (res) { return res.json(); }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    return DefectlistService;
}());
DefectlistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DefectlistService);

var _a;
//# sourceMappingURL=defectlist.service.js.map

/***/ }),

/***/ "../../../../../src/app/plan/plan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    width: 9rem;\r\n}\r\n.card-body,.panel-default{\r\n    padding: 5px;\r\n}\r\n.yellowgreen{\r\n    background-color: yellowgreen !important;\r\n}\r\n.skyblue{\r\n    background-color: skyblue !important;\r\n}\r\n.tan{\r\n    background-color: tan !important;\r\n}\r\n.darkkhaki{\r\n    background-color: darkkhaki !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plan/plan.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-sm-3\" style=\"float:right;margin-bottom:50px;\"> \n    <form #myForm=\"ngForm\" novalidate>\n      <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\n                       (dateChanged)=\"onDateChangedPlan($event)\" [selDate]=\"selDate\" required ></my-date-picker>\n    </form>\n  </div>\n\n  <div style=\"margin-bottom: 50px\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"freezePlan()\">Freeze Plan</button>\n  </div>\n <table class=\"table table-dark\">\n      <thead>\n          <tr>\n            <th scope=\"col\">Defects</th>\n            <th scope=\"col\">Analysis</th>\n            <th scope=\"col\">Fixed</th>\n            <th scope=\"col\">Retest</th>\n            <th scope=\"col\">Deployment</th>\n            <th scope=\"col\">Onhold</th>\n          </tr>\n        </thead>\n    <tbody>\n      <tr>\n        <td [dragula]='\"first-bag\"' [dragulaModel]='newDefects'>\n          <div *ngFor = \"let item of newDefects\" class=\"panel panel-default\"> \n               \n                <div class=\"card\" [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='IE'}\">\n\n                    <div class=\"card-body\">\n                      <div class=\"card-title\">\n                        <b>{{item.defectId}}</b>\n                        <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                        <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                        <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                       <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                        \n                    </div>\n                      <div>\n                        <span class=\"badge badge-primary\">{{item.module}}</span>\n                        <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                        <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                        <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                        <span class=\"badge badge-primary\">{{item.workedBy}}</span>\n                \n                      </div>\n                     \n                    </div>\n                  \n              </div>\n          </div>\n        </td>\n        \n        <td  [dragula]='\"first-bag\"' [dragulaModel]='analysis'>\n          <div *ngFor = \"let item of analysis\" style=\"padding:5px;\">\n            <div class=\"card\" [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='IE'}\">\n             \n              <div class=\"card-body\">\n                <div class=\"card-title\">\n                    <b>{{item.defectId}}</b>\n                    <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                  <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                  \n              </div>\n                <div>\n                  <span class=\"badge badge-primary\">{{item.module}}</span>\n                  <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                  <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                  <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                  <span class=\"badge badge-primary\">{{item.workedBy}}</span>\n          \n                </div>\n               \n              </div>\n            \n        </div>\n          </div>\n        </td>\n        <td  [dragula]='\"first-bag\"' [dragulaModel]='fixed'>\n          <div *ngFor = \"let item of fixed\" style=\"padding:5px;\">\n            <div class=\"card\" [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='IE'}\">\n             \n              <div class=\"card-body\">\n                <div class=\"card-title\">\n                    <b>{{item.defectId}}</b>\n                    <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                  <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                  \n              </div>\n                <div>\n                  <span class=\"badge badge-primary\">{{item.module}}</span>\n                  <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                  <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                  <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                  <span class=\"badge badge-primary\">{{item.workedBy}}</span>\n          \n                </div>\n               \n              </div>\n            \n        </div>\n          </div>\n        </td>\n        <td  [dragula]='\"first-bag\"' [dragulaModel]='retest'>\n          <div *ngFor = \"let item of retest\" style=\"padding:5px;\">\n            <div class=\"card\" [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='IE'}\">\n             \n              <div class=\"card-body\">\n                <div class=\"card-title\">\n                    <b>{{item.defectId}}</b>\n                    <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                  <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                  \n              </div>\n                <div>\n                  <span class=\"badge badge-primary\">{{item.module}}</span>\n                  <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                  <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                  <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                  <span class=\"badge badge-primary\">{{item.workedBy}}</span>\n          \n                </div>\n               \n              </div>\n            \n        </div>\n          </div>\n        </td>\n        <td  [dragula]='\"first-bag\"' [dragulaModel]='deployment'>\n          <div *ngFor = \"let item of deployment\"  style=\"padding:5px;\">\n            <div class=\"card\" [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='IE'}\">\n             \n              <div class=\"card-body\">\n                <div class=\"card-title\">\n                    <b>{{item.defectId}}</b>\n                    <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                  <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                  \n              </div>\n                <div>\n                  <span class=\"badge badge-primary\">{{item.module}}</span>\n                  <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                  <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                  <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                  <span class=\"badge badge-primary\">{{item.workedBy}}</span>\n          \n                </div>\n               \n              </div>\n            \n        </div>\n          </div>\n        </td>\n        <td  [dragula]='\"first-bag\"' [dragulaModel]='onhold'>\n          <div *ngFor = \"let item of onhold\"  style=\"padding:5px;\">\n            <div class=\"card\" [ngClass]=\"{'yellowgreen': item.defectType=='PD','skyblue':item.defectType=='I','tan':item.defectType=='WD','darkkhaki':item.defectType=='IE'}\">\n            \n              <div class=\"card-body\">\n                <div class=\"card-title\">\n                    <b>{{item.defectId}}</b>\n                    <i *ngIf=\"item.progress=='Not started'\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='In progress'\" class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                    <i *ngIf=\"item.progress=='Completed'\" class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                  <a data-toggle=\"modal\" href=\"#\" data-target=\"#exampleModal\" style=\"float:right\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"edit(item)\"></i></a>\n                  \n              </div>\n                <div>\n                  <span class=\"badge badge-primary\">{{item.module}}</span>\n                  <span *ngIf=\"item.severity=='Severity 1'\" class=\"badge badge-primary\">S1</span>\n                  <span *ngIf=\"item.severity=='Severity 2'\" class=\"badge badge-primary\">S2</span>\n                  <span *ngIf=\"item.severity=='Severity 3'\" class=\"badge badge-primary\">S3</span>\n                  <span class=\"badge badge-primary\">{{item.workedBy}}</span>\n          \n                </div>\n               \n              </div>\n            \n        </div>\n          </div>\n        </td>     \n      </tr>\n    </tbody>\n  </table>\n\n  \n  <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{clickedDefect.defectId}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <div>{{clickedDefect.description}}</div>\n        <form #editForm=\"ngForm\">\n          <div class=\"form-group row\">\n            <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">Module</label>\n            <div class=\"col-10\">\n              <select class=\"form-control\" id=\"exampleSelect1\" name=\"module\" [(ngModel)]=\"clickedDefect.module\">\n               <!-- <option>{{clickedDefect.module}}</option> -->\n                <option *ngFor = \"let item of modulesList\">{{item.alias}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\">Severity</label>\n            <div class=\"col-10\">\n              <select class=\"form-control\" id=\"exampleSelect1\" name=\"severity\" [(ngModel)]=\"clickedDefect.severity\">\n                 <!-- <option>{{clickedDefect.severity}}</option> -->\n                  <option>Severity 1</option>\n                  <option>Severity 2</option>\n                  <option>Severity 3</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">Worked By</label>\n              <div class=\"col-10\">\n                <select class=\"form-control\" id=\"exampleSelect1\" name=\"workedBy\" [(ngModel)]=\"clickedDefect.workedBy\">\n                  <option>{{clickedDefect.workedBy}}</option>\n                  <option *ngFor = \"let item of userList\">{{item}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">ETA</label>\n                <div class=\"col-10\">\n                  <select class=\"form-control\" id=\"exampleSelect1\" name=\"eta\" [(ngModel)]=\"clickedDefect.eta\">\n                   <!-- <option>{{clickedDefect.eta}}</option> -->\n                    <option *ngFor = \"let item of releaseList\">{{item}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                  <label for=\"exampleSelect1\" class=\"col-2 col-form-label\">Progress</label>\n                  <div class=\"col-10\">\n                    <select class=\"form-control\" id=\"exampleSelect1\" name=\"progress\" [(ngModel)]=\"clickedDefect.progress\">\n                      <option>{{clickedDefect.progress}}</option>\n                      <option>Not started</option>\n                      <option>In progress</option>\n                      <option>Completed</option>                   \n                    </select>\n                  </div>\n                </div>\n          <div class=\"form-group row\">\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Complexity</label>\n              <div class=\"col-10\">\n                <input class=\"form-control\" type=\"text\" id=\"example-text-input\" name=\"complexity\" [(ngModel)]=\"clickedDefect.complexity\">\n              </div>\n            </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update(editForm.value)\">update</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/plan/plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defectlist_service__ = __webpack_require__("../../../../../src/app/defectlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanComponent = (function () {
    function PlanComponent(defectListService, dragulaService) {
        var _this = this;
        this.defectListService = defectListService;
        this.dragulaService = dragulaService;
        this.newDefects = [];
        this.analysis = [];
        this.fixed = [];
        this.retest = [];
        this.deployment = [];
        this.onhold = [];
        this.formattedDate = "";
        this.clickedDefect = {};
        this.modulesList = [];
        this.selDate = { year: 0, month: 0, day: 0 };
        this.userList = [];
        this.releaseList = [];
        var d = new Date();
        this.selDate = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.dragulaService.drop.subscribe(function (value) {
            //console.log(`drop: ${value[0]}`);
            for (var i = 0; i < _this.analysis.length; i++) {
                if (_this.analysis[i].status != "analysis") {
                    console.log(JSON.stringify(_this.analysis));
                    _this.analysis[i].status = "analysis";
                    console.log(JSON.stringify(_this.analysis));
                    break;
                }
            }
            for (var i = 0; i < _this.fixed.length; i++) {
                if (_this.fixed[i].status != "fixed") {
                    _this.fixed[i].status = "fixed";
                    break;
                }
            }
            for (var i = 0; i < _this.retest.length; i++) {
                if (_this.retest[i].status != "retest") {
                    _this.retest[i].status = "retest";
                    break;
                }
            }
            for (var i = 0; i < _this.deployment.length; i++) {
                if (_this.deployment[i].status != "deployment") {
                    _this.deployment[i].status = "deployment";
                    break;
                }
            }
            for (var i = 0; i < _this.onhold.length; i++) {
                if (_this.onhold[i].status != "onhold") {
                    _this.onhold[i].status = "onhold";
                    break;
                }
            }
            for (var i = 0; i < _this.newDefects.length; i++) {
                if (_this.newDefects[i].status != "") {
                    _this.newDefects[i].status = "";
                    break;
                }
            }
        });
    }
    PlanComponent.prototype.ngOnInit = function () {
        this.dateFormatter(this.selDate);
        this.getDefectList(this.formattedDate);
        this.getUsersList();
        this.getModulesList();
        this.getReleaseList();
    };
    PlanComponent.prototype.onDateChangedPlan = function (event) {
        this.dateFormatter(event.date);
        this.getDefectList(this.formattedDate);
    };
    PlanComponent.prototype.getDefectList = function (date) {
        var _this = this;
        //this.dateFormatter(date);
        var data;
        //console.log(this.formattedDate);
        this.defectListService.getDefectListPlan(this.formattedDate).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            _this.analysis = [];
            _this.deployment = [];
            _this.fixed = [];
            _this.newDefects = [];
            _this.retest = [];
            _this.onhold = [];
            for (var i = 0; i < data.plan.length; i++) {
                if (data.plan[i].status == "analysis") {
                    _this.analysis.push(data.plan[i]);
                }
                else if (data.plan[i].status == "fixed") {
                    _this.fixed.push(data.plan[i]);
                }
                else if (data.plan[i].status == "retest") {
                    _this.retest.push(data.plan[i]);
                }
                else if (data.plan[i].status == "deployment") {
                    _this.deployment.push(data.plan[i]);
                }
                else if (data.plan[i].status == "onhold") {
                    _this.onhold.push(data.plan[i]);
                }
                else {
                    _this.newDefects.push(data.plan[i]);
                }
            }
        });
    };
    PlanComponent.prototype.getUsersList = function () {
        var _this = this;
        var data;
        this.defectListService.getUsersList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            for (var i = 0; i < data.length; i++) {
                _this.userList.push(data[i].attid);
            }
        });
    };
    PlanComponent.prototype.getModulesList = function () {
        var _this = this;
        var data;
        this.defectListService.getModuleList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            for (var i = 0; i < data.length; i++) {
                var obj = {};
                obj.module = data[i].module;
                obj.alias = data[i].alias;
                _this.modulesList.push(obj);
            }
        });
    };
    PlanComponent.prototype.getReleaseList = function () {
        var _this = this;
        var data;
        this.defectListService.getReleaseList().subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            for (var i = 0; i < data.length; i++) {
                _this.releaseList.push(data[i].key);
            }
            console.log(JSON.stringify(_this.releaseList));
        });
    };
    PlanComponent.prototype.dateFormatter = function (date) {
        var day = date.day;
        var month = date.month;
        if (date.day < 10) {
            day = "0" + date.day;
        }
        if (date.month < 10) {
            month = "0" + date.month;
        }
        this.formattedDate = month + "-" + day + "-" + date.year;
    };
    PlanComponent.prototype.edit = function (defectObj) {
        this.clickedDefect = defectObj;
    };
    PlanComponent.prototype.update = function (values) {
        if (this.clickedDefect.Status == "analysis") {
            this.updateArray(this.analysis, values);
        }
        else if (this.clickedDefect.Status == "fixed") {
            this.updateArray(this.fixed, values);
        }
        else if (this.clickedDefect.Status == "retest") {
            this.updateArray(this.retest, values);
        }
        else if (this.clickedDefect.Status == "deployment") {
            this.updateArray(this.deployment, values);
        }
        else if (this.clickedDefect.Status == "onhold") {
            this.updateArray(this.onhold, values);
        }
        else {
            this.updateArray(this.newDefects, values);
        }
    };
    PlanComponent.prototype.updateArray = function (array, values) {
        console.log(JSON.stringify(values));
        for (var i = 0; i < array.length; i++) {
            if (array[i].defectId == this.clickedDefect.defectId) {
                array[i].module = values.module;
                array[i].severity = values.severity;
                array[i].workedBy = values.workedBy;
                array[i].eta = values.eta;
                array[i].progress = values.progress;
                array[i].complexity = values.complexity;
            }
        }
    };
    PlanComponent.prototype.freezePlan = function () {
        /*for(let i = 0;i<this.analysis.length;i++){
          if(this.analysis[i].status != "analysis"){
            this.analysis[i].status = "analysis";
          }
        }
    
        for(let i = 0;i<this.fixed.length;i++){
          if(this.fixed[i].status != "fixed"){
            this.fixed[i].status = "fixed";
          }
        }
    
        for(let i = 0;i<this.retest.length;i++){
          if(this.retest[i].status != "retest"){
            this.retest[i].status = "retest";
          }
        }
    
        for(let i = 0;i<this.deployment.length;i++){
          if(this.deployment[i].status != "deployment"){
            this.deployment[i].status = "deployment";
          }
        }
    
        for(let i = 0;i<this.onhold.length;i++){
          if(this.onhold[i].status != "onhold"){
            this.onhold[i].status = "onhold";
          }
        }
    
        for(let i = 0;i<this.newDefects.length;i++){
          if(this.newDefects[i].status != ""){
            this.newDefects[i].status = "";
          }
        }*/
        var plan = [];
        plan = Array.prototype.concat(this.newDefects, this.analysis, this.fixed, this.retest, this.deployment, this.onhold);
        console.log(JSON.stringify(plan));
        this.dateFormatter(this.selDate);
        var request = {
            date: this.formattedDate,
            plan: plan,
            actual: plan
        };
        //this.defectListService.updateDefectPlan(request);
        var data;
        this.defectListService.insertPlanMapping(request).subscribe(function (res) { return data = res; }, function (err) { return console.log(err); }, function () {
            //this.getDefectList(this.formattedDate);
        });
        this.getDefectList(this.formattedDate);
    };
    return PlanComponent;
}());
PlanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-plan',
        template: __webpack_require__("../../../../../src/app/plan/plan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plan/plan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__defectlist_service__["a" /* DefectlistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__defectlist_service__["a" /* DefectlistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _b || Object])
], PlanComponent);

var _a, _b;
//# sourceMappingURL=plan.component.js.map

/***/ }),

/***/ "../../../../../src/app/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\"> \n  <form #myForm=\"ngForm\" novalidate>\n    <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\n                     (dateChanged)=\"onDateChangedStatus($event)\" [selDate]=\"selDate\" required ></my-date-picker>\n  </form>\n</div>\n\n<table class=\"table table-dark\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">First Name</th>\n        <th scope=\"col\">Last Name</th>\n        <th scope=\"col\">Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td>Mark</td>\n        <td>Otto</td>\n        <td>@mdo</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td>Jacob</td>\n        <td>Thornton</td>\n        <td>@fat</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td>Larry</td>\n        <td>the Bird</td>\n        <td>@twitter</td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defectlist_service__ = __webpack_require__("../../../../../src/app/defectlist.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = (function () {
    function StatusComponent(defectListService) {
        this.defectListService = defectListService;
        this.selDate = { year: 0, month: 0, day: 0 };
        var d = new Date();
        this.selDate = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.onDateChangedStatus = function (event) {
        /*   let data;
           this.defectListService.getDefectList(this.selDate).subscribe(
             res => data = res,
             err => console.log(err),
             () => {
       
             }
           );*/
        console.log("from satus");
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-status',
        template: __webpack_require__("../../../../../src/app/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status/status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__defectlist_service__["a" /* DefectlistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__defectlist_service__["a" /* DefectlistService */]) === "function" && _a || Object])
], StatusComponent);

var _a;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map