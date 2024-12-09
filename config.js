const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_04_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRmM5QkdWN3FtNTFyNGVOdllpUFl4S3MvODFNTVFubVFSdHlRUm4wZGtFdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibVl0Q0hzM3BRX2llWEZVZkdXTEZPQVwiLFxuICBcInBob25lSWRcIjogXCI2ZTg5ZDYzOC1iYWJmLTQyZDQtOWI1MC05ZmRjMzFlYjc0ODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMjAyLFxuICAgICAgNTUsXG4gICAgICA1OSxcbiAgICAgIDk4LFxuICAgICAgMTY3LFxuICAgICAgMTM1LFxuICAgICAgMTE3LFxuICAgICAgMTgyLFxuICAgICAgMjEsXG4gICAgICAyNixcbiAgICAgIDE3NyxcbiAgICAgIDEyMixcbiAgICAgIDEwOSxcbiAgICAgIDIwLFxuICAgICAgNTEsXG4gICAgICAyMTYsXG4gICAgICA5MixcbiAgICAgIDExMixcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMzcsXG4gICAgICAzOCxcbiAgICAgIDEyNixcbiAgICAgIDI1LFxuICAgICAgMjcsXG4gICAgICAxMjQsXG4gICAgICAyMTUsXG4gICAgICAxMTcsXG4gICAgICAxNjMsXG4gICAgICA4NixcbiAgICAgIDYwLFxuICAgICAgNTcsXG4gICAgICAxODUsXG4gICAgICA2MSxcbiAgICAgIDIwLFxuICAgICAgMjQwLFxuICAgICAgODIsXG4gICAgICAxODMsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTQ0Rkg2RzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwMjE5MjY2NToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlPhtIDhtIDhtIUgWuG0gMqAyoDhtIDhtIsgT9KT0pPJquG0hOG0gMqfXCIsXG4gICAgXCJsaWRcIjogXCIxMjIyMTM4NjQ4NjU5ODc6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzJTb29FRkVMeWQyN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5akgyalNlTDduS3VObVpPT0xERllBUTJLOERDd1JzSFE2SWNuQzdYbUNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZiblVsTzJjY1NnbGNCTXJxQVAvdG1OdStWRVNyOHluQUNyaDUxTmZvZnBKcTFMUS9TbVp3dVQ3VUVFMnYxM21PRTY3L2hmTmFzZFlHYm9tOGgzRENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBCeXMxbUErczFhbTNqNW5nU1Z5TUt2elpYM3hXaG5GemY2R09LdXpDTXkzQlN3NUljSTRuaENCVlJ6b2J0aDlTWWs2WFFTcDk4dDY5VXV1akFUYmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwMjE5MjY2NToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM3NDIyNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPMndcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8ydy5qc29uIjogIntcImtleURhdGFcIjpcIjVGN0ZQc2FRc3FCQ29iN1VHSk5HdkVFN3RmS3BYYjJjRUtnNVkzZXdBNkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM0NDgzMzkwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNzQyMjc4NzY4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
