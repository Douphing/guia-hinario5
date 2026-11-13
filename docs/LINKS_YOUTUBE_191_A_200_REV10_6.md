# V7.81.4 — Links do YouTube 191–200 fornecidos pelo usuário / REV10.6
Data: 13/11/2026. **Estado: versão HTML preparada em pacote de TESTES; não confundir com publicação ou aprovação do conteúdo audiovisual.**

## Mapa vigente da V7.81.4
| Hino | URL individual do YouTube | Situação |
|---:|---|---|
| 191 | [`Vkb54RUOkDQ`](https://www.youtube.com/watch?v=Vkb54RUOkDQ) | Mantido da V7.81.3 (Orquestra Sacra) |
| 192 | [`qlDVRkAZvAM`](https://www.youtube.com/watch?v=qlDVRkAZvAM) | Correspondência fornecida pelo usuário |
| 193 | [`kzKgpHuYboU`](https://www.youtube.com/watch?v=kzKgpHuYboU) | Correspondência fornecida pelo usuário |
| 194 | [`DmQEpuRVPCg`](https://www.youtube.com/watch?v=DmQEpuRVPCg) | Substitui o ID de testes V7.81.3 por indicação do usuário |
| 195 | [`GSEIt19lwZM`](https://www.youtube.com/watch?v=GSEIt19lwZM) | Mantido da V7.81.3 (Orquestra Sacra) |
| 196 | [`WaGmOAuiYxg`](https://www.youtube.com/watch?v=WaGmOAuiYxg) | Correspondência fornecida pelo usuário |
| 197 | [`A12O86QYxt4`](https://www.youtube.com/watch?v=A12O86QYxt4) | Correspondência fornecida pelo usuário |
| 198 | [`4W8dPu7NM7k`](https://www.youtube.com/watch?v=4W8dPu7NM7k) | Correspondência fornecida pelo usuário |
| 199 | [`kEbHExWm-Sk`](https://www.youtube.com/watch?v=kEbHExWm-Sk) | Primeira opção recebida, principal em testes; segunda opção 8GDPODmDoTk pendente de comparação |
| 200 | [`OgNlZz43BEw`](https://www.youtube.com/watch?v=OgNlZz43BEw) | Mesmo vídeo já associado na V7.81.3; mantido |

**Hino 199 — duas opções:** primeira `kEbHExWm-Sk` foi integrada como principal em testes. A segunda `8GDPODmDoTk` está registrada como **alternativa**, mas não substitui a principal até conferência do canal e da execução instrumental. Não eliminar o segundo link do inventário.

**Normalização:** os parâmetros `&list=RD...` e `&start_radio=1` foram excluídos dos links para que o Rádio do YouTube não interfira no próximo hino nem na modalidade aleatória do Guia. Preservado apenas `https://www.youtube.com/watch?v=ID`.

## Regras de identidade musical obrigatórias
- YouTube deve oferecer **instrumental/orquestral** com instrumentos em destaque, exclusivamente **Orquestra Sacra, Orquestra Paulista, Orquestra Hymns ou Antony Andrey quando instrumental**.
- YouTube Music deve oferecer **hino cantado**, com **Vozes do Campo — Hinos CCB** como prioridade; Spotify prioriza **Orquestra Sacra** e apenas fontes alternativas autorizadas.
- A associação dos números 192/193/194/196/197/198/199 veio **expressamente do usuário**; porém a consulta automática aos títulos, canais e áudio dos vídeos falhou neste ambiente. **Não declarar autoria, qualidade orquestral ou aprovação musical dos sete novos IDs como confirmadas.** Verificação auditiva antes da promoção.
- Confirmar título, **número e edição do Hinário nº 5**, intérprete, execução instrumental/cantada e, quando aplicável, início e fim de coletâneas. Número de álbum/volume ou posição da faixa **não é** número do hino.

## Auditoria e limitações
A V7.81.4 foi gerada diretamente sobre o arquivo de TESTES V7.81.3. A única alteração funcional envolve **metadados de YouTube** dos hinos especificados; o Hino 200 já utilizava o mesmo ID. Hinos 191/195 permanecem intactos. Os dados de 1–190, os seis Coros, todas as letras, MP3 V4.4, partituras, metrônomo, Spotify, YouTube Music, player, comandos anterior/próximo/repetir/aleatório e preferência de volume não foram alterados.

- **Testes concluídos:** 200 hinos; seis coros; 33 scripts com sintaxe válida; comparação estrutural de letras e de campos fora do YouTube sem regressões; ZIPs verificados.
- **Testes pendentes:** validação completa de iframe/links em HTTPS, títulos e canais dos vídeos fornecidos, caráter instrumental, comparação das duas opções de 199, reprodução externa, volume e controles no celular/desktop. O navegador de teste não completou todos os modais; testes parciais não são aprovação geral.
- **Publicação:** documentação REV10.6 pode ser sincronizada no GitHub; **o HTML V7.81.4 não foi publicado automaticamente no `teste-multimidia.html`**, e a produção `index.html` não foi modificada nesta etapa.

A REV10.5 documentou os nove links recebidos antes de se conhecer o mapeamento; esta REV10.6 registra a associação explícita e **substitui exclusivamente aquele status anterior de “não identificado”**, sem apagar o histórico.
