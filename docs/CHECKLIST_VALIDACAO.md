# REV11.5 — Checklist Hino 74 / V7.81.13
- [x] Lida partitura original: semínima 72–88; seleção **83 BPM** um pouco acima da média80.
- [x] Audio V3 regenerado da partitura MSCX, sem cortes/crossfades, fermatas m16 1ª/2ª terminações sustentadas ~3,68s e respiração ~0,15s; 3ª terminação preservada.
- [x] Tuba, contrabaixo, subgrave e tenor mais presentes, sem clipping detectado, duração ~2min46s.
- [x] Piloto HTML só Hino 74: checkbox MP3 acompanha BPM, testes 77→0,93×, 83→1×, 85→1,02×, desligar→velocidade manual.
- [x] 34 scripts válidos; dados LETRAS e MULTIMIDIA de 1–210/Coros preservados, exceto BPM 74 (84→83).
- [ ] Testar audio real em celular/desktop HTTPS e confirmar sustain, timbre e articulação nos BPM 72, 77, 83, 85, 88.
- [ ] Validar retomada de volume, mute, anterior/próximo/repetir/aleatório, partitura e layout sem rolagem.
- [ ] Aprovação musical antes de substituir áudio de produção; HTML de produção só com autorização separada.
Ver [REV11.5](HINO74_ORQUESTRA_SINCRONIA_REV11_5.md).

---

# REV11.4 — testes do Hino 74 V2 84 BPM
- [x] MSCX confirmado: **♩ = 72–88 BPM**; opção de TESTE 84 BPM (metade superior).
- [x] MP3 V2 de 164,08s criado com transposição nominal zero, fermatas menores preservadas.
- [x] Metrônomo do Hino 74 na V7.81.12 TESTE alterado 80→84 BPM; 33 scripts válidos; sem alteração de outros dados.
- [ ] Aprovação auditiva de fermatas, fraseado e ganho em dispositivo real.
- [ ] Testar HTML + MP3 juntos em ambiente de testes, após backup.
- [ ] Não substituir index.html de produção sem aprovação.
**Norma permanente:** andamento da faixa média→máxima da partitura na unidade correta. Ver [REV11.4](ANDAMENTO_HINO_74_REV11_4.md).

---

# Checklist REV11.3 — sequência de mídia V7.81.11
- [x] Próximo MP3 210→1; Anterior 1→210; coros 6→1.
- [x] MP3 Repetir, Parar, Aleatório testados; Hino 21 com `partitura-especial` executado uma vez antes de avançar.
- [x] YouTube e YouTube Music: 10 testes com API IFrame simulada, inclusive fim de trecho temporizado; próximo modal abre conforme modo.
- [x] 23 testes de controlador passaram, 33 scripts JS válidos, apenas dois scripts alterados; dados, CSS e mídias preservados.
- [ ] Testar em HTTPS playback real MP3 210→1 e YouTube/YTM, autoplay e faixa de coletânea.
- [ ] Verificar Spotify anterior/próximo manual e avisos de limitação; não declarar sequência automática garantida.
- [ ] Confirmar modal sem rolagem em desktop, botões sempre visíveis, mini-player, partitura, metrônomo, volume/mute e registros.
- [ ] Publicar somente HTML de testes após backup, sem promover `index.html` sem aprovação.
Ver [REV11.3](SEQUENCIA_ENTRE_MODAIS_REV11_3.md).

---

