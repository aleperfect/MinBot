let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*Mensaje:* ${pesan}`
  let teks = `*୧ 𝙈𝙞𝙣𝘽𝙤𝙩 💛*\n\n⇢ ${oi}\n\n⇢ *Etiqueta:*\n`
  for (let mem of participants) {
  teks += `🌼･ @${mem.id.split('@')[0]}\n`}
  teks += ` — 𝗠𝗜𝗡𝗕𝗢𝗧`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler