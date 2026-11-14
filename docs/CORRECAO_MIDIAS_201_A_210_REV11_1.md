# REV11.1 — Correção dos botões de mídia dos Hinos 201–210 (V7.81.9 TESTE)

**13/11/2026 — Somente para TESTES.** A V7.81.8 criou botões contendo links de pesquisa e legendas de canais. A V7.81.9 corrige essa apresentação e substitui o que foi possível por URLs individuais de fontes musicais aprovadas. **Nenhum arquivo de produção é modificado nesta revisão.**

## Experiência exigida
- Os botões são **sempre identificados apenas como Spotify, YouTube e YouTube Music**: não exibir nome do canal, intérprete, “Pesquisar” ou nome da busca na superfície do botão.
- **Não vincular o botão a uma pesquisa ou canal genérico.** Quando não existe faixa individual confiável, o botão permanece com o rótulo original, **desabilitado**, sem inventar endereços.
- **YouTube instrumental** somente Orquestra Sacra, Orquestra Paulista/Sacra Paulista, Orquestra Hymns ou Antony Andrey quando instrumental.
- **YouTube Music cantado**, com **Vozes do Campo — Hinos CCB prioritária**; não reutilizar vídeo instrumental do YouTube como canto.
- **Spotify com Orquestra Sacra prioritária**, usando apenas alternativas já aprovadas.
- É obrigatório confirmar **Hinário nº 5 + número + título + artista + natureza instrumental/cantada**; volume de álbum, posição da faixa ou Hinário nº 4 não representam o número do Hino 5.

## Inventário V7.81.9

| Hino | YouTube instrumental | Spotify | YouTube Music cantado |
|---:|---|---|---|
| 201 | Orquestra Sacra — `NJLc3xsbBBc` | Pendente | Vozes do Campo — `IM7ssGI7shs`, 03:28–06:56; **canto ainda não auditado** |
| 202 | Pendente | Pendente | Pendente |
| 203 | Pendente | Pendente | Pendente |
| 204 | Orquestra Sacra — `eRhHuzW2eUM` | Pendente | Pendente |
| 205 | Orquestra Hymns — `zs7r5q1afVY` | Orquestra Sacra — `3NyJvLds45WDZVoNm3z2o3` (catálogo de terceiros; testar no Spotify) | Pendente |
| 206 | Pendente | Orquestra Sacra — `5ZfYh6GyVDO9aRRNMWFC1b` (catálogo de terceiros; testar no Spotify) | Pendente |
| 207 | Orquestra Hymns — `sqvY26yabsw` | Pendente | Pendente |
| 208 | Orquestra Sacra — `UrPaUvYRKGM` | Orquestra Sacra — `5e1vOwAzADMUGi4UfpiBcT` | Pendente |
| 209 | Orquestra Sacra Paulista — `A1Oj1uB-ENc` | Pendente | Pendente |
| 210 | Pendente | Pendente | Vozes do Campo — `IM7ssGI7shs`, 06:56–11:04; **canto ainda não auditado** |

**Cobertura técnica inicial:** 6 links YouTube, 3 faixas Spotify e 2 candidatos de trecho de Vozes do Campo = 11 de 30 opções; **19 opções permanecem sem mídia comprovada**. Não anunciar os onze como reprodução auditivamente aprovada. Dois IDs Spotify foram encontrados em índice Trackify e precisam ser validados no Spotify real.

Foi localizado um álbum atribuído a Vozes do Campo com os Hinos 201–210, mas **a existência do álbum em catálogo externo não confirma URLs individuais no YouTube Music**. Não colocar link de Apple Music, Amazon ou Spotify no botão YouTube Music.

## Auditoria
- O HTML V7.81.9 foi gerado a partir da **V7.81.8**, preservando os Hinos 1–200 e os seis coros, inclusive as respectivas letras e mídias; para Hinos 201–210 apenas os campos de fontes externas e exibição das marcas foram corrigidos.
- **210 hinos e seis coros**, 33 scripts JavaScript válidos.
- Chromium 390px: modais 201, 202, 205, 207, 208, 209 e 210 verificaram apenas rótulos Spotify/YouTube/YouTube Music, sem links de pesquisa; botões sem gravação apropriada desabilitados, sem erros JS.
- MP3 Orquestra V4.5, partituras, metrônomo, registro de favoritos, registros, PWA e dez botões de transporte sempre à mostra preservados. Pacotes completo e leve ZIP testados contra corrupção.
- **Pendente:** audição de YouTube e YTM, confirmação de canto dos trechos 201/210, reprodução das faixas Spotify 205/206, testes em HTTPS e Android/desktop, completar 19 gravações com fontes autorizadas.

## Publicação
A V7.81.9 está preparada em HTML e ZIP, para **substituir somente o `teste-multimidia.html` de testes**, com backup. Os arquivos de áudio e partituras são os da V7.81.8 e não precisam ser reenviados se já estiverem em seu caminho correto. **Não alterar `index.html` de produção sem aprovação expressa.**

A atualização da documentação REV11.1 não publica automaticamente o HTML V7.81.9.
