#! /usr/bin/env node

let helperfile = require("./commands/help");
let copy = require("./commands/copy_content_from_file1_to_file2");
let append = require("./commands/append_from_one_file_to_another");
let displayfile = require("./commands/display");
let input = process.argv.slice(2);

let command = input[0];

let str;
switch(command){
    case "help":
        helperfile.helpfn();
        break;
    default:
         str=input.toString().split(" ");
        if(str[1]==">"){
         copy.copy(str[0],str[2]);    
        }
        else if(str[1]==">>"){
         append.Append(str[0],str[2]);
        }
        else displayfile.display(str);
        break;
}