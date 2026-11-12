# Prompt de retomada — Guia do Hinário nº 5 (CCB)

**Revisão do dossiê: REV04 — 12/11/2026.**

Use este texto ao iniciar um novo chat e **anexe também** `DOCUMENTACAO_CONTINUIDADE.md` e o `teste-multimidia.html` da última versão de teste aprovada. Para trabalho de áudio, anexe partituras/MIDI e o MP3 aprovado.

---
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