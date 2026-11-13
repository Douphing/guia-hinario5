# Continuidade REV10.6 — mapeamento explícito de YouTube 191–200 (13/11/2026)
A V7.81.4 é **arquivo HTML de TESTES** derivado da V7.81.3. As sete mudanças efetivas de vídeo são: 192 `qlDVRkAZvAM`, 193 `kzKgpHuYboU`, 194 `DmQEpuRVPCg`, 196 `WaGmOAuiYxg`, 197 `A12O86QYxt4`, 198 `4W8dPu7NM7k`, 199 `kEbHExWm-Sk`. Hino 200 segue `OgNlZz43BEw`; 191 e 195 intocados. Segundo candidato do Hino 199 `8GDPODmDoTk` **não integrado**, aguardando comparação. Links limpos de parâmetros Rádio. A associação numérica foi dada pelo usuário, **não** se comprovou automaticamente canal/artista nem caráter instrumental — a auditoria real é requisito para aceite. Hinos 1–190, Coros, letras 1–200, partituras, MP3 V4.4, Spotify, YouTube Music e player V7.81.2 mantidos. Preservar a identidade YouTube instrumental, YTM vocal Vozes do Campo prioritária, Spotify Orquestra Sacra prioritária. Documentar [mapeamento REV10.6](LINKS_YOUTUBE_191_A_200_REV10_6.md). `index.html` de produção protegido; confirmar estado remoto de `teste-multimidia.html` antes de publicar o arquivo de teste.

---

# Atualização REV10.4 — linkagem fiel dos Hinos 191–200 (13/11/2026)
**Base local de teste:** V7.81.2 → V7.81.3 com alteração **somente dos metadados de fontes externas de 191–200**. YouTube é instrumental exclusivamente Orquestra Sacra/Orquestra Paulista/Orquestra Hymns/Antony Andrey; YouTube Music cantado, **CCB Vozes do Campo primeiro**; Spotify prioriza Orquestra Sacra e artistas já permitidos. Não confundir números de volume ou Hinário 4 com título/número Hinário 5. O lote agora tem 4 YouTube diretos, 3 Spotify diretos, 4 candidatos Vozes do Campo de canto a confirmar, buscas/pêndencias nos demais; **não está finalizado**. Artistas não autorizados da REV10.1 saíram da **nova versão de teste**, e não dos registros históricos. Toda letra, metronomo, MP3, partitura, controles/volume e dados antigos foram preservados. **`index.html` não alterado e V7.81.3 ainda não publicada como HTML do GitHub**. Leia [CURADORIA_MIDIAS_191_200_REV10_4.md](CURADORIA_MIDIAS_191_200_REV10_4.md) e política [REV10.3.1](POLITICA_FONTES_MULTIMIDIA_REV10_3.md).

---

# Esclarecimento REV10.3.1 (13/11/2026)
Identidade obrigatória: **YouTube = instrumental/orquestral**, exclusivamente Orquestra Sacra, Orquestra Paulista, Orquestra Hymns e Antony Andrey (instrumental); **YouTube Music = hinos cantados**, **Vozes do Campo — Hinos CCB é a PRIMEIRA fonte a pesquisar**, e só se aceita alternativa vocal anteriormente autorizada; **Spotify = Orquestra Sacra prioritária**, com alternativas já aprovadas. Não ampliar a lista por conveniência. Auditar Hinário nº 5, número, título, intérprete e natureza do áudio; não confundir volume/álbum com hino. Hinos 191–200 da versão de teste continuam sujeitos a correção de curadoria; documentação não significa que os links foram corrigidos no HTML. Ver [tabela vigente](POLITICA_FONTES_MULTIMIDIA_REV10_3.md).

---

# Norma vigente REV10.3 — identidade de mídia por plataforma (13/11/2026)
**Esta decisão prevalece sobre toda regra anterior que permita qualquer intérprete complementar ou o compartilhamento indiferenciado de links YouTube/YouTube Music.**
- **YouTube:** somente **execuções instrumentais orquestrais** de **Orquestra Sacra, Orquestra Paulista, Orquestra Hymns ou Antony Andrey** (este último somente quando realmente instrumental). **Não usar canto como faixa principal**.
- **YouTube Music:** somente **versões cantadas** de canais vocais CCB aprovados (referências anteriores do canal Music, Hinos CCB Cantados e Tocados em faixas cantadas, CCB – Vozes do Campo quando cantado). Não reutilizar vídeo instrumental do YouTube para preencher YouTube Music.
- **Spotify:** priorizar Orquestra Sacra e restringir alternativas aos nomes previamente aprovados. Não incluir outros artistas apenas para evitar pendências.
- Conferir **Hinário nº 5 + número do hino + título + intérprete + estilo vocal/instrumental**. Volume de álbum, ordem da faixa e Hinário nº 4 **não** identificam o número do hino. Faixas em coletâneas exigem recorte exato e teste de reprodução.
- **Atenção aos Hinos 191–200:** lista histórica REV10.1 de links foi montada antes dessa confirmação do usuário, contém artistas não autorizados e vídeos compartilhados sem prova de canto. **Não considerar V7.81.2 aprovada no critério de curadoria de fontes**. A correção dos links ainda precisa ser feita em nova versão de teste; esta atualização altera **somente documentação**, não o HTML do GitHub.
Ver o documento canônico [Política de fontes e identidade REV10.3](POLITICA_FONTES_MULTIMIDIA_REV10_3.md) e o inventário histórico [REV10.1](FONTES_EXTERNAS_191_A_200_REV10_1.md). **Não alterar `index.html` de produção sem aprovação**.

---

