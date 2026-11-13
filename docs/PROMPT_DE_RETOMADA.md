# Adendo REV10.1 — regra de mídia externa e auditoria de volume
A continuação V7.81.1 local acrescentou as mídias externas dos Hinos 191–200, **sem alterar** Hinos 1–190, Coros 1–6, MP3 Orquestra V4.4 ou `index.html`. Confirmar primeiro o estado efetivo dos arquivos no GitHub: o teste remoto segue V7.80 até publicação. Antes de declarar novo lote concluído, buscar por **todos os serviços (Spotify, YouTube, YouTube Music)** em todas as fontes aprovadas e conferir cada gravação por **número e título do Hinário nº 5**. Não confundir **número do álbum/volume, ordem da faixa ou outra edição** com o número do hino; nunca inventar ID. Tratar busca `Spotify Pesquisar` como busca e vídeo compartilhado YT/YTM como origem comum, não faixa independente. Documentar IDs, intérpretes, limites de coletâneas e pendências. Consultar [fontes e mapa 191–200](FONTES_EXTERNAS_191_A_200_REV10_1.md). Fazer testes em celular e desktop antes da publicação/aceite. Preservar integralmente toda a base aprovada.



**Verificação final de publicação (13/11/2026):** o arquivo remoto `teste-multimidia.html` já corresponde exatamente à base local **V7.81**, SHA Git `b3df54ec10ea65853a298b8ca2d541ae11ef51a1`; ainda **não** contém os metadados novos da **V7.81.1**. Somente a documentação REV10.1 foi publicada nesta etapa; a produção `index.html` continua intacta. Nas notas anteriores, o status V7.80 refere-se a uma consulta anterior e está superado.

---

# Prompt atual — REV10 / V7.81 preparada para TESTE

Retomar o **Guia do Hinário nº 5 – CCB** a partir do `teste-multimidia.html` mais recente **efetivamente verificado e aprovado**. A base confirmada no GitHub em 13/11/2026 era V7.80; um pacote local V7.81 adicionou os Hinos 191–200 com MP3 orquestra V4.4, letras, partituras e metrônomo. Antes de modificar, compare com GitHub; **não presumir que V7.81 esteja publicada** e **não tocar `index.html` sem autorização**.

Preservar 1–190, Coros 1–6, registros, favoritos, PWA, layout responsivo e todos os controles do modal e metrônomo. Manter só `audio/hino-N.mp3`, sem segunda biblioteca. Fazer cada nova música pela fonte MSCX/MusicXML/MIDI original, respeitando fermatas, ligaduras, ritornelos, figuras, finais e andamento musical próximo do limite indicado. Soprano em cordas menos sintéticas, tenor distinto e presença de tuba/contrabaixo; TimGM6mb foi usado na V4.4, com limitações. Não inventar links externos.

**Passos imediatos:** (1) testar V7.81 em celular e desktop; (2) confirmar navegação de 190 a 191, 198 e 200, partituras em múltiplas páginas, áudio e metrônomo; (3) auditar estrofes/coros e links de mídias externas 191–200; (4) obter aprovação antes de qualquer promoção a produção; (5) registrar nova versão, REV11, changelog, checklist e pacote após aceite. Os arquivos do GitHub e o pacote de teste sempre têm status independente.

---

# Prompt de retomada — Guia do Hinário nº 5 (CCB)

**Revisão do dossiê: REV09 — 12/11/2026.**

Use este texto ao iniciar um novo chat e **anexe também** `DOCUMENTACAO_CONTINUIDADE.md` e o `teste-multimidia.html` da última versão de teste aprovada. Para trabalho de áudio, anexe partituras/MIDI e o MP3 aprovado.

---
### Verificação posterior de publicação — 12/11/2026 (REV09)

**MP3 171–180 já estão publicados no GitHub em `audio/` e tiveram seus SHA Git comparados aos bytes exatos dos dez MP3 V3.1 locais: 10/10 idênticos. NÃO reenviar esses áudios nem substituí-los.** O HTML **V7.79** e as **12 imagens de partitura** ainda não estavam no repositório na consulta posterior: `teste-multimidia.html` ainda é V7.78.3 e `assets/partituras` não tem arquivos 171–180. Próxima tarefa: subir apenas HTML de teste + 12 JPG, testar em aparelho real; `index.html` continua protegido. Este estado prevalece sobre instruções da REV09 escritas antes da checagem.

