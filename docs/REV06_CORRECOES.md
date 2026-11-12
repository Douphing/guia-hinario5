## REV06 — 12/11/2026 — V7.78.2 EM TESTES (ainda não publicada)
**Estado confirmado:** MP3 161–170 e partituras `assets/partituras/hino-N-p1.jpg` 161–170 JÁ estão no GitHub. O HTML V7.78.2 está preparado localmente, aguardando aprovação e upload na página de TESTES. `index.html` permanece protegido.

**Correções isoladas no HTML de teste V7.78.2 (base V7.78.1):**
1. **Hino 162:** a partitura traz **Final** depois da 3ª terminação. A frase “Oh! Que doçura...” foi preservada no campo `final`, não `coro`; estrutura: `estrofe-1, estrofe-2, estrofe-3, final`.
2. **Navegação do modal:** corrigido outro limite fixo de 160 hinos no `buildHymnNavHtml`, independente do sequenciador corrigido em V7.78.1. Agora Anterior/Próximo segue os números cadastrados, incluindo 160→161 e 169→170.
3. **MP3:** controles nativos de áudio no celular podem mostrar somente silenciar; adicionado `Vol.` que revela slider 0–100% em popover, sem aumentar a altura do modal. Em iOS, o controle efetivo do volume pode exigir botões físicos.
4. Nenhuma modificação nas letras dos Hinos 1–160, nos MP3, partituras, player externo ou `index.html`.

**Regra musical permanente para as próximas cargas (Hino 171+):** conferir individualmente **rall.** (desaceleração progressiva), **poco rall.** (desaceleração leve), **tercinas/quiálteras** (subdivisão rítmica correta), ligaduras de prolongamento e expressão, fermatas moderadas, ritornelos, casas e finais. O andamento ligeiramente mais vivo só se aplica quando a partitura e o caráter do hino permitirem; jamais regularizar tercinas ou prolongar fermatas arbitrariamente. As partituras MuseScore 161–170 verificadas não continham marcadores textuais `rall.`/`poco rall.` ou objetos de tercina, mas isso não dispensa inspeção futura.

**Testes locais V7.78.2:** scripts JS sem erros; navegadores Chromium simulados 320, 390 e 1280 px sem erros; Final do 162 confirmado; navegação e slider 67% funcionais sem overflow horizontal. Ainda requer testes no dispositivo real e aprovação antes de publicar.

**Instrução de continuidade:** REV06 prevalece sobre status históricos REV04/05. Não confundir `preparado`, `validado`, `aprovado` e `publicado`.