# Checklist antirregressão REV11.2 — V7.81.10
- [x] Modal desktop com MP3 e metrônomo aberto ampliado até 1450px, duas colunas; Ocasiões/Apropriação lado a lado.
- [x] Chromium com MP3 e JPG reais da carga: 1027×392, 1024×500, 1280×590, 1280×720 e 1600×900 **sem scroll interno do MP3**.
- [x] 1027×392: antes rolagem 80px, depois 0px; miniatura da partitura e controles visíveis.
- [x] Mobile 390×844 com mesmas posições e overflow da V7.81.9.
- [x] Apenas CSS adicionado; 33 JS sem erros de sintaxe; nenhum dado musical/partitura/MP3/link alterado.
- [ ] Testar no GitHub Pages/HTTPS com zoom real 100%/125%/150% e metrônomo aberto, inclusive duração longa e fim do áudio.
- [ ] Conferir partitura ampliada, player externo YouTube/YouTube Music/Spotify, botões em linha, favoritos/registros e dispositivos Android/desktop.
- [ ] Não publicar em `index.html` de produção sem aprovação explícita.
Ver [REV11.2](MODAL_DESKTOP_SEM_ROLAGEM_REV11_2.md).

---

# Checklist REV11.1 — vínculos e apresentação 201–210
- [x] HTML V7.81.9 mostra os botões Spotify/YouTube/YouTube Music sem subtítulos de canal e sem "Pesquisar"; mídia sem faixa válida tem botão desabilitado.
- [x] Seis vídeos YouTube das fontes instrumentais, três IDs Spotify de fontes autorizadas, dois trechos candidatos da Vozes do Campo.
- [x] 210 hinos, 6 coros, 33 scripts válidos; dados 1–200 e MP3/partituras preservados.
- [x] Testes Chromium 390px nos modais 201, 202, 205, 207, 208, 209, 210, sem JS errors.
- [ ] Ouvir os dois trechos Vozes do Campo e comprovar **canto**, não playback instrumental.
- [ ] Testar Spotify 205/206/208 e vídeos YouTube em HTTPS, conferir número+título/edição/fonte exatos.
- [ ] Pesquisar as 19 opções ausentes somente nas fontes autorizadas. Não inserir links genéricos nem artista não solicitado.
- [ ] Testar controles em linha única, sequência/volume/mute, responsividade, MP3, metrônomo, registros e favoritos.
- [ ] Publicar somente `teste-multimidia.html` após backup, nunca `index.html` de produção sem aprovação.
Ver [REV11.1](CORRECAO_MIDIAS_201_A_210_REV11_1.md).

---

# Checklist REV11 — Hinos 201–210 / V7.81.8 TESTE
- [x] Fontes MSCX de 201–210 recuperadas; 10 MP3 V4.5 gerados, 10 JPG isolados.
- [x] Hinos 1–200/Coros 1–6 preservados em MULTIMIDIA e LETRAS; 33 scripts sem erro de sintaxe.
- [x] Metrônomos na unidade correta; 205 semínima pontuada, 206 colcheia, 208 mínima.
- [x] Modal 210 abre em 390/1280px por Chromium de testes sem erro JS; teste HTTP local bloqueado por política.
- [x] Som médio −16,2 a −15,5 dBFS sem saturação digital.
- [ ] Validar letras/coros e detalhes de partituras de 201–210 no celular/desktop.
- [ ] Ouvir os dez MP3 e conferir andamento, fermatas, naipes, sustain e finais.
- [ ] Testar 200→201→210, botões sempre visíveis, modo próximo/repetir/aleatório, mute e volume.
- [ ] Confirmar gravação YouTube 209 e Spotify 208 na plataforma; localizar somente links das fontes permitidas, em especial Vozes do Campo para canto no YouTube Music.
- [ ] Publicar arquivo de testes e novos MP3/partituras após backup, SEM `index.html` de produção.
- [ ] Obter aprovação expressa antes de promoção.
Ver [REV11](CARGA_HINOS_201_A_210_REV11.md).

---

