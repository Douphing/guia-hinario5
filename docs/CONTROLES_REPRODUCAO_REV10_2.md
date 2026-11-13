# Controles de reprodução e volume — REV10.2 (13/11/2026)

## Estado, versão e escopo
- **Arquivo gerado:** `teste-multimidia-V7.81.2-CONTROLES-VOLUME-TESTE.html`, evolução aditiva da V7.81.1, com os Hinos 1–200 e Coros 1–6 preservados.
- Correção no controlador **`v751-reproducao-continua`** e no acionamento de `loadHymnMedia`; o design dos ícones e da barra de mídia não foi alterado. Nenhuma edição em produção `index.html`, `sw.js` ou MP3.
- **Status:** arquivo local para teste. Publicação de `teste-multimidia.html` no GitHub requer envio e conferência separados. Não confundir documentos publicados com HTML testado.
- Dados `MULTIMIDIA` e `LETRAS` 1–190, Coros 1–6 e novos 191–200 preservados exatamente em relação à V7.81.1.

## Regras obrigatórias para todo hino novo
1. **Anterior / Próximo:** comandos imediatos da barra de transporte, navegando para o hino anterior/seguinte com mídia elegível, preservando a plataforma atual onde tecnicamente suportada.
2. **Ao terminar – Parar, Próximo, Repetir, Aleatório:** modos mutuamente exclusivos; aplicados no evento de término real e mantidos ao abrir outro hino.
3. Um MP3 `audio/hino-N.mp3` definido como `modoReproducao:'partitura'` representa **uma execução completa do hino**, mesmo quando a letra tem várias estrofes. **Não reproduzi-lo artificialmente uma vez por estrofe**: a opção de término deve agir quando o próprio MP3 concluir.
4. **Volume escolhido pelo usuário prevalece** em todos os MP3 e embeds YouTube/YouTube Music controláveis. Sincronizar mudanças pelo slider adicional e pelo controle nativo HTMLAudioElement; guardar preferência `guia-hinario5-volume-midia-v1` em `localStorage` quando permitido e sincronizar com `window.__guiaMp3Volume`. Preferência inicial 50% caso não exista valor anterior. **Não resetar ao tocar Próximo, Anterior, Repetir ou Aleatório.**
5. **YouTube e YouTube Music:** aplicar volume persistido por `YT.Player.setVolume` e `mute/unMute` no `onReady`, consultar `getVolume/isMuted` regularmente para detectar alterações feitas no player incorporado, e salvar o último volume antes de destruí-lo. Autoplay pode ser bloqueado pelo navegador e precisa de toque manual; manter aviso adequado.
6. **Spotify:** o iframe incorporado não fornece ao Guia o mesmo controle de volume, play/pause ou evento de término. A barra pode oferecer **Anterior/Próximo manuais**, trocando a faixa incorporada, mas o usuário inicia a nova faixa no player Spotify. **Não habilitar modos Parar/Próximo/Repetir/Aleatório ao término nem o botão de play da barra do Guia para Spotify**; mostrar a limitação, sem prometer execução contínua automática.
7. Fechar a mídia não deve fechar o modal do hino. Parar interrompe a mídia mantendo controles para retomar; minimizar deve preservar o contexto e manter funcional o mini-player/float.
8. O modo aleatório deve escolher um hino diferente dentre os disponíveis da mesma modalidade; último hino sequencial mostra mensagem de término em vez de apontar para arquivo inexistente.
9. Preservar a regra de mídia externa da REV10.1: número do volume/álbum **não é** o número do hino; confirmar título, número, edição e intérprete.

## Auditorias técnicas realizadas
- **Integridade**: código novo sintaticamente válido nos 33 scripts inline (um script adicional de volume), 200 hinos e seis coros, dados e links invariáveis.
- **Navegador isolado**: 12 de 12 verificações aprovadas: início em 50%, execução única, controles exibidos, volume nativo 37%, Próximo/Anterior preservando 37%, Repetir, Próximo ao término, Aleatório, Parar ao término, navegação Spotify sem falsas promessas e ausência de erros JS.
- **API YouTube simulada:** `onReady.setVolume(41)`, captura de alteração no player para 26%, abertura do próximo player com 26% e zero erros.
- **Limite:** o navegador automatizado com a página integral bloqueou/ficou preso em recursos locais. A validação de YouTube/YouTube Music **reais** (terminar, volume, play automático), Spotify real, mini-player flutuante, layout em aparelhos e PWA deve ser feita na página publicada por HTTPS. Não registrar essas verificações como concluídas.

## Checklist de aceite em celular e desktop
- [ ] Abrir MP3 Hino 191; definir volume em 35% pelo slider nativo; Próximo vai para 192 mantendo 35%, Anterior retorna mantendo 35%.
- [ ] Definir 61% pelo popover Vol.; Repetir 191 e Aleatório mantêm 61%; testar também após atualizar a página.
- [ ] Com `Ao terminar: Próximo`, reproduzir um MP3 completo e conferir que o novo hino abre **imediatamente ao fim**, sem multiplicar a execução pelo número de estrofes.
- [ ] Conferir `Parar` e `Fechar` com estados e modal corretos, inclusive mini-player de MP3 e vídeo flutuante.
- [ ] Usar YouTube e YouTube Music por HTTPS: volume mantém o valor ao navegar, e os modos de término obedecem ao fim real ou ao fim demarcado nas coletâneas (191, 200).
- [ ] Confirmar avisos de bloqueio de autoplay; validar que nenhum controle de Spotify promete reprodução que a plataforma não permite.
- [ ] Testar desktop e celular 320/390px, não perder botões, o painel de metrônomo, registros, favoritos e player minimizado.
- [ ] Após aprovação explícita, decidir publicar somente `teste-multimidia.html` V7.81.2 e depois realizar checklist online. **`index.html` somente com autorização separada.**