## ESTADO ATUAL — REV09
- Usuário decidiu **manter os MP3 Orquestra V3.1 dos Hinos 171–180 sem alterações**, apesar da percepção de oscilações de volume. Para os PRÓXIMOS LOTES, empregar apenas **sustain natural**, com transições ligadas, evitando modulação artificial de amplitude/vibrato.
- A nova base **V7.79 de TESTE** foi preparada para 171–180 (letras, MP3, metrônomo, partituras e YouTube Music). Não foi publicada/aprovada nesta conversa.
- **Partituras JPG: 12 arquivos**, porque os Hinos 171 e 177 ocupam DUAS páginas; os originais 171/172 e 177/178 partilhavam folha, já separadas corretamente.
- **Hino 172 sem coro**. Dados do metrônomo seguem a partitura, não a velocidade arbitrária do áudio.
- YouTube Music usa `0AS9FwjZnL4` com início individual por capítulo. Spotify e YouTube individual pendentes de confirmação específica.
- O HTML V7.79 deriva por 3 inserções isoladas da V7.78.3; preservar os 170 anteriores, a ordem de abertura do metrônomo/vídeo, `index.html` produção e `sw.js`.
- Após upload: conferir funcionamento real e obter aprovação; atualizar docs/manifesto, depois continuar a próxima carga.

## ESTADO ATUAL — REV08
- **MP3 171–180 V3.1 foram GERADOS, mas ainda não APROVADOS como lote.** Hinos 171 e 177 usam amostras V3.1 já apreciadas, 172–176/178–180 usam o mesmo arranjo.
- Vibrato discreto e soprano médio, cordas e madeiras equilibradas, tenor da clave de fá e tuba/contrabaixo graves presentes; andamento do lote anterior preservado.
- Banco disponível: `TimGM6mb.sf2`. **Sonatina ainda não instalada**, portanto não prometer sonoridade de biblioteca profissional.
- Próximo passo: avaliação dos dez MP3, aprovação musical, envio para `audio/` e só então integração de letras/partituras/mídias no HTML de teste. Não substituir o `index.html`.
- Manter a integridade das ligaduras, fermatas, ralentandos e tercinas segundo a partitura de cada hino.

## ESTADO ATUAL — REV07
- Usuário **aplicou a V7.78.3** do `teste-multimidia.html` (correção da ordem de abertura do metrônomo/vídeo no desktop). Continuar observando eventuais regressões; nunca alterar a produção sem aprovação.
- **MP3 171–180 gerados em teste**, não aprovados, não publicados. Base instrumental V4.1; +4,5% BPM relativo ao original, a validar musicalmente. Conferir fermatas, ligaduras, rall./poco rall. e tercinas em cada partitura. Não confundir testes locais com publicação.
- Prioridade é a avaliação auditiva de 171–180; depois enviar apenas os aprovados para `audio/`, integrar letras/partituras/mídias no HTML de testes e atualizar docs ao aprovar.
- Um único arquivo `audio/hino-N.mp3` por hino. Hinos 1–170 não devem ser modificados sem correção autorizada.

## MARCO MAIS RECENTE — REV06 (12/11/2026)
- MP3 e partituras JPG dos Hinos 161–170 já confirmados no GitHub, pasta `audio/` e `assets/partituras/`.
- **HTML V7.78.2 EM TESTES**: Hino 162 tem **Final** (não Coro); navegação Anterior/Próximo do modal agora funciona após o 160; MP3 ganhou ajuste `Vol.` com slider compacto.
- **Não publicar V7.78.2 nem modificar `index.html` sem aprovação de teste em aparelho real.**
- Nas próximas partituras, identificar e reproduzir `rall.`, `poco rall.`, tercinas/quiálteras, ligaduras, fermatas, casas e finais. Executar cada hino com fidelidade, mesmo buscando andamento ligeiramente mais vivo.
- Ao retomar, usar o pacote REV06 e confrontar hashes do repositório; um único MP3 por hino em `audio/`.

## MARCO MAIS RECENTE — REV05 (12/11/2026)
- O usuário **aprovou os dez MP3 Hinos 161–170**. Conferir upload em `audio/` antes de alegar publicação; na última checagem ainda não estavam no GitHub.
- Próximo passo: integrar Hinos 161–170 no `teste-multimidia.html` com letras e mídias, preservando a produção.
- **Para os MP3 171–180 e próximos:** buscar andamentos um pouco acima da média da faixa indicada, **somente quando o caráter e a partitura permitirem**; não alterar ligaduras, fermatas ou finalizações.
- Continuar com um único `audio/hino-N.mp3`, referência timbrística Hino 61 V4.1. Atualizar documentação/prompt/changelog a cada aprovação.

