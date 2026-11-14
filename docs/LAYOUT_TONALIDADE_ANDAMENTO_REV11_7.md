# REV11.7 — Organização musical: tonalidade e andamento juntos (V7.81.16 TESTE)
**Data:** 14/11/2026. **Status:** HTML local para testes, sem publicação de código em produção.

## Alteração aprovada
O usuário aprovou uma referência de reorganização do modal do Guia. O cabeçalho do metrônomo exibe **Tonalidade** e **Andamento** **lado a lado**, com rótulos claros, sem repetir dados em faixas extras. Os controles de BPM, pulso, volume e sincronização MP3 permanecem **dentro do metrônomo**. O painel continua com ação Abrir/Fechar, partitura e layout responsivo.

- **Cada hino** mostra a tonalidade e o valor de andamento já cadastrado no objeto `MULTIMIDIA[n].metronomo`. Preservar o símbolo da unidade de pulsação: ♩, ♪, ♩. ou 𝅗𝅥 conforme a partitura. Não inventar BPM nem normalizar os hinos numa unidade errada.
- **Hino 74:** mínimo 72, máximo 88, **andamento inicial e botão Padrão em 84 BPM**, escolha musical explicitamente aprovada. A média aritmética da faixa é 80 BPM; **não apresentar 84 como média matemática**. O MP3 V3 foi gravado em 83 BPM e, com `MP3 acompanha o andamento` ativo, ajusta `playbackRate=BPM/83`. A opção é piloto somente para o Hino 74.
- **Hinos 205 e 208:** exemplos validados sem perda da unidade ♩. 54 e 𝅗𝅥 53, respectivamente. A informação visível no cabeçalho segue o valor do metrônomo, não o BPM interno do MIDI de síntese.
- O novo resumo ocupa **a mesma altura de 38 px** do cabeçalho anterior nos tamanhos comuns, não introduzindo rolagem ou quebrando a linha única de dez botões da mídia. Preservar modal desktop amplo, com partitura e controles visíveis.

## Escopo técnico
- Base: `teste-multimidia` local **V7.81.15**.
- Saída: **V7.81.16**, contendo **um bloco CSS, um bloco JavaScript de apresentação e um comentário de versão** adicionados; removendo esses acréscimos, os bytes de conteúdo da V7.81.15 são idênticos. Não alterar `MULTIMIDIA`, `LETRAS`, links externos, MP3, partituras, favoritos, registros, metrônomo funcional ou caches.
- **35 scripts JavaScript executáveis** com sintaxe válida em `node --check` (ignorar os scripts de metadados JSON-LD).
- Navegador Chromium: conferência em **320×720, 390×844, 1027×392, 1280×720, 1600×900**; Tonalidade e Andamento legíveis, sem overflow horizontal; geometria de rolagem igual ou menor que na base anterior. Em janelas excepcionalmente baixas, a base V7.81.15 já possuía rolagem; esta revisão **não é correção adicional de rolagem**.
- No Hino 74, entrada **84**, slider para **88** atualiza cabeçalho/velocidade **1,06×**, botão Padrão retorna **84**. Hinos 205/208 e 210 mantêm sua indicação original.
- **Limitação:** testes de layout/JavaScript foram em navegador local com HTML na memória; MP3 e plataformas externas não foram reproduzidos em HTTPS nesta verificação. O recurso de sincronização de andamento segue a implementação previamente testada na REV11.5/REV11.6.

## Próximas verificações
- [ ] Publicar **somente `teste-multimidia.html`** em ambiente de testes e conferir nos dispositivos reais.
- [ ] Conferir Hino 74 em 84 BPM, slider 72–88, Padrão 84, opção MP3 acompanha andamento, volume e mute.
- [ ] Verificar que cabeçalho aparece corretamente nos demais hinos, respeitando ♩, ♪, ♩. e 𝅗𝅥.
- [ ] Verificar modal de desktop com metrônomo e MP3 abertos, controles sempre à mostra, miniatura da partitura e ausência de rolagem regressiva.
- [ ] Só considerar a versão aprovada após validação visual e funcional.
- [ ] **Não alterar `index.html` de produção nem `sw.js` sem autorização expressa.** A atualização documental não implica upload do HTML.

Esta revisão atualiza a organização da interface, preservando a política musical dos botões (YouTube instrumental das fontes aprovadas, YouTube Music cantado com prioridade Vozes do Campo, Spotify priorizando Orquestra Sacra) e o histórico anterior.
