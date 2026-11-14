# V7.81.10 / REV11.2 — modal desktop ampliado e sem rolagem do MP3
**13/11/2026 — DOCUMENTAÇÃO; HTML preparado separadamente para TESTES.**

## Regra permanente antirregressão
No desktop, com modal de mídia aberta e MP3 em execução, preservar **cabeçalho, botões de reprodução em UMA linha, player nativo, metrônomo aberto e miniatura da partitura visíveis sem rolagem interna**. Aproveitar a largura e a altura úteis. O usuário já havia aprovado essa solução anteriormente; não restabelecer `overflow-y:auto` indiscriminadamente no modal de MP3.

**Implementação local V7.81.10:** estilo CSS aditivo `v78110-desktop-modal-fit` sobre V7.81.9, sem alteração em nenhum script, objeto de hino, letra ou mídia. Em desktop (largura CSS ≥960px e sem vídeo flutuante), modal com largura até 1450px ou `100vw - 14px`, colunas proporcionais, Ocasiões e Apropriação lado a lado, espaçamentos verticais enxutos em janelas baixas. MP3 aberto sem scroll interno; janela de zoom extremo, vídeo grande ou arquivo inexistente preserva contingência quando necessário. **Layout do celular e player flutuante não alterados.**

## Medições efetivas em Chromium com MP3 e partitura 210 reais do pacote
| Viewport CSS | Base V7.81.9 | Teste V7.81.10 |
|---|---|---|
| 1027×392 (desktop baixo/zoom) | card 995px, rolagem 80px (454/374) | card 1013px, sem rolagem (376/376) |
| 1024×500 | card 992px; ligeira rolagem | card 1010px; sem rolagem |
| 1280×590 | card 1010px | card 1266px; sem rolagem |
| 1280×720 | card 1010px, rolagem residual | card 1266px; sem rolagem |
| 1600×900 | card 1010px | card 1450px; sem rolagem |
| 390×844 | celular | mesmo tamanho, posições e overflow do layout anterior |

O metrônomo expandido foi exibido na coluna esquerda; a miniatura da partitura permaneceu visível. O player MP3 e os dez comandos ficaram na coluna direita, sem se deslocarem pelo scroll. **33 scripts JavaScript aprovados em verificação de sintaxe.** A comparação do HTML confirmou que V7.81.10 é a V7.81.9 com apenas um estilo CSS adicional (byte a byte inalterado no restante).

## Proteções e pendências
- Hinos 1–210, seis coros, MP3 V4.4/V4.5, partituras, letras, mídias externas, registros, favoritos, metrônomo, PWA, modos de término e volume **intactos**.
- YouTube permanece instrumental das fontes autorizadas; YouTube Music cantado (Vozes do Campo prioritária); Spotify prioriza Orquestra Sacra. A pendência de links diretos 201–210 da REV11.1 **não foi alterada**.
- **A V7.81.10 é HTML local para testes**; atualização desta documentação não envia nem altera `teste-multimidia.html` ou `index.html` do GitHub. Produção não pode ser modificada sem aprovação explícita.
- Validar posteriormente no site HTTPS no Windows: desktop 100%/125%/150% de zoom, com MP3 e metrônomo aberto; testar miniatura, partitura ampliada, navegação e links externos, além de mobile 390px. Vídeos muito altos podem requerer scroll de contingência; não cortar conteúdo legítimo por esconder overflow.
- Para as próximas versões, **obrigatório comparar scrollHeight e clientHeight do modal** ao abrir MP3 + metrônomo nas larguras de desktop, verificando os comandos e a partitura. Preservar também os dez botões em linha única.

Referência histórica: [REV11.1](CORRECAO_MIDIAS_201_A_210_REV11_1.md), [REV10.9](BOTOES_VISIVEIS_REV10_9.md) e [REV10.8](PLAYER_NATIVO_MASTERIZACAO_REV10_8.md).
