# Continuidade REV11 — Hinos 201–210 / TESTE V7.81.8
**13/11/2026 — carga preparada para avaliação, não aprovada para produção.**

## Estado do repositório
O estado verificado da branch `main` antes da entrega era **`index.html` e `teste-multimidia.html` exatamente iguais à V7.81.7**, blob Git `75e029955ec02787253ea6453849cf8712d45c8e`. A V7.81.8 foi construída **aditivamente a partir dessa base idêntica** em arquivo local. **Esta atualização não modifica os dois HTMLs do GitHub nem `sw.js`.**

## Conteúdo preparado
- Hinos **201–210**, letras/estrofes/coros completos para teste, metrônomo na unidade correta e partitura JPG.
- **10 MP3** `audio/hino-201.mp3`…`audio/hino-210.mp3`, compilados de MSCX originais da coleção fornecida pelo responsável `ccb-hinario-5-do-master.zip`. Um MP3 por hino, **sem nova biblioteca `orquestral/`**.
- Som orquestral **V4.5 de testes**: soprano em violinos, contralto em violas/clarinete, tenor com violoncelo/fagote/trombone, graves tuba/contrabaixo, cordas de sustain; MIDI sintetizado com `TimGM6mb.sf2`, **não é áudio de orquestra gravada**. Andamento calculado individualmente a 88% do percurso entre mínimo e máximo da indicação musical. Fermatas, ligaduras e quiálteras transferidas pelo algoritmo; revisão auditiva e leitura compassada ainda obrigatórias. Nível médio MP3 aproximadamente −16 dBFS, sem pico digital superior a 0 dBFS.
- **10 JPG** `assets/partituras/hino-201-p1.jpg`…`hino-210-p1.jpg`; 201 foi recortado da folha compartilhada `hino-200-201.pdf`, excluindo a parte de 200.
- Base de dados JavaScript **1–200 e Coros 1–6 idêntica à V7.81.7**. A V7.81.8 contém 210 hinos e 6 coros; 33 scripts passaram `node --check`. Modal 210 abriu em Chromium nas larguras 390 e 1280 px sem erro de JavaScript. Carregamento HTTP local foi bloqueado pelo ambiente; teste visual ocorreu com HTML executado em memória, **não valida reprodução em HTTPS**.
- Controles V7.81.7 preservados: dez botões compactos sempre visíveis, player MP3 nativo, mute reversível e volume mantido entre hinos.

## Indicação metronômica e BPM de áudio

| Hino | Título | Pulso exibido e BPM | Compasso | Tonalidade | BPM em semínimas do MP3 |
|---:|---|---|---|---|---:|
| 201 | Deus nos guarde... | ♩ = 78 | 4/4 | Dó maior | 78 |
| 202 | Em Ti me alegro, Senhor | ♩ = 130 | 6/4 | Ré maior | 130 |
| 203 | O meu vero Amigo é Jesus | ♩ = 78 | 4/4 | Ré maior | 78 |
| 204 | Só Jesus é Amigo verdadeiro | ♩ = 78 | 4/4 | Ré♭ maior | 78 |
| 205 | Salvo por Seu poder | **♩. = 54** | 12/8 | Lá♭ maior | **81** |
| 206 | Tu és o Amigo | **♪ = 134** | 6/8 | Mi♭ maior | **67** |
| 207 | Cristo é fiel | ♩ = 89 | 4/4 | Sol maior | 89 |
| 208 | Conserva a paz, ó minha alma | **𝅗𝅥 = 53** | 2/2 | Fá maior | **106** |
| 209 | Oh! Marchai, soldados | ♩ = 83 | 4/4 | Sol maior | 83 |
| 210 | Grandes promessas | ♩ = 78 | 4/4 | Mi♭ maior | 78 |

**Não confundir unidade de pulsação com o pulso interno em semínimas** dos arquivos MIDI. O Hino 210 possui um acorde com 3 notas na pauta inferior; o algoritmo assinalou esse evento para conferência, não há erro de sintaxe nem ligadura de prolongamento sem resolução.

## Curadoria de mídias externas
**Identidade musical obrigatória REV10.3.1:**
- YouTube **instrumental**, somente Orquestra Sacra, Orquestra Paulista/Sacra Paulista, Orquestra Hymns e Antony Andrey quando instrumental.
- YouTube Music **cantado**, Vozes do Campo — Hinos CCB em primeiro lugar.
- Spotify **Orquestra Sacra prioritária**, somente alternativas autorizadas.
- Verificar **Hinário 5 + número exato + título + artista + natureza musical**. Número de **volume/álbum** não é número de hino. Não incluir artistas fora da seleção nem vídeos instrumentais como canto.
- Para 201–210: **YouTube 209** está integrado com vídeo individual `A1Oj1uB-ENc` da Orquestra Sacra Paulista, com título correspondente. **Spotify 208** usa faixa `3Qr4z3DlStCUP68wWovXOM` associada no catálogo Trackify à Orquestra Sacra Paulista; confirmar na plataforma ao testar. As demais mídias são **buscas explicitamente rotuladas** e/ou faixas vocais pendentes de confirmação. **Não declarar cobertura completa de links externos**, embora o MP3 interno exista para os dez hinos.

## Publicação e validação
O pacote completo V7.81.8 deve ser enviado **apenas para o ambiente `teste-multimidia.html`**, acompanhando os 10 MP3 na pasta `audio/` e os 10 JPG na pasta `assets/partituras/`. Não sobrescrever `index.html`, MP3 anteriores, `sw.js` ou registros. Antes da aprovação testar 200→201→210, partitura de 201, letra/coro, tempos 205/206/208, botões/volume e áudio real em Android e desktop, além das fontes externas. Os pacotes de auditoria contêm os MSCX, MIDI, gerador e hashes para futuras correções.

**A próxima revisão só deve ser promovida para produção depois de autorização explícita.**
