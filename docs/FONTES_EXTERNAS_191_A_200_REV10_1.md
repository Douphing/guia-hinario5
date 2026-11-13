> **Atualização de curadoria REV10.3.1:** no **YouTube Music**, a fonte **Vozes do Campo — Hinos CCB deve ser pesquisada primeiro** para gravações cantadas. No **YouTube**, só instrumental de Orquestra Sacra, Orquestra Paulista, Orquestra Hymns e Antony Andrey; Spotify prioriza Orquestra Sacra e fontes alternativas já autorizadas. O inventário histórico abaixo não representa aprovação dos links, e os vídeos instrumentais reaproveitados no YTM devem ser substituídos por versões cantadas verificadas. Não confundir volume/álbum com número do hino. Ver [política vigente](POLITICA_FONTES_MULTIMIDIA_REV10_3.md).

---

> **ATENÇÃO — INVENTÁRIO HISTÓRICO REV10.1, NÃO APROVAÇÃO DE MÍDIAS.** A política **REV10.3** prevalece sobre qualquer instrução abaixo que permita fontes complementares não autorizadas ou reutilização de instrumental do YouTube como vocal do YouTube Music. **YouTube deve ser instrumental, de Orquestra Sacra/Orquestra Paulista/Orquestra Hymns/Antony Andrey; YouTube Music deve ser cantado em fonte CCB aprovada; Spotify só fontes previamente autorizadas.** Não confundir número do volume com número do hino. O mapa contém Spotify de artistas não aprovados, Hino 194 YouTube de Orquestra Expressiff (não aprovada) e vídeos reaproveitados de YouTube em YouTube Music sem comprovação de canto; esses itens **devem ser substituídos/auditados na próxima versão de teste**. O registro abaixo documenta o que constava na V7.81.1, não o que deve ser mantido. Ver [POLITICA_FONTES_MULTIMIDIA_REV10_3.md](POLITICA_FONTES_MULTIMIDIA_REV10_3.md).

---

# Fontes externas 191–200 — REV10.1 / teste V7.81.1
Data: 13/11/2026. Documento de auditoria das mídias integradas no arquivo local de teste, ainda não publicado.

## REGRA PERMANENTE DE CORRESPONDÊNCIA
1. **Número do hino no Hinário nº 5 + título correto** precisam corresponder individualmente ao áudio ou vídeo. Verificar a edição; números do Hinário nº 4 não são intercambiáveis.
2. **Número do volume/álbum, número sequencial da faixa dentro do álbum e número do hino são coisas diferentes.** Não atribuir número do volume à música. Nunca usar o ID de outra faixa do mesmo álbum.
3. Buscar primeiro Orquestra Sacra, Orquestra Sacra Paulista, CCB – Vozes do Campo, Orquestra Hymns e Antony Andrey. Se não houver faixa apropriada, usar outros intérpretes somente com número e título verificados, registrando a fonte.
4. Para Spotify, usar a **faixa individual**. Se o ID individual não foi confirmado, usar **busca específica rotulada "Pesquisar"**, sem marcar mídia como confirmada. Não apontar para álbum genérico.
5. Para YouTube Music, dar preferência a faixa individual ou coletânea conferida com tempos inicial/final. O **mesmo vídeo do YouTube** pode ser usado como fallback reproduzível, mas isso **não prova** disponibilidade de faixa independente no catálogo YTM. Identificar esse reaproveitamento.
6. Nunca confundir hinos adjacentes em coletâneas. Preservar identidade do Hino 191 (0–208 s) e do Hino 200 (253–483 s) nas compilações usadas, verificando seus cortes antes da publicação.