# Checklist REV10.9 — V7.81.7: dez botões à mostra
- [x] Expansor "Sequência" retirado; dez controles aparecendo de imediato em **uma linha**.
- [x] Chromium testou 320, 390, 768 e 1280 px: **10 botões, 1 linha, sem overflow**.
- [x] 33 scripts sem erro de sintaxe; player MP3 nativo presente; volume/mute entre Hinos 199→200 preservado no teste de estado.
- [x] HTML não altera links, letras, partituras e MP3 em comparação à V7.81.6; pacote completo repete os mesmos MP3 com ganho da V7.81.6.
- [ ] Testar em celular Android e desktop após publicar SOMENTE arquivo de teste, incluindo troca de hinos, reprodução real e controles.
- [ ] Verificar YouTube/YTM/Spotify, mini-player, controles desabilitados quando a API não oferece suporte, e demais funções.
- [ ] Não editar `index.html` de produção sem aprovação.
Ver [norma REV10.9](BOTOES_VISIVEIS_REV10_9.md).

---

# REV10.8 — Checklist player nativo e masterização 191–200
- [x] Removidos botões e popovers extras de volume e opções, preservando áudio HTML5 nativo.
- [x] Comandos de sequência disponíveis por expansão, sem barra extensa ao abrir o MP3.
- [x] Mute nativo e último volume: teste Chromium 390px 32%→mute→próximo→desmute→32%.
- [x] MP3 191–200 produzidos com +4,3 dB, checagem de pico/média, sem alterar música/andamento.
- [x] Objetos de mídia e letras idênticos à V7.81.5; 33 scripts JS válidos.
- [ ] Substituir `teste-multimidia.html` **em testes** e enviar **também os 10 MP3 masterizados**; guardar cópia dos V4.4.
- [ ] Avaliar som real, possíveis distorções, menu nativo, velocidade/download, modo de sequência e reprodução em Android/desktop.
- [ ] Confirmar demais links, metrônomo, partituras, favoritos/registros, modal e PWA sem regressões.
- [ ] Não publicar em `index.html` sem consentimento. Ver [REV10.8](PLAYER_NATIVO_MASTERIZACAO_REV10_8.md).

---

# Checklist REV10.7 — correções do player MP3 V7.81.5
- [x] Tarja textual redundante removida da apresentação do MP3; erros reais permanecem informativos.
- [x] Menu `⋮` próprio com velocidade (0,75×, 1×, 1,25×, 1,5×, 2×) e Baixar MP3; velocidade preservada em navegação.
- [x] Último volume audível separado do mute; nativo e `Vol. → Ativar som` restauram intensidade após Próximo/Anterior.
- [x] Legenda “Fonte enviada pelo usuário” não aparece nos botões YouTube, permanecendo como metadado de curadoria.
- [x] **17/17 testes em navegador isolado**, **33 scripts sintaticamente válidos**, dados musicais e letras estáticos sem mudanças.
- [ ] Validar no navegador real em HTTPS o MP3 e download, menu móvel 320/390px, desktop e mini-player.
- [ ] Verificar 37% → mute → próximo → desmute → 37%, tanto pelo nativo quanto pelo botão próprio e após recarregar.
- [ ] Conferir modos de término, YouTube/YouTube Music, Spotify com limitações de API, favoritos e registros.
- [ ] Publicar apenas HTML de testes após conferência do SHA remoto; **não alterar `index.html`** sem aprovação.
Ver [REV10.7](MELHORIAS_PLAYER_MP3_REV10_7.md).

---

# Checklist REV10.6 — mapeamento YouTube fornecido pelo usuário
- [x] Números 192, 193, 194, 196, 197, 198, 199 e 200 mapeados de acordo com o usuário.
- [x] Hino 200 preservado com mesmo ID, Hinos 191 e 195 intactos.
- [x] Hino 199: primeira opção integrada e segunda opção registrada sem descartar.
- [x] URLs limpas, sem parâmetros de Rádio do YouTube.
- [x] Integridade verificada: 200 hinos, 6 coros, 33 scripts e dados de outras plataformas intactos.
- [ ] Verificar canal/intérprete dos sete vídeos novos: **Orquestra Sacra, Orquestra Paulista, Orquestra Hymns ou Antony Andrey instrumental**.
- [ ] Ouvir os Hinos 192/193/194/196/197/198/199 e confirmar número/título e execução instrumental; comparar os dois links de 199.
- [ ] Testar iframe YouTube por HTTPS, autoplay, anterior/próximo, repetir, aleatório, volume, celular e desktop.
- [ ] Obter aceite explícito antes de promover ao `index.html`.
Ver [LINKS_YOUTUBE_191_A_200_REV10_6.md](LINKS_YOUTUBE_191_A_200_REV10_6.md). Não declarar revisão auditivamente aprovada antes desses testes.

