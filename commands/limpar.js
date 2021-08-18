exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "***・Você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando***"
    );
  const deleteCount = parseInt(args[0], 10);

  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "***・Forneça um número de até  \`99 mensagens\`  a serem excluídas***"
    );

  const ruther = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });

  message.channel.bulkDelete(ruther);
  message.channel
    .send(`***・ \`${args[0]}\`  Mensagens limpas nesse chat!***`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`***・Não foi possível deletar mensagens devido a:*** ${error}`)
    );
    
};