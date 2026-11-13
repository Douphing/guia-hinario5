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