---

# Pendência específica REV10.5 — vídeos fornecidos pelo usuário
- [x] Nove IDs de vídeo recebidos e registrados, sem inventar associação de número de hino.
- [x] Vídeo `OgNlZz43BEw` reconhecido como o já vinculado ao Hino 200 na V7.81.3; evitar duplicação.
- [ ] Verificar no YouTube os 8 demais IDs quanto a número, título, intérprete e se são instrumentais; só então aplicá-los em versão nova de TESTES.
- [ ] Separar vídeos cantados (candidatos ao YouTube Music) dos instrumentais (candidatos ao YouTube), respeitando as fontes autorizadas.
- [ ] Inserir apenas links individuais com o `v=ID`, sem parâmetros `list=RD...` e `start_radio=1`; testar controles de sequência e volume.
- [ ] Auditar integridade dos dados e obter aprovação antes de qualquer promoção à produção.
Ver [LINKS_RECEBIDOS_191_200_REV10_5.md](LINKS_RECEBIDOS_191_200_REV10_5.md).

---

# Checklist REV10.4 — curadoria 191–200 / HTML V7.81.3 TESTE
- [x] Links externos não aprovados removidos apenas da nova versão de teste.
- [x] YouTube: 4 vídeos individuais instrumentais de fontes aprovadas; 6 buscas rotuladas.
- [x] Spotify: 3 URLs de faixas individuais de fontes aprovadas; 7 buscas rotuladas.
- [x] YouTube Music: 4 candidatos Vozes do Campo com números e tempos de corte; 6 sem canto validado; nenhum instrumental do YouTube reutilizado indiscriminadamente.
- [x] 200 hinos, 6 coros, 33 scripts válidos; letras 1–200, metronômicos, MP3 191–200 e dados multimídia 1–190 sem alteração de valores.
- [ ] **Ouvir Vozes do Campo 191, 193, 199, 200** e comprovar que cada trecho é cantado (não instrumental/playback).
- [ ] Substituir buscas YouTube/Spotify por IDs individuais SOMENTE de fontes autorizadas.
- [ ] Buscar vídeos/áudios realmente **cantados** em fontes autorizadas para os seis hinos sem YouTube Music validado.
- [ ] Testar links externos, início/fim das coletâneas, volume e comandos em navegador HTTPS, celular/desktop.
- [ ] Obter aprovação explícita antes de publicar em `index.html`.
**Não marcar V7.81.3 como concluída em mídias externas até resolver estes itens.** Ver [auditoria](CURADORIA_MIDIAS_191_200_REV10_4.md).

---

# Checklist REV10.3.1 — curadoria por plataforma
- [x] Política escrita: YouTube somente instrumental de Orquestra Sacra, Orquestra Paulista, Orquestra Hymns ou Antony Andrey.
- [x] Política escrita: YouTube Music cantado, pesquisar PRIMEIRO **Vozes do Campo — Hinos CCB**; outras fontes vocais somente as já aprovadas.
- [x] Política escrita: Spotify com Orquestra Sacra prioritária e sem artistas não autorizados.
- [ ] Corrigir na próxima versão de teste todos os links 191–200 incompatíveis com a política, inclusive instrumentais reutilizados em YouTube Music.
- [ ] Conferir para cada link: Hinário nº 5, número, título, intérprete, tipo de música e trecho quando for coletânea. O volume do álbum não é o hino.
- [ ] Testar reprodução real, botões e manutenção de volume; preservar hinos e produção.

---

