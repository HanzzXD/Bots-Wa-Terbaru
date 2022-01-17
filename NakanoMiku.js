const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatkey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const crypto = require('crypto') 
const yts = require( 'yt-search')
const request = require('request')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const imageToBase64 = require('image-to-base64')
const { exec, spawn, execSync } = require('child_process')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { y2mate } = require('./lib/y2mate');
const { wikiSearch } = require('./lib/wiki.js')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
gambar = fs.readFileSync('./media/logo.jpg')
tamnel = fs.readFileSync('./media/logotoko.jpg')
td = fs.readFileSync('./media/TD.jpg')
const { Miminnya, BotName, fake, ownerNumber, targetpc, lolkey, Gopay, Dana, Pulsa} = require('./setting.json')
//const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, author, close,
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const { audios } = require('./lib/audio.js')
const { donasi } = require('./lib/donasi.js')
audio1 = fs.readFileSync('./media/audio3/nyz1.m4a')
audio2 = fs.readFileSync('./media/audio3/nyz2.m4a')
audio3 = fs.readFileSync('./media/audio3/nyz3.m4a')
audio4 = fs.readFileSync('./media/audio3/nyz4.m4a')
audio5 = fs.readFileSync('./media/audio3/nyz5.m4a')
audio6 = fs.readFileSync('./media/audio3/nyz6.m4a')
audio7 = fs.readFileSync('./media/audio3/nyz7.m4a')
audio8 = fs.readFileSync('./media/audio3/nyz8.m4a')
audio9 = fs.readFileSync('./media/audio3/nyz9.m4a')
audio10 = fs.readFileSync('./media/audio3/nyz10.m4a')
audio11 = fs.readFileSync('./media/audio3/nyz11.m4a')
audio12 = fs.readFileSync('./media/audio3/nyz12.m4a')
audio13 = fs.readFileSync('./media/audio3/nyz13.m4a')
audio14 = fs.readFileSync('./media/audio3/nyz14.m4a')
audio15 = fs.readFileSync('./media/audio3/nyz15.m4a')
audio16 = fs.readFileSync('./media/audio3/nyz16.m4a')
audio17 = fs.readFileSync('./media/audio3/nyz17.m4a')
audio18 = fs.readFileSync('./media/audio3/nyz18.m4a')
audio19 = fs.readFileSync('./media/audio3/nyz19.m4a')
audio20 = fs.readFileSync('./media/audio3/nyz20.m4a')
audio22 = fs.readFileSync('./media/audio3/nyz22.m4a')
audio23 = fs.readFileSync('./media/audio3/nyz23.m4a')
audio24 = fs.readFileSync('./media/audio3/nyz24.m4a')
audio25 = fs.readFileSync('./media/audio3/nyz25.m4a')
audio26 = fs.readFileSync('./media/audio3/nyz26.m4a')
audio27 = fs.readFileSync('./media/audio3/nyz27.m4a')
audio28 = fs.readFileSync('./media/audio3/nyz28.m4a')
audio29 = fs.readFileSync('./media/audio3/nyz29.m4a')
audio30 = fs.readFileSync('./media/audio3/nyz30.m4a')
audio31 = fs.readFileSync('./media/audio3/nyz31.m4a')
audio32 = fs.readFileSync('./media/audio3/nyz32.m4a')
audio33 = fs.readFileSync('./media/audio3/nyz33.m4a')
audio34 = fs.readFileSync('./media/audio3/nyz34.m4a')
audio35 = fs.readFileSync('./media/audio3/nyz35.m4a')
sound1 = fs.readFileSync('./media/sound2/sound1.mp3')
sound2 = fs.readFileSync('./media/sound2/sound2.mp3')
sound3 = fs.readFileSync('./media/sound2/sound3.mp3')
sound4 = fs.readFileSync('./media/sound2/sound4.mp3')
sound5 = fs.readFileSync('./media/sound2/sound5.mp3')
sound6 = fs.readFileSync('./media/sound2/sound6.mp3')
sound7 = fs.readFileSync('./media/sound2/sound7.mp3')
sound8 = fs.readFileSync('./media/sound2/sound8.mp3')
sound9 = fs.readFileSync('./media/sound2/sound9.mp3')
sound10 = fs.readFileSync('./media/sound2/sound10.mp3')
sound11 = fs.readFileSync('./media/sound2/sound11.mp3')
sound12 = fs.readFileSync('./media/sound2/sound12.mp3')
sound13 = fs.readFileSync('./media/sound2/sound13.mp3')
sound14 = fs.readFileSync('./media/sound2/sound14.mp3')
sound15 = fs.readFileSync('./media/sound2/sound15.mp3')
sound16 = fs.readFileSync('./media/sound2/sound16.mp3')
sound17 = fs.readFileSync('./media/sound2/sound17.mp3')
sound18 = fs.readFileSync('./media/sound2/sound18.mp3')
sound19 = fs.readFileSync('./media/sound2/sound19.mp3')
sound20 = fs.readFileSync('./media/sound2/sound20.mp3')
sound22 = fs.readFileSync('./media/sound2/sound22.mp3')
sound23 = fs.readFileSync('./media/sound2/sound23.mp3')
sound24 = fs.readFileSync('./media/sound2/sound24.mp3')
sound25 = fs.readFileSync('./media/sound2/sound25.mp3')
sound26 = fs.readFileSync('./media/sound2/sound1.mp3')
sound27 = fs.readFileSync('./media/sound2/sound2.mp3')
sound28 = fs.readFileSync('./media/sound2/sound3.mp3')
sound29 = fs.readFileSync('./media/sound2/sound4.mp3')
sound30 = fs.readFileSync('./media/sound2/sound5.mp3')
sound31 = fs.readFileSync('./media/sound2/sound6.mp3')
sound32 = fs.readFileSync('./media/sound2/sound7.mp3')
sound33 = fs.readFileSync('./media/sound2/sound8.mp3')
sound34 = fs.readFileSync('./media/sound2/sound9.mp3')
sound35 = fs.readFileSync('./media/sound2/sound10.mp3')
sound36 = fs.readFileSync('./media/sound2/sound11.mp3')
//================================================================================//

