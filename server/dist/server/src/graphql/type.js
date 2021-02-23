"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaType = "\n   type Query{\n      Allposts:[Allposts]\n      name:String\n   }\n   type Allposts{\n      id:Int \n      comment:Int\n      uid:String\n      content_name:String\n      date:String\n      created:String\n      file:String\n      detail:String\n      thumbnail:String\n      kindOfPosts:String\n      modified:String\n      topic:String\n   }\n   type csrf{\n      csrf:String\n   }\n";
exports.default = schemaType;
//# sourceMappingURL=type.js.map