# Critérios de aceite REV10.3 — identidade de cada plataforma (13/11/2026)
- [x] **Documentada** a regra permanente YouTube instrumental de Orquestra Sacra / Orquestra Paulista / Orquestra Hymns / Antony Andrey; YouTube Music vocal CCB; Spotify de fontes autorizadas.
- [x] **Documentada** a proibição de confundir volume/álbum, ordem da faixa ou edição de hinário com número+título do Hino nº 5.
- [ ] **Hinos 191–200 — YouTube:** reauditar todos os dez vídeos, eliminar referências a intérpretes não aprovados (ex.: Orquestra Expressiff Hino 194) e confirmar que são instrumentais, sem canto dominante.
- [ ] **Hinos 191–200 — YouTube Music:** encontrar gravação **cantada** em fontes aprovadas para cada hino; não utilizar automaticamente os oito vídeos compartilhados do YouTube. Conferir coletâneas, intervalos e voz nas referências 191/200.
- [ ] **Hinos 191–200 — Spotify:** substituir artistas não autorizados do inventário REV10.1 (O Canto dos Fiéis, DioCarv, Douglas Alves, Gustavo Bueno, Encontro dos Amigos) por fontes aprovadas; resolver buscas diretas apenas com IDs confirmados.
- [ ] Validar número, título, edição, fonte e caráter vocal/instrumental para **cada link**; não marcar link sem fonte correta como resolvido.
- [ ] Entregar nova versão de teste corrigida, com auditoria de dados 1–190/Coros e sem modificar `index.html`.
Ver [POLITICA_FONTES_MULTIMIDIA_REV10_3.md](POLITICA_FONTES_MULTIMIDIA_REV10_3.md). O status de testes REV10.2 do player não equivale à aprovação de curadoria das fontes.

---

# Checklist complementar REV10.2 — controles de mídia e volume
- [x] MP3 completo toca apenas uma vez quando `modoReproducao='partitura'`.
- [x] Anterior/Próximo, repetir, aleatório, parar ao terminar e volume entre MP3s: **12/12 testes de navegador isolado**.
- [x] YouTube volume: API simulada 3/3, iniciando no volume salvo, capturando ajuste no player e levando ao próximo hino.
- [x] Spotify: navegação anterior/próximo possível, controles automáticos indisponíveis desabilitados e aviso explícito.
- [x] Dados antigos e links 1–200 e Coros 1–6 sem regressão; scripts sintaticamente válidos.
- [ ] Validar navegador real em HTTPS: MP3, YT, YTM, Spotify (limitações), mini-player e vídeo flutuante.
- [ ] Verificar retenção do volume após reload e com restrições de armazenamento; teste em 320px/390px/1280px.
- [ ] Garantir que o YouTube não permita vídeo diferente da faixa desejada na transição.
- [ ] Obter aprovação explícita antes de promover ao `index.html`.
Ver [documento de regressão REV10.2](CONTROLES_REPRODUCAO_REV10_2.md).

---

# Adendo REV10.1 — mídias dos Hinos 191–200
- [x] Auditoria de numeração: título **e** número de cada hino no Hinário nº 5 conferidos; não usar número de volume, posição no álbum ou Hinário nº 4.
- [x] Fontes prioritárias e alternativas pesquisadas antes de declarar mídia indisponível.
- [x] YouTube: 10 vídeos individuais com número/título de 191–200.
- [x] Spotify: 7 IDs de faixa e 3 pesquisas **explicitamente identificadas** (195, 196, 198). Nenhuma pesquisa rotulada como faixa confirmada.
- [x] YouTube Music: 2 coletâneas temporizadas (191 e 200) e 8 compartilhamentos de vídeo do YouTube identificados como fallback, não catálogo independente.
- [x] V7.81.1 gerada localmente com metadados externos apenas em 191–200.
- [x] Integridade: dados MULTIMIDIA 1–190/Coros preservados, LETRAS 1–200/Coros preservadas; 32 scripts sintaticamente válidos.
- [ ] Conferir em navegador real todos os botões Spotify, YouTube e YouTube Music; validar o fim das coletâneas 191 e 200.
- [ ] Substituir as buscas Spotify 195, 196 e 198 **somente depois** de confirmar IDs exatos de faixa.
- [ ] Identificar, se possível, oito faixas exclusivas do catálogo YouTube Music, no lugar de vídeos compartilhados.
- [ ] Testar visualmente celular/desktop e funcionamento de mídia sem afetar metrônomo, registros e favoritos.
- [ ] Aprovação expressa antes de qualquer promoção a `index.html`.
Ver [mapa e critérios](FONTES_EXTERNAS_191_A_200_REV10_1.md).



