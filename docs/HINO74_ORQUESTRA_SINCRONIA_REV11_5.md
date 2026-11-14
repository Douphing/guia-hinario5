# Hino 74 — Orquestra V3, fermatas contínuas, baixos reforçados e estudo com BPM sincronizado — REV11.5
**14/11/2026. Versão em TESTES:** áudio Hino 74 V3 e HTML local V7.81.13. **Nenhum arquivo de produção foi alterado.**

## Qual problema foi corrigido?
- A V1 editava o MP3 pronto com cortes e crossfades na sustentação das fermatas. O usuário percebeu corretamente **o acorde interrompido e reatacado**.
- A V2 apenas acelerava aquele áudio já editado de 72 para 84 BPM. Corrigiu o BPM mas perpetuou a emenda; **não** reforçou os graves e **não** vinculava o MP3 ao metrônomo, apesar de apresentar 84 BPM no modal.
- A V3 foi **renderizada novamente a partir do arquivo original MSCX/MIDI**, com notas, divisão da 1ª/2ª terminação e da 3ª terminação/final, ligaduras e fermatas. Não há corte de uma gravação pronta nem ataque adicional no interior da fermata.

## Andamento musical — norma do projeto
A partitura original informa **♩ = 72–88 BPM**, média aritmética 80. **Escolha da V3: ♩ = 83 BPM**, discretamente acima da média na direção do máximo, sem escolher o teto 88. Não adotar a mínima por padrão nem confundir unidade de pulsação (semínima, mínima, colcheia etc.) ao configurar o MP3 ou metrônomo. As próximas cargas devem aplicar esse critério musical, sujeito à aprovação auditiva e às indicações da partitura.

## Fermatas e graves
- Compasso 16 da partitura possui **semibreve com fermata e `timeStretch=2`** na 1ª/2ª terminações. Na interpretação V3, a semibreve escrita recebe seus quatro tempos normais em 83 BPM mais prolongamento expressivo de aproximadamente 0,94 s; acorde **sustentado ininterruptamente em MIDI por ~3,68 s** e depois liberação/respiração natural de ~0,15 s antes do ataque da estrofe seguinte. **Sem recorte/crossfade de áudio.**
- A 3ª terminação é diferente e **não recebe a mesma fermata**; o Final (compassos 18–26) é executado como na partitura.
- A instrumentação sintetizada ganhou maior presença de **tuba, contrabaixo, contrabaixo na oitava grave, violoncelo e fagote**, com equalização moderada na região grave. Violinos continuam com a melodia.
- Biblioteca usada: **TimGM6mb.sf2**, que é síntese MIDI General MIDI, **não uma biblioteca de orquestra real gravada**. Não afirmar realismo acústico perfeito sem avaliação do usuário.

## Implementação do metrônomo → MP3
- O HTML **V7.81.12 NÃO ligava o MP3 ao metrônomo**: só alterava o BPM indicado na UI, enquanto o arquivo V2 era uma gravação estática de 84 BPM.
- HTML de testes **V7.81.13**, derivado aditivamente da V7.81.12: Hino 74 passa de 84 para **83 BPM** no metrônomo, com mínimos/máximos inalterados. Adicionado **um pequeno checkbox `MP3 acompanha BPM` dentro do painel do metrônomo**, ativo por padrão **somente nesse hino piloto**. Ao selecionar BPM `v`, a taxa do áudio fica `playbackRate = v/83`. Exemplos: 83 → 1,00×; 85 → 1,024×; 77 → 0,928×. Mudanças de BPM com áudio já aberto são aplicadas imediatamente. Ao desativar, restaura a velocidade manual previamente salva; não substitui a preferência de velocidade do navegador quando a ligação está ativa.
- Configurar `HTMLMediaElement.preservesPitch=true` (e `webkitPreservesPitch`, quando suportado) para tentar manter a altura das notas; **a qualidade varia conforme o navegador**. O ajuste altera a **velocidade do MP3 durante a reprodução**, não cria arquivo novo e **não sincroniza a fase de cada clique do metrônomo** à execução (somente o andamento).
- **Piloto restrito ao Hino 74** para evitar regressões em 210 hinos, coro, MP3 e vídeos externos. Avaliar antes de disponibilizar a opção nas outras faixas; YouTube/Spotify/YTM não foram modificados.

## Integridade técnica e validações
- A partitura-fonte Hino 74 foi recuperada do ZIP MuseScore previamente fornecido. Fonte original preservada em pacote; arquivo MIDI V3 e código gerador reproduzível incluídos.
- MP3 V3: estéreo 44,1 kHz, 256 kbps, duração **~166,37 s / 2min46s**. Nível médio aproximado **−17,0 dBFS**, pico **−3,9 dBFS**, sem amostras PCM > 1 na decodificação analisada. Técnicas de medição **não substituem validação auditiva**.
- **34 scripts JavaScript sintaticamente válidos** (o HTML anterior tinha 33 scripts; um novo script controla o sincronismo). Dados `LETRAS` de 1–210/6 coros completamente iguais aos da V7.81.12; `MULTIMIDIA` igual exceto **metronomo.bpm 74: 84→83**; links, MP3 outros hinos, partituras, layout desktop sem rolagem, botões sempre visíveis e volume/mute intactos.
- **Teste em Chromium com HTML carregado em memória:** criação do modal do Hino 74; checkbox aparece; áudio `playbackRate=1` no BPM83, `1,024` no 85, `0,928` no 77; desmarcar restaura 1×; remarcar reaplica taxa; nenhum erro JS. **O teste não reproduziu o arquivo MP3 real dentro da página**: reprodução em HTTPS e avaliação das fermatas, timbres e baixo permanecem **PENDENTES**.
- GitHub consultado antes de documentar: `index.html` mantém blob `75e029955ec02787253ea6453849cf8712d45c8e`; `teste-multimidia.html` remoto está em `22d92c3faff4ddfdbeadd416849e4d23889ae452` (V7.81.12). **Não foi publicada V7.81.13 nem o MP3 V3 no GitHub** por esta operação documental.

## Checklist de aprovação
- [x] MSCX original, indicação ♩72–88, 83 BPM e duas fermatas das terminações 1 e 2 conferidos.
- [x] MP3 orquestral regenerado, não apenas acelerado/cortado.
- [x] Duração contínua ~3,68s em cada nota cadencial + respiração curta, sem reataque MIDI interno.
- [x] Violoncelos, tuba, contrabaixos e subgraves reforçados.
- [x] Sincronização BPM→playbackRate pilotada no HTML para Hino 74, habilitação reversível.
- [x] 34 scripts válidos, dados 1–210/Coros preservados, navegador simulado sem exceções.
- [ ] Ouvir **fermata 1 e 2** e diferenciar o novo sustain natural dos cortes de V1/V2.
- [ ] Ouvir no celular, fones e caixa para avaliar tuba, contrabaixo, tenor e equilíbrio de cordas.
- [ ] Testar em HTTPS a música real nos BPM 72, 77, 83, 85 e 88, preservação de altura, mute/volume, e o comportamento dos botões de sequência e passagem entre modais.
- [ ] Só promover `audio/hino-74.mp3` e `teste-multimidia.html` após aprovação do responsável. **`index.html` de produção exige aprovação separada**.

**Regra:** não modificar dados aprovados ou substituir MP3 publicado antes do aceite. Este registro substitui apenas o estado de teste de Hino 74 na REV11.4; preserva integralmente o histórico anterior.