# Adendo REV10.2 — execução sequencial e volume (13/11/2026)
**V7.81.2 TESTE LOCAL** corrige anterior/próximo, modos ao terminar e volume escolhido ao navegar; detecta volume de MP3 também pelo controle HTML nativo, usa preferência `guia-hinario5-volume-midia-v1`, propaga aos players YouTube/YTM por API e não reinicia em 100%. MP3 `modoReproducao:'partitura'` já é o hino completo: execução única, sem repetir conforme as estrofes. Spotify tem somente navegação manual anterior/próximo entre embeds; não dispõe de autoplay, troca contínua, volume ou evento de término controlados pelo Guia. **Os demais controles do Spotify ficam desabilitados**, com aviso explícito.
**Validação:** testes isolados 12/12 e mock de volume YouTube 3/3; navegador integral e plataformas reais ainda aguardam testes. Hinos 1–200, seis coros, partituras e MP3 preservados. Não trocar `index.html` de produção ou `sw.js`. O teste remoto pode estar em versão anterior à V7.81.2; verificar SHA antes de qualquer envio. Ler [documento técnico e checklist](CONTROLES_REPRODUCAO_REV10_2.md).

---

# Correção aditiva REV10.1 — V7.81.1 MÍDIAS EXTERNAS (13/11/2026)
**Atenção: substitui apenas a afirmação histórica de REV10 de que os links externos 191–200 estavam totalmente pendentes.** A versão de testes V7.81.1 possui agora 10 vídeos YouTube confirmados por hino, 7 faixas Spotify individuais + 3 buscas específicas claramente identificadas e 2 coletâneas YouTube Music temporizadas + 8 vídeos YouTube compartilhados com a interface de YouTube Music. Não há alegação de 30 gravações independentes.

**Regra obrigatória de auditoria:** comparar o **número E título exatos no Hinário nº 5** antes de adicionar cada link; nunca substituir pelo número do volume de álbum, pela posição da faixa em um disco nem pelo número em Hinário nº 4 ou outra edição. Pesquisar todas as fontes prioritárias e alternativas aprovadas: Orquestra Sacra, Orquestra Sacra Paulista, CCB - Vozes do Campo, Orquestra Hymns, Antony Andrey. Fontes complementares só com correspondência número+título verificada e artista indicado. Caso Spotify sem ID, exibir `Pesquisar` em vez de `Indisponível` ou ID falso; YTM com vídeo compartilhado **não é faixa de catálogo verificada**. Ler [mapa detalhado com IDs](FONTES_EXTERNAS_191_A_200_REV10_1.md).

**Estado real de publicação:** V7.81.1 é arquivo de teste **local para avaliação**, com 1–190/Coros 1–6 preservados e MP3 V4.4 intactos. Produção `index.html` e `sw.js` NÃO alterados; teste remoto GitHub ainda V7.80. Ainda testar visual/reprodução, Spotify buscas e cortes de coletâneas em celular e desktop; sem aprovação/promover produção.



**Verificação final de publicação (13/11/2026):** o arquivo remoto `teste-multimidia.html` já corresponde exatamente à base local **V7.81**, SHA Git `b3df54ec10ea65853a298b8ca2d541ae11ef51a1`; ainda **não** contém os metadados novos da **V7.81.1**. Somente a documentação REV10.1 foi publicada nesta etapa; a produção `index.html` continua intacta. Nas notas anteriores, o status V7.80 refere-se a uma consulta anterior e está superado.

---

# Estado vigente — REV10 (13/11/2026)

Esta nota **prevalece sobre os estados históricos** descritos abaixo e **não apaga o dossiê REV09**.

**HTML:** V7.80 foi confirmado como `teste-multimidia.html` no GitHub em 13/11/2026. A versão **V7.81**, construída aditivamente com Hinos 191–200, foi preparada e empacotada para testes, **sem envio automático ao GitHub**. Produção `index.html` e `sw.js` permanecem intactos. A V7.81 só será promovida após verificação visual e aprovação expressa.

**MP3:** Aprovado o caráter orquestral melhorado da **V4.4** dos Hinos 191–200; os dez MP3 foram copiados integralmente, sem reprocessamento, como `audio/hino-N.mp3`. A V4.3 teve seu andamento considerado bom, mas o soprano eletrônico, falta de presença do tenor e graves, sustain e fermatas motivaram a V4.4. A biblioteca de síntese TimGM6mb ainda não equivale a instrumentos acústicos gravados. Não criar segundo acervo `audio/orquestral/` nem refazer os MP3 1–190.

**Conteúdo:** Hinos 1–190 e Coros 1–6 preservados integralmente nos objetos `MULTIMIDIA` e `LETRAS`. Hinos 191–200 acrescentados com títulos, letras, estrofes e coros conforme partituras originais, MP3, dados próprios de metrônomo, 12 JPG das partituras (198 e 200 com duas páginas). Nos Hinos 191–193 o pulso impresso é a **colcheia** (BPM exibido 122, 124 e 142), equivalente ao BPM em semínima dos MP3 (61, 62 e 71); 194–200 usam semínima. A estrutura do componente de metrônomo, modais responsivos, reprodução, favoritos, registros e compartilhamento não foi reescrita.

**Mídias externas:** nenhum link novo de Spotify/YouTube/YouTube Music foi incluído nos Hinos 191–200 por falta de URLs individuais verificadas. Preservar os links já implementados de 1–190 e aplicar, após conferência, a ordem de fontes Orquestra Sacra, Orquestra Paulista, Vozes do Campo CCB, Orchestra Hymns e Antony Andrey. Não associar uma faixa de outro hino.

