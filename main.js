/* Fix Only MultiFileAuthState
  * Mampus Di Enc :v
  * Thanks AmirulDev & Rasel Comel For Source
  * @AmirulDev https://github.com/amiruldev20
  * @Rasel Comel https://github.com/raselcomel
  * Recode : ImYanXiao
  * @ImYanXiao https://github.com/ImYanXiao
  * Catatan : Untuk Sessionnya Hanya Support 
  * MultiFileAuthState/banyak file dalam folder sessions
  * Kamu Bisa Scan Pakai Replit
  */ 
const _0x5a238f=_0x4c73;(function(_0x839dde,_0x5eab5b){const _0x8e2b13=_0x4c73,_0x9e84ab=_0x839dde();while(!![]){try{const _0x327d19=-parseInt(_0x8e2b13(0x227))/0x1*(parseInt(_0x8e2b13(0x1f8))/0x2)+-parseInt(_0x8e2b13(0x214))/0x3+parseInt(_0x8e2b13(0x21e))/0x4*(-parseInt(_0x8e2b13(0x1cc))/0x5)+parseInt(_0x8e2b13(0x229))/0x6+-parseInt(_0x8e2b13(0x21f))/0x7*(parseInt(_0x8e2b13(0x23d))/0x8)+-parseInt(_0x8e2b13(0x248))/0x9*(parseInt(_0x8e2b13(0x1ed))/0xa)+parseInt(_0x8e2b13(0x1f7))/0xb;if(_0x327d19===_0x5eab5b)break;else _0x9e84ab['push'](_0x9e84ab['shift']());}catch(_0x1ec46c){_0x9e84ab['push'](_0x9e84ab['shift']());}}}(_0x2de1,0x32306),process[_0x5a238f(0x1b6)][_0x5a238f(0x1eb)]='0');import'./config.js';import{createRequire}from'module';import _0x302400,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';global[_0x5a238f(0x201)]=function filename(_0x6577d9=import.meta[_0x5a238f(0x1cb)],_0x4ccab0=platform!==_0x5a238f(0x1f9)){const _0x21c7c5=_0x5a238f;return _0x4ccab0?/file:\/\/\//[_0x21c7c5(0x1e1)](_0x6577d9)?fileURLToPath(_0x6577d9):_0x6577d9:pathToFileURL(_0x6577d9)[_0x21c7c5(0x1f6)]();},global[_0x5a238f(0x20e)]=function dirname(_0x3a6c4a){const _0x3d43d4=_0x5a238f;return _0x302400['dirname'](global[_0x3d43d4(0x201)](_0x3a6c4a,!![]));},global[_0x5a238f(0x203)]=function require(_0x181bd7=import.meta[_0x5a238f(0x1cb)]){return createRequire(_0x181bd7);};import*as _0x21a40d from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch}from'fs';import _0x5a2292 from'yargs';import{spawn}from'child_process';import _0x1ad5af from'lodash';import _0x4f2e4b from'syntax-error';import{tmpdir}from'os';import{format}from'util';import _0x2b3619 from'pino';const {useMultiFileAuthState,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,msgRetryCounterMap}=await import(_0x5a238f(0x238)),cek=fetchLatestBaileysVersion;import{Low,JSONFile}from'lowdb';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import _0x226615 from'./lib/store2.js';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';const {CONNECTING}=_0x21a40d,{chain}=_0x1ad5af,PORT=process[_0x5a238f(0x1b6)][_0x5a238f(0x206)]||process['env']['SERVER_PORT']||0xbb8;function _0x4c73(_0x23cf61,_0x4f5c5f){const _0x2de110=_0x2de1();return _0x4c73=function(_0x4c7336,_0x59a289){_0x4c7336=_0x4c7336-0x1b4;let _0x86c3e1=_0x2de110[_0x4c7336];return _0x86c3e1;},_0x4c73(_0x23cf61,_0x4f5c5f);}protoType(),serialize(),global['API']=(_0x37d876,_0x511d68='/',_0x29aeba={},_0x2a34fd)=>(_0x37d876 in global[_0x5a238f(0x235)]?global[_0x5a238f(0x235)][_0x37d876]:_0x37d876)+_0x511d68+(_0x29aeba||_0x2a34fd?'?'+new URLSearchParams(Object['entries']({..._0x29aeba,..._0x2a34fd?{[_0x2a34fd]:global[_0x5a238f(0x1d9)][_0x37d876 in global['APIs']?global[_0x5a238f(0x235)][_0x37d876]:_0x37d876]}:{}})):''),global[_0x5a238f(0x20a)]={'start':new Date()};const __dirname=global[_0x5a238f(0x20e)](import.meta[_0x5a238f(0x1cb)]);global['opts']=new Object(_0x5a2292(process['argv'][_0x5a238f(0x1e9)](0x2))[_0x5a238f(0x233)](![])[_0x5a238f(0x1b9)]()),global[_0x5a238f(0x230)]=new RegExp('^['+(opts['prefix']||'\x1a\x1axzXZ/i!#$%+£¢€¥^°=¶\x1a×÷\x1a\x1a\x1a©®:;?&.\x5c-')[_0x5a238f(0x20f)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x5a238f(0x1bd))+']'),global['db']=new Low(/https?:\/\//[_0x5a238f(0x1e1)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i[_0x5a238f(0x1e1)](opts['db'])?opts[_0x5a238f(0x241)]?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x5a238f(0x21c))),global['DATABASE']=global['db'],global['loadDatabase']=async function loadDatabase(){const _0x2e9f76=_0x5a238f;if(db[_0x2e9f76(0x1dd)])return new Promise(_0x2ea7c8=>setInterval(async function(){const _0x23b79a=_0x2e9f76;!db[_0x23b79a(0x1dd)]&&(clearInterval(this),_0x2ea7c8(db['data']==null?global[_0x23b79a(0x213)]():db[_0x23b79a(0x1e2)]));},0x1*0x3e8));if(db[_0x2e9f76(0x1e2)]!==null)return;db['READ']=!![],await db[_0x2e9f76(0x1fc)]()['catch'](console[_0x2e9f76(0x1e8)]),db[_0x2e9f76(0x1dd)]=null,db[_0x2e9f76(0x1e2)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...db[_0x2e9f76(0x1e2)]||{}},global['db'][_0x2e9f76(0x23c)]=chain(db['data']);},loadDatabase(),global[_0x5a238f(0x218)]=opts[_0x5a238f(0x1fd)]?(opts['_'][0x0]||_0x5a238f(0x1dc))+_0x5a238f(0x1c7):_0x5a238f(0x245);const {state,saveState,saveCreds}=opts[_0x5a238f(0x1fd)]?await useSingleFileAuthState(authF):await _0x226615[_0x5a238f(0x1e5)](authFile),store=_0x226615[_0x5a238f(0x204)](),sess=(opts['_'][0x0]||_0x5a238f(0x1bb))+_0x5a238f(0x1cf);store[_0x5a238f(0x244)](sess),global[_0x5a238f(0x21b)]=store;const connectionOptions={'printQRInTerminal':!![],'auth':state};global[_0x5a238f(0x209)]=makeWASocket(connectionOptions),conn['isInit']=![];!opts[_0x5a238f(0x1e1)]&&setInterval(async()=>{const _0x28dce8=_0x5a238f;if(global['db']['data'])await global['db'][_0x28dce8(0x1f2)]()[_0x28dce8(0x1da)](console['error']);if(!opts[_0x28dce8(0x1c4)])try{clearTmp();}catch(_0x10dd53){}},0x3c*0x3e8);if(opts['server'])(await import(_0x5a238f(0x247)))[_0x5a238f(0x20d)](global['conn'],PORT);function _0x2de1(){const _0x388aba=['Silahkan\x20install\x20ffmpeg\x20terlebih\x20dahulu\x20agar\x20bisa\x20mengirim\x20video','handler','readFromFile','sessions','convert','./server.js','18rhyzFx','Judul\x20grup\x20telah\x20diubah\x20menjadi\x20\x0a@subject','--version','env','statusCode','Group\x20telah\x20di\x20tutup!\x0asekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan.','parse','entries','elaina','Edit\x20Info\x20Grup\x20di\x20ubah\x20ke\x20hanya\x20admin!','\x5c$&','messages.upsert','Group\x20telah\x20di\x20buka!\x0asekarang\x20semua\x20peserta\x20dapat\x20mengirim\x20pesan.','deleteUpdate','localeCompare','group-participants.update','removeAllListeners','tmp','@s.whatsapp.net','groupsUpdate','.data.json','isFile','off','*\x20telah\x20dihapus!!','url','213980Bhjmyt','output','❖━━━━━━[\x20*ᴡᴇʟᴄᴏᴍᴇ*\x20]━━━━━━❖\x0a\x0a┏––––––━━━━━━━━•\x0a│☘︎\x20@subject\x0a┣━━━━━━━━┅┅┅\x0a│(\x20👋\x20Hallo\x20@user)\x0a├[\x20*ɪɴᴛʀᴏ*\x20]—\x0a│\x20*ɴᴀᴍᴀ:*\x20\x0a│\x20*ᴜᴍᴜʀ:*\x20\x0a│\x20*ɢᴇɴᴅᴇʀ:*\x0a┗––––––━━┅┅┅\x0a\x0a––––––┅┅\x20*ᴅᴇsᴄʀɪᴘᴛɪᴏɴ*\x20┅┅––––––\x0a@desc','.store.json','error\x20require\x20plugin\x20\x27','sIcon','-filter_complex','bind','forEach','reply','./handler.js','connection.update','?update=','APIKeys','catch','length','session','READ','*\x0alog:\x0a','chats','find','test','data','isInit','sAnnounceOff','useMultiFileAuthState','Edit\x20Info\x20Grup\x20di\x20ubah\x20ke\x20semua\x20peserta!','keys','error','slice','Plugins\x20*','NODE_TLS_REJECT_UNAUTHORIZED','sSubject','1079860csCVMg','./handler.js?update=','map','onDelete','close','write','ffmpegWebp','plugins','connect','toString','16297248dONRds','474134luoQUh','win32','-frames:v','participantsUpdate','read','single','connectionUpdate','statSync','groups.update','__filename','-loglevel','__require','makeInMemoryStore','sdemote','PORT','Syntax\x20error\x20*','loggedOut','conn','timestamp','unlinkSync','-hide_banner','default','__dirname','replace','then','❖━━━━━━[\x20*ʟᴇᴀᴠɪɴɢ*\x20]━━━━━━❖\x0a𝚂𝚊𝚢𝚘𝚗𝚊𝚛𝚊𝚊\x20*@user*\x20👋😃','credsUpdate','loadDatabase','1080093fqaTqo','sRestrictOff','push','fromEntries','authFile','*@user*\x20Sekarang\x20jadi\x20admin!','support','store','database.json','☑️\x20Quick\x20Test\x20Done,\x20nama\x20file\x20session\x20=>\x20','20TsjTRn','7dChbcx','sDesc','warn','syntax\x20error\x20while\x20loading\x20\x27','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','freeze','color','reloadHandler','1pjPrIG','info','267222RvQgQG','logger','log','spromote','welcome','*\x0a\x0alog:\x0a','module','prefix','mtimeMs','readdirSync','exitProcess','webp','APIs','./tmp','*@user*\x20Sekarang\x20bukan\x20lagi\x20admin!','@adiwajshing/baileys','creds.update','readyState','ffmpeg','chain','2347848MGjOEd','now','Link\x20group\x20telah\x20diubah\x20ke\x20\x0a@revoke','sRevoke','mongodbv2'];_0x2de1=function(){return _0x388aba;};return _0x2de1();}function clearTmp(){const _0x411ea5=_0x5a238f,_0x560a15=[tmpdir(),join(__dirname,_0x411ea5(0x236))],_0x49c20d=[];return _0x560a15['forEach'](_0x2025ea=>readdirSync(_0x2025ea)[_0x411ea5(0x1d4)](_0x14601b=>_0x49c20d[_0x411ea5(0x216)](join(_0x2025ea,_0x14601b)))),_0x49c20d[_0x411ea5(0x1ef)](_0x1b52a7=>{const _0xcb6098=_0x411ea5,_0x1ccd39=statSync(_0x1b52a7);if(_0x1ccd39[_0xcb6098(0x1c8)]()&&Date[_0xcb6098(0x23e)]()-_0x1ccd39[_0xcb6098(0x231)]>=0x3e8*0x3c*0x3)return unlinkSync(_0x1b52a7);return![];});}async function connectionUpdate(_0x2c9e6e){const _0x2e4325=_0x5a238f,{connection:_0x2de43b,lastDisconnect:_0x34aa61,isNewLogin:_0x4e0919}=_0x2c9e6e;if(_0x4e0919)conn[_0x2e4325(0x1e3)]=!![];const _0x19195e=_0x34aa61?.[_0x2e4325(0x1e8)]?.[_0x2e4325(0x1cd)]?.[_0x2e4325(0x1b7)]||_0x34aa61?.['error']?.[_0x2e4325(0x1cd)]?.['payload']?.['statusCode'];_0x19195e&&_0x19195e!==DisconnectReason[_0x2e4325(0x208)]&&conn?.['ws'][_0x2e4325(0x23a)]!==CONNECTING&&(console[_0x2e4325(0x22b)](await global[_0x2e4325(0x226)](!![])[_0x2e4325(0x1da)](console[_0x2e4325(0x1e8)])),timestamp[_0x2e4325(0x1f5)]=new Date());if(global['db'][_0x2e4325(0x1e2)]==null)loadDatabase();}process['on']('uncaughtException',console[_0x5a238f(0x1e8)]);let isInit=!![],handler=await import(_0x5a238f(0x1d6));global[_0x5a238f(0x226)]=async function(_0x4515dc){const _0x1c39a2=_0x5a238f;try{const _0x5e238b=await import(_0x1c39a2(0x1ee)+Date['now']())[_0x1c39a2(0x1da)](console[_0x1c39a2(0x1e8)]);if(Object[_0x1c39a2(0x1e7)](_0x5e238b||{})[_0x1c39a2(0x1db)])handler=_0x5e238b;}catch(_0x305745){console[_0x1c39a2(0x1e8)](_0x305745);}if(_0x4515dc){const _0x4af271=global[_0x1c39a2(0x209)][_0x1c39a2(0x1df)];try{global[_0x1c39a2(0x209)]['ws'][_0x1c39a2(0x1f1)]();}catch{}conn['ev'][_0x1c39a2(0x1c3)](),global[_0x1c39a2(0x209)]=makeWASocket(connectionOptions,{'chats':_0x4af271}),isInit=!![];}return!isInit&&(conn['ev'][_0x1c39a2(0x1c9)](_0x1c39a2(0x1be),conn[_0x1c39a2(0x243)]),conn['ev'][_0x1c39a2(0x1c9)](_0x1c39a2(0x1c2),conn[_0x1c39a2(0x1fb)]),conn['ev'][_0x1c39a2(0x1c9)](_0x1c39a2(0x200),conn[_0x1c39a2(0x1c6)]),conn['ev'][_0x1c39a2(0x1c9)]('message.delete',conn[_0x1c39a2(0x1f0)]),conn['ev'][_0x1c39a2(0x1c9)]('connection.update',conn[_0x1c39a2(0x1fe)]),conn['ev'][_0x1c39a2(0x1c9)](_0x1c39a2(0x239),conn[_0x1c39a2(0x212)])),conn[_0x1c39a2(0x22d)]=_0x1c39a2(0x1ce),conn['bye']=_0x1c39a2(0x211),conn[_0x1c39a2(0x22c)]=_0x1c39a2(0x219),conn[_0x1c39a2(0x205)]=_0x1c39a2(0x237),conn[_0x1c39a2(0x220)]='Deskripsi\x20telah\x20diubah\x20menjadi\x20\x0a@desc',conn[_0x1c39a2(0x1ec)]=_0x1c39a2(0x1b4),conn[_0x1c39a2(0x1d1)]='Icon\x20grup\x20telah\x20diubah!',conn[_0x1c39a2(0x240)]=_0x1c39a2(0x23f),conn['sAnnounceOn']=_0x1c39a2(0x1b8),conn[_0x1c39a2(0x1e4)]=_0x1c39a2(0x1bf),conn['sRestrictOn']=_0x1c39a2(0x1bc),conn[_0x1c39a2(0x215)]=_0x1c39a2(0x1e6),conn[_0x1c39a2(0x243)]=handler['handler'][_0x1c39a2(0x1d3)](global[_0x1c39a2(0x209)]),conn[_0x1c39a2(0x1fb)]=handler[_0x1c39a2(0x1fb)][_0x1c39a2(0x1d3)](global['conn']),conn['groupsUpdate']=handler[_0x1c39a2(0x1c6)][_0x1c39a2(0x1d3)](global[_0x1c39a2(0x209)]),conn['onDelete']=handler[_0x1c39a2(0x1c0)][_0x1c39a2(0x1d3)](global[_0x1c39a2(0x209)]),conn[_0x1c39a2(0x1fe)]=connectionUpdate[_0x1c39a2(0x1d3)](global[_0x1c39a2(0x209)]),conn[_0x1c39a2(0x212)]=opts[_0x1c39a2(0x1fd)]?saveState['bind'](global[_0x1c39a2(0x209)]):saveCreds[_0x1c39a2(0x1d3)](global['conn']),conn['ev']['on'](_0x1c39a2(0x1be),conn[_0x1c39a2(0x243)]),conn['ev']['on'](_0x1c39a2(0x1c2),conn[_0x1c39a2(0x1fb)]),conn['ev']['on'](_0x1c39a2(0x200),conn[_0x1c39a2(0x1c6)]),conn['ev']['on']('message.delete',conn['onDelete']),conn['ev']['on'](_0x1c39a2(0x1d7),conn['connectionUpdate']),conn['ev']['on'](_0x1c39a2(0x239),conn[_0x1c39a2(0x212)]),isInit=![],!![];};const pluginFolder=global[_0x5a238f(0x20e)](join(__dirname,'./plugins/index')),pluginFilter=_0x3814a8=>/\.js$/[_0x5a238f(0x1e1)](_0x3814a8);global[_0x5a238f(0x1f4)]={};async function filesInit(){const _0x376597=_0x5a238f;for(let _0x1c34a9 of readdirSync(pluginFolder)['filter'](pluginFilter)){try{let _0x5c0bb5=global[_0x376597(0x201)](join(pluginFolder,_0x1c34a9));const _0x5b3456=await import(_0x5c0bb5);global['plugins'][_0x1c34a9]=_0x5b3456['default']||_0x5b3456;}catch(_0x40a24a){conn['logger'][_0x376597(0x1e8)](_0x40a24a),delete global[_0x376597(0x1f4)][_0x1c34a9];}}}filesInit()[_0x5a238f(0x210)](_0x2e8f36=>{})['catch'](console['error']),global['reload']=async(_0x8ad3a8,_0x285835)=>{const _0x16e722=_0x5a238f;if(pluginFilter(_0x285835)){let _0x26b989=global[_0x16e722(0x201)](join(pluginFolder,_0x285835),!![]);if(_0x285835 in global[_0x16e722(0x1f4)]){if(existsSync(_0x26b989))conn[_0x16e722(0x22a)][_0x16e722(0x228)]('re\x20-\x20require\x20plugin\x20\x27'+_0x285835+'\x27');else return conn[_0x16e722(0x22a)][_0x16e722(0x221)]('deleted\x20plugin\x20\x27'+_0x285835+'\x27'),conn[_0x16e722(0x1d5)](global['o1']+_0x16e722(0x1c5),_0x16e722(0x1ea)+_0x285835+_0x16e722(0x1ca)),conn[_0x16e722(0x1d5)](global['o2']+_0x16e722(0x1c5),_0x16e722(0x1ea)+_0x285835+'*\x20telah\x20dihapus!!'),delete global[_0x16e722(0x1f4)][_0x285835];}else conn[_0x16e722(0x22a)][_0x16e722(0x228)]('requiring\x20new\x20plugin\x20\x27'+_0x285835+'\x27');let _0x6ea360=_0x4f2e4b(readFileSync(_0x26b989),_0x285835,{'sourceType':_0x16e722(0x22f),'allowAwaitOutsideFunction':!![]});if(_0x6ea360)conn[_0x16e722(0x22a)][_0x16e722(0x1e8)](_0x16e722(0x222)+_0x285835+'\x27\x0a'+format(_0x6ea360)),conn[_0x16e722(0x1d5)](global['o1']+_0x16e722(0x1c5),_0x16e722(0x207)+_0x285835+_0x16e722(0x22e)+format(_0x6ea360)),conn[_0x16e722(0x1d5)](global['o2']+'@s.whatsapp.net',_0x16e722(0x207)+_0x285835+_0x16e722(0x1de)+format(_0x6ea360));else try{const _0xe4ab5c=await import(global[_0x16e722(0x201)](_0x26b989)+_0x16e722(0x1d8)+Date[_0x16e722(0x23e)]());global[_0x16e722(0x1f4)][_0x285835]=_0xe4ab5c[_0x16e722(0x20d)]||_0xe4ab5c;}catch(_0x1e9a1f){conn[_0x16e722(0x22a)]['error'](_0x16e722(0x1d0)+_0x285835+'\x0a'+format(_0x1e9a1f)+'\x27'),conn[_0x16e722(0x1d5)](global['o1']+_0x16e722(0x1c5),'Eror\x20load\x20*'+_0x285835+_0x16e722(0x1de)+format(_0x1e9a1f)),conn[_0x16e722(0x1d5)](global['o2']+_0x16e722(0x1c5),'Eror\x20load\x20*'+_0x285835+_0x16e722(0x1de)+format(_0x1e9a1f));}finally{global[_0x16e722(0x1f4)]=Object[_0x16e722(0x217)](Object[_0x16e722(0x1ba)](global['plugins'])['sort'](([_0x28bef4],[_0x1db026])=>_0x28bef4[_0x16e722(0x1c1)](_0x1db026)));}}},Object[_0x5a238f(0x224)](global['reload']),watch(pluginFolder,global['reload']),await global[_0x5a238f(0x226)]();async function clearSessions(_0x3d5e7b='sessions'){const _0xd54865=_0x5a238f;let _0x3bc4db=[];return fs[_0xd54865(0x232)](_0x3d5e7b)[_0xd54865(0x1d4)](_0x4c3799=>_0x3bc4db[_0xd54865(0x216)](_0x302400['join'](_0x3d5e7b,_0x4c3799))),_0x3bc4db[_0xd54865(0x1ef)](_0x3875a6=>{const _0x4e2dda=_0xd54865;let _0x137e3d=fs[_0x4e2dda(0x1ff)](_0x3875a6);if(_0x137e3d[_0x4e2dda(0x1c8)]()&&Date[_0x4e2dda(0x23e)]()-_0x137e3d[_0x4e2dda(0x231)]>=0x3e8*0x3c*0x3c)return console[_0x4e2dda(0x22b)]('Deleted\x20session',_0x3875a6),fs[_0x4e2dda(0x20b)](_0x3875a6);return![];});}async function _quickTest(){const _0x13f7c5=_0x5a238f;let _0x1d216b=await Promise['all']([spawn(_0x13f7c5(0x23b)),spawn('ffprobe'),spawn('ffmpeg',[_0x13f7c5(0x20c),_0x13f7c5(0x202),_0x13f7c5(0x1e8),_0x13f7c5(0x1d2),_0x13f7c5(0x225),_0x13f7c5(0x1fa),'1','-f',_0x13f7c5(0x234),'-']),spawn(_0x13f7c5(0x246)),spawn('magick'),spawn('gm'),spawn(_0x13f7c5(0x1e0),[_0x13f7c5(0x1b5)])][_0x13f7c5(0x1ef)](_0x502a2e=>{return Promise['race']([new Promise(_0x3fde91=>{_0x502a2e['on']('close',_0x580c79=>{_0x3fde91(_0x580c79!==0x7f);});}),new Promise(_0x247dac=>{const _0x51e021=_0x4c73;_0x502a2e['on'](_0x51e021(0x1e8),_0x2dce44=>_0x247dac(![]));})]);})),[_0x379627,_0x46d010,_0x4955af,_0x3f8cd8,_0x5929d1,_0x3e3efb,_0x25a29f]=_0x1d216b;console[_0x13f7c5(0x22b)](_0x1d216b);let _0x1852d4=global[_0x13f7c5(0x21a)]={'ffmpeg':_0x379627,'ffprobe':_0x46d010,'ffmpegWebp':_0x4955af,'convert':_0x3f8cd8,'magick':_0x5929d1,'gm':_0x3e3efb,'find':_0x25a29f};Object[_0x13f7c5(0x224)](global[_0x13f7c5(0x21a)]),!_0x1852d4[_0x13f7c5(0x23b)]&&conn[_0x13f7c5(0x22a)][_0x13f7c5(0x221)](_0x13f7c5(0x242)),_0x1852d4[_0x13f7c5(0x23b)]&&!_0x1852d4[_0x13f7c5(0x1f3)]&&conn[_0x13f7c5(0x22a)]['warn'](_0x13f7c5(0x223)),!_0x1852d4[_0x13f7c5(0x246)]&&!_0x1852d4['magick']&&!_0x1852d4['gm']&&conn['logger'][_0x13f7c5(0x221)]('Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)');}_quickTest()[_0x5a238f(0x210)](()=>conn[_0x5a238f(0x22a)][_0x5a238f(0x228)](_0x5a238f(0x21d),authFile))[_0x5a238f(0x1da)](console[_0x5a238f(0x1e8)]);