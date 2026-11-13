> **REV10.8 SUBSTITUI A INTERFACE DESTA VERSÃO:** os botões personalizados `Vol.`/`⋮` introduzidos na V7.81.5 foram retirados da V7.81.6, a pedido do usuário. O **navegador usa menu nativo**, e a sequência fica recolhida. Os critérios de mute reversível e preservação de dados continuam vigentes. Aumento de sonoridade: dez MP3 masterizados +4,3 dB em pacote de teste. Ver [documento REV10.8](PLAYER_NATIVO_MASTERIZACAO_REV10_8.md).

---

# Player MP3 V7.81.5 — REV10.7 (13/11/2026)

## Regra vigente
A V7.81.5 é uma **versão de TESTE local**, sucessora aditiva da V7.81.4. Corrigir somente o player MP3 e a interface das mídias, preservando os Hinos 1–200, Coros 1–6, MP3 V4.4, letras, partituras, metronômo, registros, favoritos, YouTube/YouTube Music/Spotify, player de vídeo e todos os links da REV10.6. **Não alterar `index.html` de produção nem `sw.js` sem aprovação explícita.**

### Quatro correções

1. **Remover a tarja informativa redundante** abaixo do player MP3 com frases “Reprodução conforme a partitura” e “MP3 único • execução completa do hino”. O componente pode manter estado interno de conclusão, mas **não deve ocupar espaço visual**. Em caso de MP3 ausente, mostrar mensagem de erro real.
2. **Menu próprio de MP3**, acionado no botão compacto **⋮** ao lado de `Vol.`, independente das opções dos três pontos nativos do navegador. Deve apresentar **Velocidade**: `0,75×`, `1×`, `1,25×`, `1,5×`, `2×`, e ação **↓ Baixar MP3** com atributo `download` e caminho do mesmo arquivo `audio/hino-N.mp3`. Manter velocidade escolhida ao navegar para outros hinos e após recarga quando armazenamento disponível. Fechar menu após escolha, ao tocar fora ou pressionar Escape.
3. **Mute com restauração do último volume audível**: 0% significa mídia silenciada, mas não substitui a preferência positiva do usuário. Persistir `guia-hinario5-volume-midia-v1` (0 durante mute) e `guia-hinario5-ultimo-volume-audivel-v1` (último nível maior que zero). Abrir próximo/anterior/repetir/aleatório ainda silenciado, mantendo `audio.volume` positivo internamente e `audio.muted=true`; desmutar no botão nativo ou `Vol. → Ativar som` restaura a intensidade anterior. Quando não silenciado, preservar o mesmo volume. Para YouTube/YouTube Music via API, configurar `setVolume` usando último volume audível quando o estado preferido for mute e aplicar `mute`, permitindo `unMute` posterior; Spotify conserva volume próprio por limite de API.
4. **Não mostrar “Fonte enviada pelo usuário” no botão YouTube**: preservar a origem nos dados internos de curadoria sem exibí-la como legenda de botão. Créditos musicais válidos continuam sujeitos à política REV10.3.1.

### Proteções e compatibilidade
- Não modificar conteúdo nem ID de `MULTIMIDIA` / `LETRAS`; apenas o renderer do botão e o código de controle MP3.
- Não reverter transporte anterior/próximo, modos Parar/Próximo/Repetir/Aleatório, minimizar, fechar só mídia, preferências de volume, partituras e registros.
- A velocidade do MP3 não altera a velocidade dos vídeos externos; comportamento e restrições das APIs YouTube/YTM/Spotify seguem REV10.2.
- Não utilizar função de download para mídia externa nem violar restrições dos serviços; Baixar MP3 refere-se somente aos arquivos locais do projeto.
- A identidade musical continua: **YouTube instrumental** (Orquestra Sacra, Orquestra Paulista, Orquestra Hymns, Antony Andrey instrumental); **YouTube Music cantado** (Vozes do Campo — Hinos CCB prioritária); **Spotify Orquestra Sacra prioritária**. Nunca confundir número de volume/álbum com número e título do hino.

### Auditoria
- `node --check`: **33 scripts inline válidos**.
- **17/17 casos de navegador isolado** aprovados para volume inicial, tarja removida, menu e download, velocidade, persistência de velocidade, mute nativo, volume audível armazenado, próximo hino ainda silenciado, desmute, Anterior e botão `Ativar som`.
- Trecho estático de dados das tabelas de hinos e letras **idêntico à V7.81.4**; metadados de origem mantidos.
- **Teste visual integral não concluído** por restrições/instabilidade do navegador automatizado com HTML grande; MP3 reais em HTTPS, download no aparelho, YouTube/YTM e layout de dispositivos ainda exigem conferência manual.

### Checklist de aprovação
- [ ] Substituir **somente `teste-multimidia.html`** em ambiente de testes pelo HTML V7.81.5; não tocar em produção.
- [ ] Abrir Hino 191 e verificar ausência da tarja abaixo do MP3.
- [ ] Na barra do MP3, tocar **⋮ ao lado de Vol.** e verificar velocidade e download; testar download do arquivo correto.
- [ ] Ajustar a velocidade para 1,25×; avançar ao 192 e conferir que permanece 1,25×; voltar para 1×.
- [ ] Ajustar volume para 37%, silenciar no controle nativo, avançar e **desmutar**: deve retornar a 37%; repetir por `Vol. → Ativar som`.
- [ ] Testar vídeo YouTube e YTM com políticas reais de autoplay e volume; Spotify só com capacidades de iframe.
- [ ] Conferir celular 320/390px e desktop, rolagem, botão fechar mídia, menu e mini-player.
- [ ] Confirmar que a etiqueta “Fonte enviada pelo usuário” não aparece nos botões de YouTube, mas os links continuam corretos.
- [ ] Preservar registros/favoritos e sequência; solicitar aprovação antes de modificar `index.html`.

**Status:** V7.81.5 gerada **somente para testes**. Atualizar documentação no GitHub não publica automaticamente o HTML. A produção permanece protegida.