**Auditoria:** 200 números consecutivos de hino, mais seis coros; igualdade de dados de 1–190 e Coros 1–6; 32 scripts executáveis sintaticamente válidos; 10 MP3 V4.4 idênticos aos manifestos SHA-256. O navegador automatizado disponível bloqueou a navegação local (`ERR_BLOCKED_BY_ADMINISTRATOR`); **não declarar teste visual/funcional como concluído**. Confirmar 190→191, 200 último hino, 198/200 multipágina, letra, áudio, metrônomo, mídias e registros em celular e desktop após upload.

**Continuidade:** próxima revisão documental **REV11** quando houver aprovação e publicação do teste. A próxima carga 201–210 só poderá ser produzida com fontes verificadas e sem alterar produções anteriores por suposição.

---

# Guia do Hinário nº 5 — Dossiê de continuidade

**Revisão:** 09 — 12/11/2026 (V7.79 de teste com Hinos 171–180; sustain natural para futuras cargas)
**Finalidade:** preservar as decisões aprovadas, o código existente e o contexto do projeto entre conversas.  
**Situação:** desenvolvimento em ambiente de teste; produção preservada.  
**Base técnica preparada:** `teste-multimidia.html` V7.77 (V7.76 preservada, somente versão de cache do MP3 61 atualizada).  
**Referência musical atual aprovada:** Hino 61 **V4.1**, mantendo sonoridade natural da V4, graves da V3 e correções de ligaduras. Um MP3 por hino em `audio/hino-N.mp3`; os anteriores ficam como backup histórico.

> **Regra central:** nenhum novo chat deve reconstruir, reescrever ou substituir o projeto com base apenas neste documento. É obrigatório abrir o HTML original anexado, comparar alterações e preservar as estruturas e os dados já existentes. Este documento orienta a continuidade; o HTML fornecido é a base técnica concreta.

### Verificação posterior de publicação — 12/11/2026 (REV09)

**MP3 171–180 já estão publicados no GitHub em `audio/` e tiveram seus SHA Git comparados aos bytes exatos dos dez MP3 V3.1 locais: 10/10 idênticos. NÃO reenviar esses áudios nem substituí-los.** O HTML **V7.79** e as **12 imagens de partitura** ainda não estavam no repositório na consulta posterior: `teste-multimidia.html` ainda é V7.78.3 e `assets/partituras` não tem arquivos 171–180. Próxima tarefa: subir apenas HTML de teste + 12 JPG, testar em aparelho real; `index.html` continua protegido. Este estado prevalece sobre instruções da REV09 escritas antes da checagem.

## REV09 — 12/11/2026 — V7.79 preparada com Hinos 171–180

**Decisão musical:** o usuário percebeu um efeito de volume aumentando e diminuindo na Orquestra V3.1. Decidiu **manter a carga atual 171–180 como está**, sem refazer, e **para os próximos lotes usar somente sustain natural**, sem pulsação artificial do volume nem vibrato acentuado. Preservar soprano equilibrado, tenor da clave de fá, tuba e contrabaixo grave; andamento um pouco mais vivo somente quando a partitura permitir. A Sonatina NÃO foi instalada; os MP3 atuais continuam com timbres virtuais básicos.

**Estado técnico:** `teste-multimidia-v7.79-teste.html` preparado localmente **mas NÃO publicado nem aprovado no GitHub**. Base exata V7.78.3, incluindo correção de reflow metrônomo/mídia, volume MP3, navegação dinâmica, modos Parar/Próximo/Aleatório/Repetir e registros. Foram inseridos isoladamente os registros de `MULTIMIDIA` e `LETRAS` dos Hinos 171–180 e comentário de versão. A remoção dessas 3 inserções devolve o HTML V7.78.3 byte a byte. `index.html` e Hinos 1–170 estão protegidos.

**Novos recursos:**
- Dez letras com 3 estrofes. Coro quando a partitura o apresenta; **Hino 172 NÃO possui coro**.
- Um MP3 V3.1 existente por hino no caminho `audio/hino-N.mp3`, n=171–180; arquivos mantidos sem alterar sonoridade.
- **12 JPG** em `assets/partituras/`: Hinos **171 e 177 com duas páginas** (`-p1.jpg` e `-p2.jpg`); os demais com `-p1.jpg`. PDFs originais 171–172 e 177–178 compartilhavam página; os arquivos foram cuidadosamente separados por hino para evitar misturas.
- Dados de metrônomo de compasso/tonalidade/BPM a partir das partituras fornecidas. 177 em 9/8 usa colcheia como unidade, 120–150 de referência.
- YouTube Music: capítulos individuais da coletânea **CCB Vozes do Campo 171–180**, https://www.youtube.com/watch?v=0AS9FwjZnL4, tempos em segundos: 171=0, 172=195, 173=350, 174=543, 175=738, 176=1028, 177=1228, 178=1468, 179=1686, 180=1908. Spotify e vídeo individual YouTube permanecem **pendentes** por falta de vínculo específico verificado.
- Testes locais de sintaxe JavaScript, modal, letras, referências MP3/partituras e responsividade 320/390/1280/1536 px. Desktop metrônomo→mídia e mídia→metrônomo sem rolagem interna induzida pela ordem dos cliques. Reprodução externa real e arquivos servidos pelo GitHub ainda requerem teste após upload.

**Status dos arquivos:** pacote de testes disponível para o usuário enviar `teste-multimidia.html` à raiz (somente testes), dez MP3 à pasta `audio/` e 12 JPG à pasta `assets/partituras/`. Não alegar upload/publicação de nenhum desses arquivos sem checagem posterior.