isSelf = false
isPublic = false
a = '```'
HardiApi = 'hardianto'
/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/
//================================================================================//
           
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
  
//================================================================================//
           
            module.exports = pebz = async (pebz, mek, _welkom) => {
	        try {
	     //   const { id } = message
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked		
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '#'          	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = pebz.user.jid
		    const botNumberss = pebz.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? mek.participant : mek.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await pebz.chats.all()
		    const groupMetadata = isGroup ? await pebz.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? _welkom.includes(from) : false
            const conts = mek.key.fromMe ? pebz.user.jid : pebz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? pebz.user.name : conts.notify || conts.vname || conts.name || '-'
            
//================================================================================//
           
		mess = {
			wait: 'Please Waiting. . .',
			success: 'Successl!',
			wrongFormat: 'Wrong Format!! Please Read Menu!',
			error: {
				stick: 'This is not sticker',
				url: 'Url EROR',
			},
			only: {
				group: 'Only Group!!',
				owner: 'Onlt owner Bot!!',
				gcadmin: 'Only Group Admins',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))        }
        const reply = (teks) => {
            pebz.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            pebz.sendMessage(hehe, teks, text)
        }
        const sendVn = (teks) => {pebz.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pebz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pebz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }            
            
//================================================================================//
           
        const fakestatus = (teks) => {
        pebz.sendMessage(from, teks, text, {
        quoted: {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
        },
        message: {
        "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": fake,
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediakey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediakeyTimestamp": "1610993486",
        "jpegThumbnail": gambar,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
        }
        }
        })
        }
        pebz.chatRead(from, "read")

//===============================================================================//
 //+++ || FAKE KONTAK           
           const fkontak = { 
           key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo ${pushname}\n${ucapanWaktu}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': gambar}}} 
 //+++ || FAKE TROLI         
           const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: gambar, surface: 200, message: `➥ Made By ${Miminnya}\n➥ Hallo ${pushname}`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }                	

//=================================================//	
 
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        pebz.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: troli
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        pebz.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await pebz.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        pebz.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: troli,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return pebz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }          
        