## REGRAS ATUAIS REV04 — sobrepõem recomendações históricas de versões anteriores
- **Hino 61 V4.1 aprovado** como referência musical: orquestra mais natural, tuba grave presente, ligaduras revistas, fermatas moderadas; a V3 fica em backup.
- **Um único MP3 por hino** sob `audio/hino-N.mp3`. **Não criar** segunda biblioteca em `audio/orquestral/` nem inserir escolha extra no modal. Manter a pasta experimental apenas para arquivo histórico até remoção autorizada.
- O `teste-multimidia.html` **V7.77 preparado** é a base V7.76 com apenas `?v=777` no Hino 61; `audio/hino-61.mp3` deve conter a V4.1 aprovada. Não modificar `index.html` ou `sw.js` automaticamente.
- O áudio enviado a `audio/hino-61.mp3` **é compartilhado com a produção** que aponta para essa URL. Confrontar SHA/URL/cache antes de declarar publicação.
- Priorizar a expansão 161+ e as mais de 300 mídias/coros pendentes. Não refazer automaticamente os Hinos 1–160.
- A cada aprovação, atualizar documentação, changelog, checklist, prompt e pacote REV, deixando explícitos os estados de teste/aprovação/publicação.


Estamos continuando o projeto **Guia do Hinário nº 5 – CCB** (HTML/CSS/JavaScript/PWA, repositório Douphing/guia-hinario5). Leia por completo o arquivo `DOCUMENTACAO_CONTINUIDADE.md` e examine o `teste-multimidia.html` que anexei **antes de propor alterações**.

**Regras obrigatórias:** nunca reconstruir o projeto do zero; **não modificar os Hinos 1–120**, nem alterar involuntariamente 121–160, coros, letras, MP3, mídias, metronomo, partituras, favoritos, registros, compartilhar, layout e PWA. Nunca modificar o `index.html` de produção sem minha aprovação. Partir da última versão de teste confiável e fazer mudanças cirúrgicas, com backup versionado, diff e testes visuais no celular e no desktop.

**Estado de referência em 12/11/2026 (REV03):** HTML V7.76; a orquestra virtual do Hino 61 **V3 — Tuba Grave** está aprovada **como áudio separado**, não integrada automaticamente. As próximas frentes são (1) construir hinos 161 em diante e suas mídias verificadas; (2) preparar arranjos orquestrais de outros hinos com partitura e fermatas/ligaduras fiéis; (3) organizar comentários históricos num changelog separado. Não usar V7.72 como base; ela apresentou regressões graves.

**Padrão musical já aprovado para as próximas cargas:** a V3 foi aprovada auditivamente em 12/11/2026 e passou a ser a referência. A V2 foi mantida apenas para comparação e MIDI-base. O arquivo V3 não está integrado ao Guia.

**Aplicação nas próximas cargas:** ao criar MP3s novos com partitura/MIDI, usar a **sonoridade orquestral **V3 — Tuba Grave** do Hino 61** como referência: graves presentes (tuba audível e baixo sustentado sem abafamento), metais, madeiras e cordas equilibrados, melodia clara, ligaduras respeitadas e fermatas breves e musicais. Cada hino conserva **suas próprias** notas, repetição, estrofes/coros, pausas e finais; **não replicar o desenho musical do Hino 61 indiscriminadamente**. Preservar os MP3 atuais, exportar as novas versões separadas e validar antes de integrar. Não deixar a construção dos demais hinos e mídias em segundo plano.

**Atualização documental obrigatória:** sempre que eu aprovar uma implementação, áudio, correção ou mudança de regra, na mesma entrega atualize `DOCUMENTACAO_CONTINUIDADE.md`, `CHANGELOG.md`, `PROMPT_DE_RETOMADA.md`, checklist pertinente e `SHA256SUMS.txt`; gere novo pacote ZIP identificado por revisão. **Não deixar a aprovação apenas neste chat.** Manter explícitos os estados “teste”, “aprovado”, “integrado” e “publicado”, sem assumir que aprovação implica publicação.

**Sua primeira resposta deve:** (a) confirmar os arquivos recebidos, a versão e as diferenças entre código e áudio de referência; (b) resumir os dados/recursos que devem ser protegidos; (c) indicar exatamente quais trechos serão alterados para a solicitação atual. **Não edite nada além da solicitação.** Quando for autorizada a mudança, entregue `teste-multimidia.html`, uma cópia com a nova versão e teste de regressão. Não confunda teste local com funcionamento confirmado no GitHub Pages.

**Solicitação atual:** [DESCREVER AQUI O QUE PRECISO NESTE NOVO CHAT]