**Verificação final de publicação (13/11/2026):** o arquivo remoto `teste-multimidia.html` já corresponde exatamente à base local **V7.81**, SHA Git `b3df54ec10ea65853a298b8ca2d541ae11ef51a1`; ainda **não** contém os metadados novos da **V7.81.1**. Somente a documentação REV10.1 foi publicada nesta etapa; a produção `index.html` continua intacta. Nas notas anteriores, o status V7.80 refere-se a uma consulta anterior e está superado.

---

# Verificação específica REV10 — V7.81 / MP3 V4.4

- [x] HTML V7.80 identificado como base, preservando Hinos 1–190 e Coros 1–6.
- [x] Extensão V7.81 contém 200 hinos numéricos contínuos.
- [x] Dez MP3 191–200 comparados com a V4.4 por SHA-256, sem recodificação.
- [x] 12 JPG das partituras 191–200; duas páginas para 198 e 200.
- [x] Pulsação do metrônomo em colcheia para 191–193 e semínima para 194–200.
- [x] Links externos novos não inventados.
- [x] Sintaxe dos 32 scripts executáveis verificada.
- [ ] Abrir 190 → 191 e retornar 191 → 190, sem sobrepor setas/clave.
- [ ] Abrir 198 e 200 com duas páginas e testar zoom, rotação, navegação.
- [ ] Testar Hino 200 como limite superior e sequência próximo/aleatório.
- [ ] Validar em celulares 320/390 px e desktop 1280/1536 px, inclusive metrônomo e mídia em ordens de abertura diferentes.
- [ ] Conferir letras, coros e MP3 V4.4 contra a partitura original.
- [ ] Testar favoritos/registros e filtro geral (caso Hino 44).
- [ ] Após upload, verificar acessibilidade de cada MP3 e JPG e comportamento de cache/PWA.
- [ ] Obter URLs individuais verificadas para Spotify, YouTube e YouTube Music de 191–200, sem trocar arquivos de hinos existentes.
- [ ] Solicitar aprovação explícita antes de modificar `index.html`.

**Obs.:** navegador automatizado do ambiente bloqueou acesso local; verificações visuais estão pendentes, não aprovadas.

---

# Checklist de validação do Guia — antes de entregar HTML ou MP3

## REV09 — V7.79 (TESTE, pendente de publicação e aprovação)
- [x] Dez registros de `MULTIMIDIA` e `LETRAS` integrados para Hinos 171–180 sem alterar 1–170.
- [x] Hino 172 sem coro; os outros incluem coro quando presente na partitura.
- [x] 12 JPG: `171-p1/p2`, `177-p1/p2`, demais `-p1`; verificar visualmente PDF original compartilhado.
- [x] YouTube Music capítulo correspondente; início e término definidos para 171–179, 180 começa em 1908s.
- [x] Sintaxe JS validada; Chromium 320/390/1280/1536; ordem metrônomo/mídia sem rolagem em desktop.
- [x] MP3 171–180 enviados ao GitHub, SHA correspondente aos dez arquivos locais V3.1 (10/10).
- [ ] Enviar 12 imagens a `assets/partituras/`, testar ambas as páginas do 171 e 177.
- [ ] Enviar APENAS `teste-multimidia.html`, não `index.html`; testar links YouTube Music e navegação 170→171.
- [ ] Revisar em celular real e coletar aprovação do usuário antes de promover produção.
- [ ] Na próxima geração musical: sustain natural sem vibrato/volume periódicos, e fidelidade às articulações originais.