**Próximo passo:** usuário publicar e validar V7.79 em desktop/celular, conferir letras/partituras e sequência, aprovar; só então iniciar próximo lote de MP3 com sustain natural e sem a oscilação de volume. A documentação deve ser novamente atualizada depois da aprovação.

**REV09 prevalece sobre estados anteriores conflitantes.**

## REV08 — 12/11/2026 — Hinos 171–180 V3.1 gerados para avaliação
- **Amostras 171 e 177 V3.1**: usuário gostou do soprano mais médio, do vibrato discreto e do equilíbrio entre tenor e baixos, e autorizou continuar a construção da carga.
- **Lote produzido:** `hino-171.mp3` a `hino-180.mp3`, em `audio/` dentro do ZIP de avaliação. Hinos 171 e 177 reproduzem exatamente os arquivos das amostras V3.1, sem alteração/recodificação; 172–176 e 178–180 foram produzidos com o mesmo roteiro instrumental.
- **Critério sonoro:** vibrato suave e gradual apenas em notas longas, redução do destaque da flauta/oboé no soprano, violinos e viola em timbre médio, ligaduras de frase, sustentação discreta, contrabaixo subgrave e tuba, tenor sustentado por violoncelo, trombone e fagote; andamento aprovado do lote anterior, sem aumento adicional.
- **Biblioteca efetivamente usada:** `TimGM6mb.sf2`. A Sonatina Symphonic Orchestra ainda NÃO foi instalada nem utilizada. Não afirmar timbres de amostras profissionais nesta versão.
- **Estado:** lote de MP3 tecnicamente verificado, **AINDA AGUARDA APROVAÇÃO AUDITIVA do usuário e não está publicado no GitHub**. Nenhum arquivo da pasta `audio/` nem `teste-multimidia.html` foi modificado na preparação deste lote.
- **Próximo passo:** ouvir a nova carga e aprovar ou pedir refinamentos; somente depois subir os dez arquivos à pasta `audio/`, incluir os Hinos 171–180 e as partituras na próxima versão de TESTE do HTML, testar e atualizar documentação. Nunca alterar `index.html` sem autorização.
- **Atenção musical:** preservar ligaduras de prolongamento, de expressão, fermatas, `rall.`, `poco rall.`, tercinas, finais e demais sinais segundo cada partitura. Verificação técnica do MP3 não substitui aprovação musical.
**REV08 prevalece sobre instruções históricas conflitantes.**

## REV07 — 12/11/2026 — V7.78.3 aplicada; MP3 171–180 em avaliação
- **V7.78.3**: usuário confirmou que aplicou a correção de reflow do metrônomo e das mídias no desktop, e optou por seguir o projeto. A possibilidade de regressão em aparelho real permanece sujeita a novo relato. O `index.html` continua protegido; a versão de testes atual é V7.78.3.
- **Correção V7.78.3**: metrônomo à esquerda e mídia à direita em desktop quando ambos abertos, independentemente da ordem (metrônomo primeiro ou mídia primeiro), evitando barra de rolagem interna induzida por ordem de cliques.
- **Nova carga MP3 171–180 GERADA, MAS NÃO APROVADA nem publicada.** Arquivos: `hino-171.mp3`…`hino-180.mp3`, um por hino no caminho final `audio/`. Não confundir áudio gerado, validado tecnicamente, aprovado musicalmente e publicado no GitHub.
- **Andamento experimental:** BPM da partitura × **1,045** (+4,5%) para teste; somente manter se o usuário aprovar e se o caráter de cada hino permitir. Não alterar notas, ritornelos, coro ou finalizações.
- **Verificações de partitura 171–180:** Hinos 171 e 177 contêm ligaduras de prolongamento na fonte; Hinos 171, 172, 174, 179 e 180 contêm fermatas como `Articulation/fermata`, tratadas com sustentação adicional discreta (~0,24 s por ponto). Não foram localizados objetos `Tuplet` nem comandos textuais estruturados de `rall.`/`poco rall.` nas MSCX examinadas. **Isso não equivale a validação visual nem musical final** — conferir sempre a partitura e a audição.
- **Padrão mantido:** MP3 único por hino em `audio/hino-N.mp3`, instrumentação de referência Hino 61 V4.1; sem segunda biblioteca orquestral. Hinos 1–170 e produção não devem ser sobrescritos para incluir 171–180.
- **Próximas etapas:** (1) usuário ouve e aprova/revisa 171–180, (2) sobe MP3 aprovados, (3) prepara Hinos 171–180 com letras, imagens e mídias na próxima versão do HTML de testes, (4) testa e só então considera promoção a produção.
**REV07 prevalece sobre o estado descrito nas revisões anteriores.**

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

## MARCO REV05 — Hinos 161–170 aprovados (12/11/2026)

**Estado:** os dez MP3 `hino-161.mp3` a `hino-170.mp3` foram gerados, testados e aprovados pelo usuário. **Ainda não estavam presentes na pasta `audio/` do GitHub no momento desta revisão.** Não declarar publicação ou integração em HTML antes de verificar o repositório.

**Andamento para próximas cargas:** buscar andamento discretamente mais vivo, de preferência ligeiramente acima da média **quando a indicação musical permitir**; nunca acelerar arbitrariamente, alterar fórmula de compasso, ligaduras, fermatas, ritornelos ou descaracterizar hinos solenes. Avaliar o BPM conforme a partitura de cada hino e validar auditivamente antes de aprovar.

**Padrão de arquivos:** `audio/hino-N.mp3`, um único MP3 por hino, com a sonoridade referencial Hino 61 V4.1. Os Hinos 1–160 e a produção `index.html` permanecem protegidos.

