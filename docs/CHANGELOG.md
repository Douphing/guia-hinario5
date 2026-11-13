## REV10 — 13/11/2026 — HTML V7.81 e MP3 191–200 V4.4 (preparados para TESTES)

- **Base técnica:** `teste-multimidia.html` V7.80 verificada no GitHub; novo HTML **V7.81** gerado como extensão aditiva para Hinos 191–200. Nenhuma mudança nos objetos de letras e mídias dos Hinos 1–190 e dos Coros 1–6.
- **MP3:** dez arquivos `audio/hino-191.mp3` a `audio/hino-200.mp3` idênticos por SHA-256 à Orquestra V4.4 aprovada para integração no teste. Soprano mais próximo de cordas, tenor reforçado, tuba/contrabaixo mais perceptíveis, sustain e fermatas mais audíveis; conserva-se a limitação de timbre sintético TimGM6mb. Um MP3 por hino.
- **Partituras:** 12 JPG extraídos dos PDFs originais; Hinos 198 e 200 têm duas páginas, hino 191 foi recortado de PDF compartilhado. Não há mistura de pautas de outros hinos.
- **Letras e metrônomo:** três estrofes por hino, coros segundo a partitura; pulsação **♪** nos Hinos 191–193, **♩** nos Hinos 194–200, com faixas individuais e BPM equivalentes aos áudios aprovados.
- **Links externos:** Spotify, YouTube e YouTube Music para 191–200 NÃO foram inventados; integração pendente de URLs verificadas. Os vínculos anteriores (1–190) foram preservados.
- **Validações:** 200 chaves consecutivas em `MULTIMIDIA` e `LETRAS`; 1–190 e Coros 1–6 sem mudanças; 32 scripts executáveis com sintaxe válida; hashes dos 10 MP3 iguais aos V4.4. Navegador local bloqueado por política (`ERR_BLOCKED_BY_ADMINISTRATOR`): testes de tela em celular/desktop e execução online ainda pendentes.
- **Publicação:** nenhum `index.html`, `sw.js`, áudio 1–190, ou página de teste do GitHub foi substituído nesta entrega. **V7.81 permanece arquivo de teste para envio e avaliação**, não versão promovida a produção.
- **Próximo passo:** conferir 190→191, 198/200 multipágina, último Hino 200, controles/rolagem, MP3, registros/favoritos e links externos em dispositivo real; após aceite, emitir REV11/V7.82 para mudanças posteriores.

---

# Guia do Hinário nº 5 — Histórico de versões (curado)

**Atualizado:** 12/11/2026 — revisão documental REV09. Lista de marcos relevantes, não um changelog completo linha a linha. As versões intermediárias e detalhes devem ser confrontados com os respectivos arquivos de teste.

| Versão | Marco relevante | Estado / cuidado |
|---|---|---|
| V7.44–V7.46 | Estrutura de partituras, visualizador, zoom e navegação | Pilotos; produção não deve ser alterada automaticamente. |
| V7.48 | Leitura contínua de múltiplas páginas da partitura no celular | Preservar especialmente o Coro 5. |
| V7.49–V7.51 | Modos de sequência, mini-player MP3, vídeo flutuante e “Abrir na origem ↗” | Políticas externas podem limitar autoplay. |
| V7.56–V7.58 | Janela de vídeo agrupada/arrastável, anterior/próximo e minimizar | Evitar controles soltos e atraso ao arrastar. |
| V7.59–V7.61 | Reprodução/pausa/parar, fechar somente mídia, controles vetoriais compactos | Uma linha, identidade navy/off-white. |
| V7.62–V7.65 | Distribuição responsiva no desktop e preservação dos rótulos de botões ativos | Evitar corte do título e rolagem. |
| V7.66–V7.70 | Registros compactos, rótulo “Registros”, notificação, separador com clave | Não empurrar mídias para baixo. |
| V7.71–V7.72 | Tentativas de ajustes que provocaram regressões visuais | **V7.72 descartada; não usar como base**. |
| V7.73 | Correção isolada do metrônomo em desktop de pouca altura | Base estável retomada a partir da V7.70. |
| V7.74 | Proporção de botões, badge, clave e setas sem sobreposição | Preservar resultados nos Hinos 1/103/160. |
| V7.75 | Corrige filtro individual persistindo na lista geral de Hinos chamados | Caso Hino 44. |
| V7.76 | Hino 61: MP3 linear corrigido com referência `?v=776` | **Áudio do HTML é linear, NÃO a orquestra V2**. |
| Orquestra Hino 61 V2 | Timbres encorpados e fermatas moderadas, aprovada auditivamente | **Preservada como mix histórica e referência do MIDI**. |
| Orquestra Hino 61 V3 — Tuba Grave | Mixagem com baixo reforçado e harmonia mais contrastante; **aprovada pelo usuário em 12/11/2026** | **Nova referência orquestral**, arquivo separado; não integrada ao HTML/produção. |

## Política de versões

Cada entrega aprovada deve adicionar: data, número **novo**, objetivo, arquivos alterados, impacto nos hinos, teste visual/funcional, limitações conhecidas e a confirmação de que `index.html` permaneceu intocado (ou foi promovido após autorização). Separar versões **experimentais**, **aprovadas** e **publicadas**.

## Revisões do dossiê (independentes das versões do Guia)