## REV08 — dez MP3 V3.1 aguardam aprovação musical
- [x] Hinos 171–180 gerados com nomes `hino-N.mp3`, estéreo e duração verificada.
- [x] 171/177 preservados exatamente como as amostras V3.1.
- [x] Vibrato atenuado, soprano em registro tímbrico médio, tenor e tuba/contrabaixo preservados.
- [ ] Conferir auditivamente os dez hinos e aprovar a sonoridade.
- [ ] Revisar partituras caso haja divergências de fraseado, fermata, rall. ou tercinas.
- [ ] Somente após aprovação, publicar dez MP3 em `audio/` e integrar HTML 171–180.
- [ ] `index.html` permanece inalterado.

## REV07 — V7.78.3 aplicada e MP3 171–180 em avaliação
- [x] Usuário informou aplicação da V7.78.3; correção ordem metrônomo/vídeo foi testada localmente.
- [ ] Testar novamente no dispositivo real caso surja comportamento diferente.
- [x] Dez MP3 171–180 gerados, nomes `hino-N.mp3`, áudio estéreo válido.
- [ ] Usuário aprovar a interpretação musical/andamento (+4,5% BPM experimental) antes de qualquer publicação.
- [ ] Conferir ligaduras em 171 e 177; fermatas em 171,172,174,179,180.
- [ ] Inspecionar visualmente sinais `rall.`, `poco rall.`, tercinas e compassos de cada partitura antes da integração definitiva.
- [ ] Enviar MP3 171–180 somente depois de aprovados, sem sobrescrever 1–170.
- [ ] Preparar e testar o HTML dos Hinos 171–180 com partituras, letras, metronomo, mídias e sequência.
- [ ] `index.html` de produção não modificado.

## REV06 — checklist específico do HTML de teste V7.78.2
- [x] Hino 162: seção **Final**, sem rotular como Coro.
- [x] Hino 162: manter as três estrofes, 1ª/2ª casas e 3ª terminação conforme partitura.
- [x] Modal Anterior/Próximo: 160→161, 161→162, 169→170 e retorno.
- [x] MP3: slider `Vol.` presente em 320/390/1280px sem rolagem horizontal adicional.
- [ ] Verificar volume em celular real (iOS pode exigir botões físicos).
- [ ] Conferir que os modos Parar/Próximo/Aleatório/Repetir funcionam após 160.
- [ ] Validar V7.78.2 no GitHub de **testes** antes de qualquer promoção a produção.
- [ ] Futuras cargas: verificar `rall.`, `poco rall.`, tercinas/quiálteras, ligaduras, fermatas e finais na partitura original.

## REV05 — expansão dos MP3
- [ ] Verificar no GitHub se `audio/hino-161.mp3` a `audio/hino-170.mp3` foram enviados (aprovados localmente, ainda pendentes de publicação).
- [ ] Não modificar os 160 MP3 existentes nem `index.html` sem aprovação explícita.
- [ ] Integrar hinos, letras e mídias externas inicialmente no HTML de testes.
- [ ] Na próxima carga, definir andamento um pouco mais vivo apenas quando fiel à partitura e ao caráter do hino.

## Integridade da base
- [ ] Confirmar o arquivo-fonte real, versão, tamanho e SHA-256; gerar backup imutável.
- [ ] Comparar dados dos Hinos 1–120 (regra absoluta de preservação) e demais existentes.
- [ ] Confirmar presença das entradas 1–160, coros e mídias antes/depois.
- [ ] Não modificar `index.html` nem recursos públicos sem autorização.
- [ ] Não reinicializar o armazenamento de favoritos, chamados e observações.

