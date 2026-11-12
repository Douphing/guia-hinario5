# Guia do Hinário nº 5 — Histórico de versões (curado)

**Atualizado:** 12/11/2026 — revisão documental REV04. Lista de marcos relevantes, não um changelog completo linha a linha. As versões intermediárias e detalhes devem ser confrontados com os respectivos arquivos de teste.

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