**Ordem de execução:** 1) enviar os dez MP3 para `audio/` sem substituir os anteriores; 2) integrar Hinos 161–170 com letras, dados de metrônomo, ocasião, partituras e mídias **apenas no `teste-multimidia.html`**; 3) validar responsividade, integridade e mídias; 4) solicitar aprovação antes de promover para `index.html`; 5) somente então iniciar os MP3 171–180 com o novo critério de andamento.

**Estas instruções REV05 prevalecem sobre descrições anteriores de status.**

## DECISÕES ATUAIS — REV04 (12/11/2026)
1. **Um único MP3 por hino.** Caminho `audio/hino-N.mp3`, sem nova biblioteca completa `audio/orquestral/` e sem adicionar opções extras ao modal. A pasta experimental antiga pode permanecer como backup e não deve orientar a expansão.
2. **Hino 61 V4.1 aprovado musicalmente.** É a referência sonora para novas cargas: tuba e graves encorpados, orquestra natural, dinâmica equilibrada, ligaduras e fermatas de acordo com cada partitura. A V3 permanece como referência histórica.
3. **Não refazer automaticamente 1–160.** Corrigir um hino antigo apenas quando o problema estiver identificado e autorizado. Prioridade: Hinos 161 em diante, coros e mais de 300 mídias restantes.
4. **Teste V7.77 preparado.** Única alteração no HTML V7.76: `audio/hino-61.mp3?v=776` torna-se `audio/hino-61.mp3?v=777`. O arquivo binário aprovado deve ser publicado como `audio/hino-61.mp3`.
5. **Cuidado com a produção:** atualizar o arquivo `audio/hino-61.mp3` afeta toda página pública que usa esse endereço, mesmo sem mudar `index.html`. Somente a troca da mídia aprovada está autorizada; `index.html` e `sw.js` devem permanecer intocados.
6. **Separar estados:** aprovado, preparado para envio, enviado ao GitHub e testado no site são coisas diferentes. Não declarar publicação nem compatibilidade em produção sem confirmar.
7. **Sincronizar documentação:** cada modificação aprovada atualiza DOC, changelog, prompt, checklist, SHA e ZIP.
**Estas decisões REV04 prevalecem sobre descrições históricas de REV02/REV03 abaixo.** A documentação antiga é preservada como registro, não como instrução vigente.

## 1. Identidade, propósito e ambientes