| Revisão | Data | Aprovação incorporada | Código/mídia alterados? |
|---|---|---|---|
| **REV02** | 12/11/2026 | Documentação sincronizada a cada aprovação; Hino 61 V2 vira referência inicial. | **Não.** HTML de teste permanece V7.76. |
| **REV03** | 12/11/2026 | Usuário aprovou Hino 61 **Orquestra V3 — Tuba Grave**: reforço de graves mais equilibrado; V3 substitui V2 como referência sonora para novas cargas. | **Somente pacote documental e áudio V3 adicionado.** Nenhuma edição no HTML ou produção. |

**Regra para lançamentos seguintes:** registrar sempre o novo marco nos arquivos de continuidade, distinguir as versões musical/web e distribuir um pacote documentado no mesmo ciclo da aprovação. Nunca renomear um experimento como versão aprovada sem verificação e aceite.

## REV04 — 12/11/2026
- **Hino 61 V4.1 aprovado:** ligaduras revisadas, acústica natural V4, grave V3. Substitui V3 como referência de timbre, preservada para backup.
- **Padrão definitivo:** apenas `audio/hino-N.mp3`; não expandir `audio/orquestral/`, nem oferecer seletor de áudio duplicado.
- **HTML V7.77 preparado:** cache-bust do MP3 Hino 61 `?v=777`; nenhuma outra funcionalidade/estilo modificado.
- Próximas cargas: Hinos 161+, coros, letras/partituras e mídias; preservar 1–160 fora de correções autorizadas.
- Produção `index.html` preservada; a troca do arquivo MP3 em `audio/` afeta o site público que já utiliza esse endereço.

## REV05 — 12/11/2026 — MP3 161–170
- Usuário aprovou a primeira geração dos dez MP3 dos Hinos 161–170, já disponíveis como pacote local de teste.
- **Andamento para futuras cargas:** ligeiramente mais vivo, quando musicalmente adequado e compatível com a partitura; respeitar caráter, ligaduras e fermatas.
- Os dez MP3 ainda **não estavam** na pasta `audio/` do GitHub nesta verificação. Publicação e integração ao HTML continuam como próximos passos distintos.
- Manter um MP3 em `audio/hino-N.mp3`, preservar hinos 1–160, `index.html` e sem novo botão de orquestral no modal.


## REV06 — 12/11/2026 — Correções V7.78.2 (não aprovada/publicada)
- Hino 162: etiqueta `Final` no lugar de `Coro`, conforme a partitura e a 3ª terminação; conteúdo preservado.
- Navegação modal após 160: retirado segundo limite fixo, distinto da sequência automática V7.78.1.
- Instrumental MP3: botão compacto `Vol.` com slider popover, sem nova linha ou rolagem horizontal.
- Regras futuras: revisar `rall.`, `poco rall.`, tercinas, ligaduras e fermatas para cada novo MP3; andamento mais vivo apenas quando adequado.
- Confirmada no repositório a publicação dos dez MP3 e das dez partituras 161–170.
- Testes locais: JS sintaxe OK, Chrome 320/390/1280, Hino 162 Final, navegação, slider; aguardando aprovação no dispositivo real.


## REV07 — 12/11/2026
- **V7.78.3 aplicada** no repositório de testes conforme confirmação do usuário: reflow consistente com metrônomo + mídia, independentemente da ordem de abertura. Continuar observando eventuais falhas em dispositivo real.
- MP3 171–180 **gerados e validados tecnicamente, pendentes de aprovação auditiva e upload**. +4,5% de andamento como proposta experimental para uma execução um pouco mais viva.
- Ligaduras de prolongamento nos Hinos 171/177; fermatas no 171/172/174/179/180 tratadas discretamente. Conferir musicalmente e não assumir ausência de tercinas/rall. sem inspeção visual.
- `index.html` de produção e Hinos 1–170 preservados. A próxima integração ao HTML de testes depende da aprovação musical do lote.

## REV08 — 12/11/2026 — Lote musical V3.1 para avaliação
- Aprovada a direção sonora das amostras 171/177 V3.1; construída a carga completa MP3 171–180 usando a mesma instrumentação virtual.
- Preservados sem recodificação os MP3 171 e 177 da V3.1; novos MP3 172–176,178–180 produzidos para avaliação musical.
- Vibrato sutil, soprano médio, tenor/baixo presentes e andamento da carga anterior mantido.
- Som produzido com TimGM6mb; Sonatina não instalada. Arquivos ZIP preparados, mas MP3 **não enviados ao GitHub**, sem integração ao HTML nem promoção a produção.

## REV09 — 12/11/2026 — Base V7.79 preparada para TESTES
- MP3 V3.1 171–180 mantidos sem refação. Para o lote seguinte: sustain natural, sem oscilação de volume.
- HTML de teste V7.79 construído com letras/coros, MP3, metrônomo, 12 partituras JPG e YouTube Music por capítulos.
- Hinos 171 e 177 possuem duas páginas; 172 e 178 foram recortados corretamente dos PDFs compartilhados; Hino 172 sem coro.
- Vínculos individuais Spotify/YouTube ainda não verificados; não inventar URLs.
- Sintaxe e testes locais Chromium em 320/390/1280/1536px concluídos. GitHub teste e produção não alterados nesta entrega, aguardando upload e aprovação.

**Correção de estado (REV09):** os 10 MP3 171–180 V3.1 já estavam publicados no GitHub, hashes exatos 10/10. Somente HTML de teste V7.79 e 12 JPG de partituras permanecem pendentes, sem mudança na produção.