## MAPA VERIFICADO PARA TESTES
| Hino | Nome Hinário 5 | Spotify individual / busca | YouTube vídeo | YouTube Music vídeo / tipo |
|---|---|---|---|---|
| 191 | Vem, vem consolar-me | `3kJvz00UUuDWzcAVE9ZExT` Antony Andrey | `XeS4ucU5vUQ` | `IM7ssGI7shs` 0–208 s, Vozes do Campo |
| 192 | Quão fiel promessa Jesus nos fez | `3HZnbjn2rdrDTUqhpmnuT6` O Canto dos Fiéis | `cdLBXCFZ2vQ` | vídeo YouTube compartilhado |
| 193 | Nada jamais me faltará | `63uxwUYdUMeamnRpRxpOoJ` DioCarv | `Xx8Yfi71xac` | vídeo YouTube compartilhado |
| 194 | Vós chorareis e vos lamentareis | `4vOH4vbwc9vmM9DyDaXJrY` Douglas Alves | `nr0Rl2iimCA` Orquestra Expressiff | vídeo YouTube compartilhado |
| 195 | Senhor, estou disposto | **Pesquisar**, Antony Andrey / Orquestra Sacra Paulista | `_faBZ90yH0s` | vídeo YouTube compartilhado |
| 196 | Sem Deus Pai | **Pesquisar**, Antony Andrey / Orquestra Sacra Paulista | `oaQIkEiw7Uo` | vídeo YouTube compartilhado |
| 197 | Senhor, por Teu poder | `4WVCBhqx1EjLshK8ytDq68` Gustavo Bueno | `Y_W7RE7YFYY` | vídeo YouTube compartilhado |
| 198 | Nosso Pai celeste sabe e provê | **Pesquisar**, Orquestra Sacra Paulista / Antony Andrey | `DooLCWd3LfA` | vídeo YouTube compartilhado |
| 199 | Senhor, Tu és a minha Porção | `3ogCyyK00Hs75456hcQmNg` Douglas Alves | `UIKdUvMj62M` | vídeo YouTube compartilhado |
| 200 | Não se turbe o vosso coração | `6fam8QcQcV4EC7SN8UIc6M` Encontro dos Amigos | `hx2K9C8VUD4` | `ANBgqh2jX_0` 253–483 s, Vozes do Campo |

Formato de links: Spotify `https://open.spotify.com/track/<ID>`; YouTube `https://www.youtube.com/watch?v=<ID>`. Para YTM com vídeo compartilhado, reutiliza-se o mesmo ID validado no YouTube, não o ID de um álbum. O manifesto `FONTES_MIDIAS_191_200_REV10_1.json` do pacote de teste registra URLs, artista e tipo de fonte.

**Contagem:** 10 vídeos YouTube individuais; 7 Spotify diretos e 3 buscas declaradas; YouTube Music com duas coletâneas temporizadas independentes (191 e 200) e oito vídeos compartilhados com YouTube. **Não são 30 faixas independentes verificadas.** A conferência manual de reprodução ainda está pendente.

## REGRAS DE CONTINUIDADE
V7.81.1 foi feita aditivamente sobre V7.81, apenas acrescentando metadados de mídias para Hinos 191–200, sem alterar letras, metrônomos, MP3 V4.4, partituras ou dados 1–190/Coros 1–6. A validação de objetos e sintaxe (32 scripts) passou; testes visuais/de reprodução no navegador real seguem pendentes. O arquivo `index.html` e `sw.js` **não foram modificados**, e o `teste-multimidia.html` remoto ainda é V7.80 até envio autorizado. A documentação REV10.1 é uma correção aditiva da REV10 e não aprovação de produção.

**Verificação final de publicação (13/11/2026):** o arquivo remoto `teste-multimidia.html` já corresponde exatamente à base local **V7.81**, SHA Git `b3df54ec10ea65853a298b8ca2d541ae11ef51a1`; ainda **não** contém os metadados novos da **V7.81.1**. Somente a documentação REV10.1 foi publicada nesta etapa; a produção `index.html` continua intacta. Nas notas anteriores, o status V7.80 refere-se a uma consulta anterior e está superado.