O **Guia do Hinário nº 5 — CCB** é uma aplicação web/PWA para consulta de hinos por ocasião, estudo musical e reprodução de mídias. Está organizada em HTML/CSS/JavaScript, com arquivos MP3 locais, partituras e links de plataformas externas. O repositório de referência informado para o projeto é [Douphing/guia-hinario5](https://github.com/Douphing/guia-hinario5).

| Ambiente ou artefato | Finalidade | Regra |
|---|---|---|
| `index.html` | Produção, página usada pelo público | **Não substituir ou editar sem aprovação explícita**, depois de testar o piloto. |
| `teste-multimidia.html` | Página principal dos testes | Toda melhoria funcional e visual deve ser aplicada aqui primeiro. |
| `teste-multimidia-vX.Y-teste.html` | Backup identificado da versão | Gerar cópia antes de mudanças; nunca confundir número e conteúdo. |
| `audio/hino-N.mp3` | Instrumental local de cada hino | Não sobrescrever os existentes por suposição. |
| `assets/partituras/` | Imagens das partituras | Preservar nomes, quantidade de páginas e sequência de exibição. |
| `sw.js`, `manifest.webmanifest` | PWA e atualização/cache | Verificar cache e fluxo de atualização antes de mudar. |

**Inventário confirmado:** no repositório consultado, a pasta `audio` tem os arquivos numerados de **`hino-1.mp3` a `hino-160.mp3`**. O HTML de teste inclui os **Hinos 1–160** e referências a **Coros 1–6**. A completude de cada mídia externa individual deve continuar a ser conferida; a presença do hino no código não prova que todos os seus links estejam corretos.

## 2. Regras invioláveis de preservação

1. **Nunca alterar o conteúdo dos Hinos 1–120** — letras, estrofes, coros, IDs e estrutura aprovados. Para ajustes inevitáveis, solicitar autorização específica e trabalhar com comparação de diferenças.
2. Preservar os demais hinos existentes (121–160), coros, links, dados e recursos. Corrigir somente itens identificados e aprovados, sem regressões.
3. **Não substituir `index.html` com uma versão experimental.** Sequência: arquivo de teste → validação no celular e desktop → aprovação → eventual promoção autorizada para produção.
4. Não eliminar nem migrar automaticamente **favoritos, hinos chamados, observações, registros e dados locais**. Alterações em localStorage exigem plano de compatibilidade e teste de migração.
5. Não quebrar **mídias MP3, YouTube, YouTube Music, Spotify, metronomo, partituras, visualização de letras, compartilhar, pesquisa, navegação, favoritos, registros ou PWA**.
6. Fazer mudanças cirúrgicas e rastreáveis; evitar acumular camadas de CSS conflitantes, duplicar nós, deslocar controles ou trocar a arquitetura do modal sem necessidade.
7. **Não inventar mídias ou letras.** Validar URL, hino correto, número da estrofe, coro e ordem musical com a fonte apropriada.
8. Não afirmar que um teste de sintaxe ou iframe simulado confirma execução real no celular; testar a aplicação publicada quando dependente de APIs externas, reprodução e cache.
9. **Nunca prometer reprodução garantida com navegador fechado ou em segundo plano.** Restrições do Android, WebView, API YouTube e políticas de autoplay variam.
10. Não limpar comentários históricos do HTML em massa antes de estabelecer documentação e backup. Mudanças de limpeza têm de ser uma etapa distinta e reversível.
11. **Toda mudança aprovada exige documentação sincronizada na própria entrega:** atualizar `DOCUMENTACAO_CONTINUIDADE.md`, `CHANGELOG.md`, `CHECKLIST_VALIDACAO.md` quando pertinente, `PROMPT_DE_RETOMADA.md`, número/revisão e manifesto de integridade do pacote. Nenhuma aprovação deve ficar registrada apenas na conversa.
12. **Separar estados:** proposta → teste → aprovação musical/visual/funcional → integração na página de teste → publicação autorizada. Aprovar um MP3 não equivale a publicá-lo nem a alterar o HTML.

## 3. Funcionalidades que precisam ser preservadas

**Consulta e organização:** índice e ocasiões; pesquisa; cartões dos hinos; favoritos; hinos chamados; observações; histórico/registros por hino e lista geral; compartilhabilidade de hino; letra; dificuldade de estudo; navegação Anterior/Próximo; dispositivos móveis e desktop.

**Mídias e estudo:** MP3 instrumental; links ou embeds Spotify, YouTube, YouTube Music; visualização de partituras com múltiplas páginas; zoom/rotação conforme implementado; metronomo de estudo com BPM, pulsação e volume; mini-player e vídeo flutuante; botões de próximo/anterior, reproduzir/pausar, parar, fechar só a mídia, minimizar/maximizar; modos ao terminar (Parar, Próximo, Repetir quando compatível, Aleatório).

**Regras de UI aprovadas:** controles de reprodução **monocromáticos e compactos numa única linha**, fundo claro/navy e realce apenas no ativo; rótulo pequeno no botão selecionado (por exemplo, Pausar ou Próximo); **Fechar mídia** separado de **Fechar modal do hino**; ação de **Maximizar ↗** e de minimizar legível; botão **Registros** ao lado de **Letra/Compartilhar** quando houver dados; notificação de registros; distribuição proporcional sem criar rolagem evitável; clave de sol e linhas sem tocar botões; setas separadas mesmo quando somente uma está habilitada.

**Comportamento dos registros (correção V7.75):** abrir Registros de um hino filtra somente aquele hino; ao acessar depois **Hinos chamados** pelo menu, a lista **geral** não pode herdar esse filtro do último hino (`__historyHymn`). Caso de regressão: Hino 44 → Registros → fechar → Hinos chamados geral → todos devem aparecer.

**Apresentação:** no desktop, usar a altura disponível e duas colunas nos contextos já aprovados; ao expandir o metrônomo em desktop baixo, não deixar cabeçalho e setas flutuarem nem cortar vídeo. No celular, não prolongar verticalmente a interface sem necessidade nem perder cabeçalho/rodapé ao abrir vídeos.

## 4. Estado atual e distinções importantes

| Item | Estado conhecido em 12/11/2026 | Conduta |
|---|---|---|
| Interface web de teste | **V7.76**, baseada em V7.75; `teste-multimidia.html` deste pacote | **Base atual de referência**, conferir antes de qualquer edição. |
| Hinos já montados no HTML | 1–160 e coros existentes | Preservar; verificar links e áudio caso a caso. |
| MP3 do Hino 61 integrado na V7.76 | `audio/hino-61.mp3?v=776` (renderização linear corrigida) | Já há vínculo no HTML, mas não é a nova orquestra V2. |
| Hino 61 — Orquestra V2 | Aprovada anteriormente; preservada para comparação e MIDI-base | **Não é mais a referência final de mixagem**, não integrada. |
| Hino 61 — Orquestra V3 Tuba Grave | **Aprovada em 12/11/2026**, grave mais presente e contraste orquestral agradável | **Nova referência sonora; MP3 separado, sem substituição na aplicação.** |
| Demais orquestrais | Não construídos em lote | Próxima frente paralela, após fonte musical e aprovação por etapas. |
| Próximos hinos | **A partir do 161**, expansão prevista | Carregar letra, mídias, partitura e dados usando fonte verificada. |
| Produção | `index.html` do repositório público | **Não foi atualizado nesta organização.** Conferir versão antes de publicar. |

**Integridade do backup de teste:** `SHA-256 = d75a3228d6d9a852753961a2e1a7b05fc3829fa943630372403239043077450c`.  
**Integridade do Hino 61 Orquestra V3:** `SHA-256 = 80e74b6af7d7a46c79fd4fe359dd8fef392cdd21849bc48136844cec68faa141`.  
**Integridade do Hino 61 Orquestra V2:** `SHA-256 = 3fb962ba39ea36028c817da05084cc71ab51a5a7e8ecfbdd96915d6a13525d23`.  
Essas impressões digitais servem para confirmar que um arquivo recebido em outro chat é exatamente a mesma cópia; **não indicam que o arquivo do GitHub atual seja idêntico**.

## 5. Padrão musical aprovado e Hino 61

O **Hino 61 — “A minha alma deseja ver-Te”** é especial, com três estrofes, retornos e terminações diferentes. O padrão aprovado de orquestra é agora a **V3 — Tuba Grave**, derivada do arranjo V2 de cerca de 13 timbres virtuais. A V3 conserva a linha musical e privilegia uma mixagem com **tuba e baixo mais perceptíveis**, mantendo a definição dos demais naipes:

- **Metais:** trompete, trombone, trompa e tuba;
- **Madeiras:** flauta, clarinete e oboé;
- **Cordas:** violinos, viola, violoncelo e contrabaixo;
- **Acompanhamento:** textura de cordas e órgão suave.

**Critérios de execução:** preservar notas, ritmo, vozes, ligaduras e indicações da partitura; evitar rearticulação indevida de notas ligadas; **fermatas moderadas**, sustentadas de modo musical, sem pausas longas desproporcionais; respeitar diferentes finais, repetição da primeira e segunda estrofes e final da terceira; não criar introduções ou reprises não previstas.

**Referências dentro do pacote:** `musica_aprovada/Hino_61_Orquestra_V3_Tuba_Grave.mp3` (**nova referência auditiva aprovada**); `musica_aprovada/Hino_61_Orquestra_V2.mp3` (histórico); `musica_aprovada/hino-61-orquestra-encorpada-v2.mid`, `fonte_musical/hino-61-linear-completo.mscx`; além de `audio_referencia/hino-61-corrigido.mp3`, que corresponde ao áudio linear usado no teste web.

**Regra musical aprovada para as próximas cargas (revisão 03):** o timbre/arranjo orquestral **Hino 61 V3 — Tuba Grave** é o **modelo sonoro padrão** para os novos instrumentais orquestrais, salvo decisão diferente para algum hino. O objetivo é orquestra expressiva e equilibrada, com metais/cordas/madeiras audíveis e melodia destacada. **Não copiar literalmente as repetições, fermatas, ligaduras, finais nem o tempo do Hino 61 para outro hino**; essas características pertencem à partitura individual. Fermatas moderadas, notas ligadas sem reataques artificiais, finais naturais, dinâmica coerente e sem instrumentação que encubra a melodia. Gerar **versão orquestral separada**, preservar MP3 atual e exigir comparação auditiva antes de integrar.

**Aprovação musical V3 (12/11/2026):** o usuário confirmou que o reforço da tuba na versão V3 deixou o campo harmônico mais agradável e destacou o contraste entre os naipes. **A V3 é a referência de MIXAGEM, não um novo arquivo de partitura**: o MIDI-base preservado permanece o da V2. Para novas cargas, a tuba deve reforçar os graves segundo a partitura de cada hino, evitando mascaramento e distorções.

**Para os outros hinos:** MP3 atual é referência auditiva, **não partitura separada por instrumentos**. Preferir os arquivos MusicXML/MuseScore ou MIDI originais (por exemplo, o pacote `ccb-hinario-5-do-master.zip`, se disponibilizado). Produzir grupos pequenos, conferir ligaduras/fermatas/retornos por hino, comparar a orquestra ao instrumental existente e só integrar depois de aprovação. Manter as duas versões em caminhos diferentes.

## 6. Próximas frentes e ordem de trabalho

**Regra de carga integrada:** ao construir os próximos hinos, **preparar o MP3 novo já com o modelo sonoro orquestral aprovado (Hino 61 V3 — Tuba Grave)** quando houver partitura/MIDI suficiente, verificando as regras musicais daquele hino. Isso **não autoriza substituir os MP3 1–160 automaticamente** nem integrar arquivos não revisados. Se faltar partitura ou validação, registrar “áudio orquestral pendente” e manter o instrumental existente.

**Frente A — Prioritária: construção de hinos e mídias.** Continuar a partir do Hino 161, em lotes controlados. Para cada um: número e título; letra/estrofes/coro; andamento, tonalidade e compasso; partitura por páginas; arquivo MP3 completo; Spotify, YouTube, YouTube Music validados; tags por ocasião, dificuldade quando fundamentada; registro da procedência e status de cada mídia. Sem tocar no conteúdo de 1–160 fora de reparos autorizados.

**Frente B — Paralela: orquestra virtual.** Adotar o timbre V3 do Hino 61 como referência, com arranjo apropriado a cada hino. Gerar novo áudio fora da produção e manter comparação A/B. Não converter automaticamente todos os MP3 por simples duplicação de timbres ou algoritmos sem partitura.

**Frente C — Organização do código.** Depois de salvar backup, reduzir comentários históricos redundantes no HTML e passar o histórico para `CHANGELOG.md`. Manter no topo do HTML apenas um comentário curto de versão. Documentar módulos e regras em `DOCUMENTACAO_CONTINUIDADE.md`. Não realizar a limpeza junto com uma mudança funcional.

**Frente D — Analytics (independente do HTML até validação):** acompanhar acessos e eventos; preservar a exploração “Registro de Estados” recuperada com dimensão Região; criar **uma exploração separada** para Idade/Gênero, sujeita a limites demográficos do GA4; revisar nome antigo do fluxo Web em Administrador → Fluxos de dados; comparar números sempre no mesmo período e métrica (633 em últimos 28 dias não equivale necessariamente a 785 num período maior). Não alterar coleta/ID de medição sem diagnóstico.

## 7. Procedimento obrigatório para qualquer nova versão

1. **Receber a fonte real:** `teste-multimidia.html` vigente e, quando envolver áudio/imagem, as respectivas pastas/arquivos. Ler este documento e comparar datas, versões e SHA; não construir código a partir da conversa somente.
2. **Identificar precisamente o defeito:** reproduzir em versão anterior e definir o comportamento esperado. Salvar cópia numerada (`teste-multimidia-vX.Y-teste.html`).
3. **Fazer uma alteração delimitada:** sem renomear IDs, apagar dados embutidos, recriar modais ou CSS conflitante por conveniência. Atualizar apenas o trecho necessário.
4. **Testar a mesma sequência:** cenário normal, cenário problemático e regressões em celular e desktop. Conferir **sem/ com registros**, **mídia aberta/fechada**, **metrônomo aberto/fechado**, **primeiro/último hino**, **navegação**, **PWA/cache**.
5. **Testes técnicos e visuais:** extrair scripts e checar sintaxe; verificar console; capturas em pelo menos 320×700, 390×844, 1000×600, 1080×550 e 1366×768; testar vídeos externos na página hospedada quando necessário. **Sem rolagem desnecessária**, mas não esconder conteúdo quando a altura for realmente insuficiente.
6. **Comparar conteúdo:** garantir que todos os hinos e funcionalidades já existentes permaneçam intactos; se for expansão, comparar o inventário original e o novo.
7. **Entregar os artefatos com identificação correta:** arquivo versionado, cópia nomeada `teste-multimidia.html` e, quando houver mídia nova, pacote com pastas relativas; indicar exatamente os arquivos modificados, testes e limitações.
8. **Aguardar aprovação expressa:** somente depois disso promover o teste para produção, se o usuário solicitar. Não subir automaticamente ao GitHub.

## 8. Testes de regressão prioritários

| Cenário | O que confirmar |
|---|---|
| Hino 1 e Hino 160 | Quando existe uma única seta de navegação, ela não fica sobre a clave. |
| Hino 44 | Registros individuais não filtram “Hinos chamados” geral após fechar. |
| Hino 61 | Três estrofes e final especial; MP3 linear no HTML V7.76, mix orquestral V2 histórica e mix V3 aprovada e separada — não confundir. |
| Hino 103 | Marcação e observação: badge Registros, três botões proporcionais, sem linha extra. |
| Hino 159 | Mídia externa + metrônomo expandido; no desktop baixo, sem cabeçalho cortado nem rolagem indesejada. |
| Coro 5 | Páginas da partitura sem separação artificial; leitura contínua no celular. |
| Modal em 320/390 px | Cabeçalho/rodapé acessíveis, controles compactos e vídeo dentro da tela. |
| Vídeo minimizado | Janela única arrastável, controls próprios, Maximizar/Fechar claros e sem atraso perceptível. |
| Hinos chamados e favoritos | Persistência preservada após trocar de hino, atualizar página e reabrir. |
| YouTube/YouTube Music/Spotify | Links corretos do hino e limitações de autoplay/encerramento respeitadas. |

## 9. Incidentes que não devem se repetir

- **V7.72 — regressão grave:** ícone de registros solto, setas agrupadas, cabeçalho/rolagem prejudicados e metrônomo deslocando a interface. A versão foi descartada; **não usar como base**.
- Mudanças que acrescentaram linhas separadas de histórico empurravam o vídeo; a solução desejada é **Registros integrado** aos botões secundários, com badge sem duplicar contagens.
- **V7.75 — bug de filtro:** consulta de registros de um hino não pode contaminar a listagem geral subsequente.
- Arquivo distribuído com **número de versão antigo** criou confusão. Não atualizar o mesmo nome versionado com mudanças novas.
- Reprodução em segundo plano de vídeo incorporado **não deve ser prometida** fora das possibilidades autorizadas pelo navegador e APIs.

## 10. Como retomar em outro chat ou com outra ferramenta

1. Anexar **este dossiê** e o **arquivo real `teste-multimidia.html`** do pacote (ou versão mais recente aprovada).
2. Se o trabalho for musical, anexar também os MP3/MIDI/MuseScore de referência.
3. Colar o texto de `PROMPT_DE_RETOMADA.md`.
4. Pedir primeiro um **inventário resumido** e a conferência do estado atual; depois autorizar a alteração específica.
5. Exigir apresentação das diferenças, testes, arquivo final e ausência de edição da produção.

## 11. Protocolo obrigatório para atualizar a documentação após cada aprovação

**Gatilho:** o usuário aprova uma correção, mídia, hino novo, recurso de interface, regra musical ou promoção de versão. **Na mesma entrega ou imediatamente após a aprovação, atualizar e redistribuir o pacote**; não depender da memória ou do histórico do chat.

1. Registrar o que foi aprovado, data, versão do artefato, arquivo(s), objetivo, condições e ressalvas. Não confundir “aprovado para testes” com “integrado” ou “publicado”.
2. Atualizar `DOCUMENTACAO_CONTINUIDADE.md` (estado e regras), `CHANGELOG.md` (marco, riscos, versão), `PROMPT_DE_RETOMADA.md` (última base e próximo passo), `CHECKLIST_VALIDACAO.md` se surgirem novos casos e `README_PRIMEIRO.md` se os arquivos mudarem.
3. Atualizar cópias de trabalho pertinentes (HTML de teste, áudio, partitura) **apenas se houve implementação real**. Os backups anteriores permanecem imutáveis; nunca substituir `index.html` sem autorização expressa.
4. Recalcular `SHA256SUMS.txt`, conferir conteúdo do ZIP e **emitir pacote de revisão identificada**. A versão do Guia (`V7.xx`) e a revisão do dossiê (`REV02` etc.) são independentes.
5. Na retomada de outro chat, identificar a última revisão do pacote e comparar com a versão do arquivo técnico. Se houver divergência, interromper a edição e esclarecer qual arquivo está realmente aprovado.

**Decisão aprovada em 12/11/2026 (REV03):** usar o padrão orquestral do Hino 61 **V3 — Tuba Grave** nas próximas cargas com partituras disponíveis e fermatas/ligaduras específicas de cada hino; manter a construção de letras, partituras e mídias externas na prioridade principal. **O HTML de teste segue V7.76 e a orquestra V3 permanece separada até integração autorizada; V2 também foi preservada.**

**O documento é uma fotografia datada, não uma substituição da base técnica.** Sempre atualizar a revisão e o manifesto ao aprovar novas versões, sem apagar os incidentes e regras que protegem o projeto.