//===============================================================================//
        const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
                }
                if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
                }
                pebz.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
                    fs.unlinkSync(filename)
                });
                } 
         const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    pebz.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }                                 
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
         };
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        pebz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        pebz.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        pebz.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        pebz.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        pebz.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        pebz.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        pebz.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        pebz.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        pebz.sendMessage(from, hasil, type, options).catch(e => {
        pebz.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
       })
     })
   })
 })
}
//================================================================================//

	  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
       
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
      if (!mek.key.fromMe && isSelf === true) return
      
//================================================================================/
//============================ A L L  C A S E  M E N U ==============================
//================================================================================/
switch (command) {  
//===== S e l e c t i o n  m e n u
      case 'menu': case 'help':
            listMsg = {
            buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
            footerText: fake,
            description: `Hai @${sender.split('@')[0]}, Select This Menu!`,
            sections: [
            {
            "title": `${wita} - ${ucapanWaktu} kak - Best Today`,
            rows: [
            {
              "title": "CATALOG MENU",
              "rowId": `${prefix}menucatalog`
            },
            {
              "title": "BUTTON MENU",
              "rowId": `${prefix}buttonmenu`
            },
            {
              "title": "MEDIA MENU",
              "rowId": `${prefix}audiomenu`
            },
            {
              "title": "DONATE BOT",
              "rowId": `${prefix}`
            }
            ]
            }],
            listType: 1
            }
            pebz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
            break
//====== C a t a l o g  m e n u
      case 'menucatalog':
            menunya = `${ucapanWaktu} ${pushname}
            
『 *MEDIA MENU* 』
々 _${prefix}smeme <replyimg>_
々 _${prefix}textstic <addtext>_
々 _${prefix}toimg <replysticker>_
々 _${prefix}sticker <send/replyimg>_
々 _${prefix}pmeme <replyimg+text|txt>_

『 *FUN TIME* 』
々 _${prefix}truth_
々 _${prefix}dare_
々 _${prefix}darkjokes_

『 *DOWLOADER* 』
々 _${prefix}play <query>_
々 _${prefix}ytmp3 <link>_
々 _${prefix}ytaudio <link>_
々 _${prefix}ytmp4 <link>_
々 _${prefix}tiktok <link>_

『 *GAME MENU* 』
々 _${prefix}next_

『 *SEARCH MENU* 』
々 _${prefix}next_

『 *OWNER MENU* 』
々 _${prefix}welcome <on/off>_
々 _${prefix}next_`
            var imgs = await pebz.prepareMessage('0@c.us', gambar, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await pebz.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `THIS IS A MENU`,
            "description": menunya,
            "footerText": `メFEBRIBOT`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use prefix+command Example : ${prefix}sticker`,
            "url": "blm ada"
            },
            "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
            }
            }, { quoted: fkontak, mimetype: 'image/jpeg' })
            pebz.relayWAMessage(ctlg)
            break
//====== B u t t o n. m e n u            
      case 'buttonmenu':
            menu = `Hallo ${pushname} Sorry Menu Not Available At This Time
            
Isi Sendiri Yak!! Ini Base No enc100persen`
            but = [
            { buttonId: `${prefix}owner1`, buttonText: { displayText: 'CREATOR👑️' }, type: 1 },
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES📔' }, type: 1 }
                 ]
            sendButLocation(from, menu, fake, tamnel, but)
            break
//================================================================================/
//============================== G A M E  M E N U ================================/
//================================================================================/



//================================================================================/
//============================ F U N  T I M E  M E N U =============================/
//================================================================================/
      case 'trut':
      case 'truth':
            if (!isGroup) return reply('KhususGrup')
            const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
	    	const ttrth = trut[Math.floor(Math.random() * trut.length)]
		    //truteh = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
            sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
	     	break
      case 'dare':
	    	if (!isGroup) return reply('KhususGrup')
	    	const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
	    	const der = dare[Math.floor(Math.random() * dare.length)]
      		//todz = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
            sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
            break
      case 'darkjokes':
            if (!isGroup) return reply(mess.only.group)
           let data = fs.readFileSync('./lib/darkjokes.js');
	       jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
		   gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: 'NEXT⏩'}, type: 1}]
           pto =await pebz.prepareMessage(from, hasil, image)    
           gbuttonan = {
           imageMessage: pto.message.imageMessage,
           contentText: `Gelap Kek Masa Depanlu`,
           footerText: 'Klil Next Untuk Gambar Selanjutnya☕',
           buttons: gbutsan,
           headerType: 4
           }
           await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		   break

//================================================================================/
//============================== D O W L O A D E R ================================/
//================================================================================/

    case 'play':       
           if (args.length < 1) return reply(`Send command *${prefix}play query`)
           reply(mess.wait)
           let yut = await yts(q)
           yta(yut.videos[0].url)             
           .then(async(res) => {
           const { thumb, title, filesizeF, filesize } = res
           const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n\n•💬 Title : ${yut.all[0].title}\n•⏰️ Uploaded on : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Duration : ${yut.all[0].timestamp}\n•👑 Channel : ${yut.all[0].author.name}\n•🔗 Link : ${yut.all[0].url}`
           ya = await getBuffer(thumb)
           py =await pebz.prepareMessage(from, ya, image)
           gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
           gbuttonan = {
           imageMessage: py.message.imageMessage,
           contentText: capti,
           footerText: 'Please select type☕',
           buttons: gbutsan,
           headerType: 4
           }
           await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
           break         
     case 'ytmp3':
           if (args.length < 1) return reply('Link?')
           if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link not valid')
           reply("Please Waiting!! Downloading Media. . .")
           teks = args.join(' ')
           res = await y2mateA(teks)
           sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
           break         
     case 'ytmp4':
           if(!q) return reply('linknya?')            
           res = await ytv(`${q}`).catch(e => {
           reply('```[ ! ] Error Saat Mengirim Video```')})
           sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
           break            
     case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':
 	       if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		   if (!q) return reply('Link?')
 		   reply(mess.wait)
		   hx.ttdownloader(`${args[0]}`)
    	   .then(result => {
    	   const { wm, nowm, audio } = result
    	   axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    	   .then(async (a) => {
    	   me = `Dont Forget To Subscriber https://youtube.com/c/FEBZABOTZ`
	       pebz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
    	   })
		   })
		   break
//================================================================================/
//============================= M E D I A  M E N U ================================/
//================================================================================/
     case 'potomeme': case 'pmeme':
           if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           try {
           if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
           reply(mess.wait)
           var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
           var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await pebz.downloadAndSaveMediaMessage(enmedia)
           var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
           var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
           pebz.sendMessage(from, resu, image, {quoted: troli})
           fs.unlinkSync(media)
           } catch (e) {
           return reply(`${e}`)
           console.log(e)
           }
           break   
     case 'smeme': case 'stickmeme': case 'sm': {
           var top = q.split('|')[0] ? q.split('|')[0] : ''
           var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
           ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           owgi = await  pebz.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
           tekks = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
           sendStickerFromUrl(from, `${anu1}`)
           } else {
           reply('Gunakan foto!')
           } 
           }
           break      
      case 'textstic':
            if (args.length == 0) return reply(`Example: ${prefix + command} pebz`)
            buffer = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${q}&color=black&apikey=${HardiApi}`)
            pebz.sendMessage(from, buffer, sticker, { quoted: troli })
            break
      case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pebz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
			buffer = fs.readFileSync(ran)
			pebz.sendMessage(from, buffer, image, {quoted: fkontak})
			fs.unlinkSync(ran)
			})
			break            
      case 'sticker': case 'stiker': case 'sg': case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pebz.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            pebz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pebz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            pebz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
            break
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/ 

           //+++ WELCOME +++\\
                    case 'welcome':   
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
         if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
         if ((args[0]) === 'on') {
         if (isWelkom) return reply('welcome sudah aktif')
         _welkom.push(from)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else if ((args[0]) === 'off') {
         if (!isWelkom) return reply('welcome sudah off sebelumnya')
             _welkom.splice(from, 1)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else {
         reply('on untuk mengaktifkan, off untuk menonaktifkan')
         }
         break
           
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/           
            case 'audio1':
            sendVn(audio1)
            break   
            case 'audio2':
            sendVn(audio2)
            break       
            case 'audio3':
            sendVn(audio3)
            break       
            case 'audio4':
            sendVn(audio4)
            break       
            case 'audio5':
            sendVn(audio5)
            break       
            case 'audio6':
            sendVn(audio6)
            break       
            case 'audio7':
            sendVn(audio7)
            break       
            case 'audio8':
            sendVn(audio8)
            break       
            case 'audio9':
            sendVn(audio9)
            break       
            case 'audio10':
            sendVn(audio10)
            break       
            case 'audio11':
            sendVn(audio11)
            break       
            case 'audio12':
            sendVn(audio12)
            break       
            case 'audio13':
            sendVn(audio13)
            break       
            case 'audio14':
            sendVn(audio14)
            break       
            case 'audio15':
            sendVn(audio15)
            break       
            case 'audio16':
            sendVn(audio16)
            break       
            case 'audio17':
            sendVn(audio17)
            break       
            case 'audio18':
            sendVn(audio18)
            break       
            case 'audio19':
            sendVn(audio19)
            break  
            case 'audio20':
            sendAudio(audio20)
            break 
            case 'audio21':
            sendVn(audio21)
            break   
            case 'audio22':
            sendVn(audio22)
            break   
            case 'audio23':
            sendVn(audio23)
            break   
            case 'audio24':
            sendVn(audio24)
            break   
            case 'audio25':
            sendVn(audio25)
            break   
            case 'audio26':
            sendVn(audio26)
            break   
            case 'audio27':
            sendVn(audio27)
            break   
            case 'audio28':
            sendVn(audio28)
            break   
            case 'audio29':
            sendVn(audio29)
            break   
            case 'audio30':
            sendVn(audio30)
            break   
            case 'audio31':
            sendVn(audio31)
            break   
            case 'audio32':
            sendVn(audio32)
            break   
            case 'audio33':
            sendVn(audio33)
            break   
            case 'audio34':
            sendVn(audio34)
            break   
            case 'audio35':
            sendVn(audio35)
            break
             case 'sound1':
            sendVn(sound1)
            break   
            case 'sound2':
            sendVn(sound2)
            break       
            case 'sound3':
            sendVn(sound3)
            break       
            case 'sound4':
            sendVn(sound4)
            break       
            case 'sound5':
            sendVn(sound5)
            break       
            case 'sound6':
            sendVn(sound6)
            break       
            case 'sound7':
            sendVn(sound7)
            break       
            case 'sound8':
            sendVn(sound8)
            break       
            case 'sound9':
            sendVn(sound9)
            break       
            case 'sound10':
            sendVn(sound10)
            break       
            case 'sound11':
            sendVn(sound11)
            break       
            case 'sound12':
            sendVn(sound12)
            break       
            case 'sound13':
            sendVn(sound13)
            break       
            case 'sound14':
            sendVn(sound14)
            break       
            case 'sound15':
            sendVn(sound15)
            break       
            case 'sound16':
            sendVn(sound16)
            break       
            case 'sound17':
            sendVn(sound17)
            break       
            case 'sound18':
            sendVn(sound18)
            break       
            case 'sound19':
            sendVn(sound19)
            break  
            case 'sound20':
            sendVn(sound20)
            break 
            case 'sound21':
            sendVn(sound21)
            break   
            case 'sound22':
            sendVn(sound22)
            break   
            case 'sound23':
            sendVn(sound23)
            break   
            case 'sound24':
            sendVn(sound24)
            break   
            case 'sound25':
            sendVn(sound25)
            break                	  	
            case 'sound26':
            sendVn(sound26)
            break   
            case 'sound27':
            sendVn(sound27)
            break       
            case 'sound28':
            sendVn(sound28)
            break       
            case 'sound29':
            sendVn(sound29)
            break       
            case 'sound30':
            sendVn(sound30)
            break       
            case 'sound32':
            sendVn(sound31)
            break       
            case 'sound32':
            sendVn(sound32)
            break       
            case 'sound33':
            sendVn(sound33)
            break       
            case 'sound34':
            sendVn(sound34)
            break       
            case 'sound35':
            sendVn(sound35)
            break       
            case 'sound36':
            sendVn(sound36)
            break 
            case 'audiomenu':
		    pebz.sendMessage(from, audios(prefix), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
            break
            case 'donasi':
	    	pebz.sendMessage(from, donasi(prefix, donasi), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break                 
//================================================================================/
//============================ E N D   F U N C T I O N ==============================/
//================================================================================/ 

default:
	if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				   try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
			    	} catch (err) {
					reply(`${err}`)
				    }
		        	} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
			    	try {
					return pebz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
				    } catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
