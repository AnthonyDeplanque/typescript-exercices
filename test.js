"use strict";
exports.__esModule = true;
var os_1 = require("os");
var chalk_1 = require("chalk");
var cpu = os_1.cpus();
var stringifiedCpu = JSON.stringify(cpu);
console.log(chalk_1["default"].red(stringifiedCpu));
