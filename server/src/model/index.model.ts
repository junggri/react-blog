import connection from "../lib/index.connection";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const indexModel = {};

export default indexModel;