## UI e cenários
- [ ] Abrir Hinos 1, 44, 61, 103, 159, 160 e Coro 5.
- [ ] Hino sem registros: dois botões inferiores proporcionais; sem ícone voando.
- [ ] Hino com registros: três botões proporcionais, badge e negrito preservados.
- [ ] Clave afastada de Compartilhar; Anterior/Próximo separados, inclusive seta única.
- [ ] Cabeçalho visível, rodapé/link alcançável, sem rolagem causada por mudanças evitáveis.
- [ ] Modal e metronomo: normal, aberto, fechado, com vídeo aberto, após trocar de hino.
- [ ] Reprodução: play/pause, parar, anterior, próximo, repetir/aleatório quando suportado, minimizar, maximizar, fechar só mídia.
- [ ] Hino 44 → Registros → Fechar → Hinos chamados: lista geral completa.
- [ ] Responsive: 320×700; 390×844; 1000×600; 1080×550; 1366×768.
- [ ] Verificar iframe e autoplay em página HTTPS real; não concluir apenas por mock.

## REV04 — único MP3 por hino
- [ ] Usar apenas `audio/hino-N.mp3` como áudio definitivo, sem duplicação orquestral.
- [ ] Hino 61 V4.1 é a referência de mixagem para novas cargas, preservando notas, ligaduras, fermatas e finais de cada partitura.
- [ ] Em `teste-multimidia.html` V7.77, somente o parâmetro de cache do Hino 61 mudou para `?v=777`.
- [ ] Enviar V4.1 com nome `audio/hino-61.mp3`; atenção: essa mudança também afeta a produção que compartilha o caminho.
- [ ] Não regravar 1–160 em massa e não adicionar opção extra ao modal.

## Musical e assets
- [ ] MP3 e partitura do hino correto (não outro hino).
- [ ] Ordem de estrofes/coros, finais, pausas, compassos, ritmo e tonalidade.
- [ ] Ligaduras corretas; fermatas naturais, sem duração exagerada.
- [ ] Se orquestral: diferenciar versão aprovada da integrada, manter original e saída separada.
- [ ] Nas **novas cargas**, aplicar a referência de orquestra do Hino 61 V3 — Tuba Grave quando a partitura/MIDI permitir; verificar especificamente ligaduras, fermatas moderadas, retornos, estrofes, coro e final **de cada hino**, sem copiar o arranjo de forma mecânica.
- [ ] Conferir equilíbrio entre madeiras, metais e cordas, inteligibilidade da melodia e volume sem saturação; comparação auditiva com MP3 anterior.
- [ ] **Referência V3:** baixo/tuba presentes no conjunto sem embolar graves ou encobrir violoncelos; ouvir em fones e também em alto-falantes limitados, respeitando a audibilidade do baixo sem amplificar subgraves artificialmente.
- [ ] Registrar separadamente aprovação musical, inclusão no pacote, integração ao HTML e publicação no GitHub.
- [ ] Links Spotify, YouTube, YouTube Music e “Abrir na origem ↗” pertinentes.

## Entrega e publicação
- [ ] Verificação de sintaxe de todos os scripts e console sem erro.
- [ ] Comparação/diff das áreas alteradas e arquivos impactados.
- [ ] Arquivo versionado e `teste-multimidia.html` de teste consistentes.
- [ ] Se houver áudio, pacote ZIP com caminhos corretos e nomes válidos.
- [ ] **Na mesma entrega após qualquer aprovação:** atualizar `DOCUMENTACAO_CONTINUIDADE.md`, `CHANGELOG.md`, `PROMPT_DE_RETOMADA.md`, `CHECKLIST_VALIDACAO.md` (quando cabível), revisão do dossiê e README.
- [ ] Regenerar `SHA256SUMS.txt` e pacote ZIP com revisão identificada; conferir arquivo, versão e integridade.
- [ ] Deixar explícito o estado de cada entrega: **teste / aprovado / integrado / publicado**.
- [ ] Solicitar aprovação do usuário para promoção a produção; jamais publicar por pressuposição.