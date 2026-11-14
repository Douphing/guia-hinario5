# CORREÇÃO DE ANDAMENTO REV11.4 — Hino 74 / regra permanente
A partitura MSCX do Hino 74 marca **♩ = 72–88 BPM**. A escolha **72 BPM** da V1 era o mínimo e não segue a preferência aprovada. Versão local V2 de TESTE: **84 BPM**, duas fermatas corrigidas com sustain aproximadamente 3,57s; HTML de teste **V7.81.12** altera só metronomo.bpm do Hino 74 de 80 para 84. Não publicar sem aprovação. **Para TODOS os hinos, o andamento deve ficar entre o ponto médio e o máximo da faixa**, respeitando a figura do pulso e a composição; nunca escolher a mínima por padrão. Preservar origem, dados, controles, volume, letras, modalidades e `index.html`. Ver [REV11.4](ANDAMENTO_HINO_74_REV11_4.md).

---

# Regra obrigatória REV11.3 — modo de término e próximo modal
A base de testes mais recente preparada é **V7.81.11**. A V7.81.10 não circulava no fim (Hino 210 → sequência encerrada); agora **Próximo percorre hinos disponíveis na mídia e retorna ao primeiro**, Anterior retorna ao último, Repetir permanece no mesmo modal, Aleatório escolhe outro, Parar não abre outro. Cuidar dos Coros 1–6 separadamente. **Um MP3 `partitura` ou `partitura-especial` já é a execução completa, não repetir por estrofes**. Validar modo em MP3, YouTube/YTM por evento da API e trechos de coletâneas, preservando volume; autoplay real pode exigir toque. Spotify usa navegação **manual**, sem sequência automática garantida. Preservar modal desktop sem rolagem, dez controles visíveis em linha, fontes autorizadas, Hinos 1–210, letras, partituras, MP3, metrônomo, registros e `index.html`. Testar Hino 210→1 e Repetir/Aleatório no navegador real antes do aceite. Ver [REV11.3](SEQUENCIA_ENTRE_MODAIS_REV11_3.md).

---

# EXIGÊNCIA ANTIRREGRESSÃO REV11.2 — modal desktop largo sem rolagem
A base de TESTE mais recente preparada é **V7.81.10**, sobre V7.81.9; alteração **exclusivamente CSS**. Em desktop com MP3 aberto e metrônomo expandido, modal deve caber sem rolagem interna: largura útil até 1450px, Ocasiões/Apropriação lado a lado, partitura/miniatura e botões sempre visíveis. A V7.81.9 reintroduziu overflow e fez perder a partitura, NÃO repetir. Preservar mobile (390px), player nativo, dez comandos em linha, links de mídia, letras, MP3, partituras, registros/favoritos e `index.html` de produção. Antes da próxima entrega, validar Chromium desktop 1027×392 (zoom elevado) e 1280×720 com MP3 e metrônomo abertos, verificar `scrollHeight<=clientHeight` e partitura/controles visíveis. Vídeos externos e arquivos ausentes podem precisar de scroll de contingência. Documento [REV11.2](MODAL_DESKTOP_SEM_ROLAGEM_REV11_2.md) atualiza o padrão visual, sem mudar a política musical nem preencher os links pendentes da REV11.1.

---

# REGRA REV11.1 — mídias 201–210 e botões limpos
A última versão local para TESTE é **V7.81.9**. A V7.81.8 tinha links de buscas e subtítulos de artista nos botões: **não repetir esse erro**. Exibir os três serviços apenas como **Spotify / YouTube / YouTube Music**; quando um link individual de fonte autorizada não estiver confirmado, **botão desabilitado**, não redirecionar a busca, playlist geral ou canal. YouTube = instrumental Orquestra Sacra / Orquestra Paulista / Orquestra Hymns / Antony Andrey instrumental; YouTube Music = canto com Vozes do Campo prioritária; Spotify = Orquestra Sacra prioritária. Conferir Hinário 5, número, título, intérprete, natureza e volume de álbum. O lote 201–210 tem 6 YT + 3 IDs Spotify + 2 candidatos YTM; faltam 19 vínculos e a validação de canto YTM e reprodução Spotify 205/206. Preservar todos 210 hinos, 6 coros, MP3, partituras, registros, botões em linha única, player nativo, volume e **`index.html` de produção**. Consultar [REV11.1](CORRECAO_MIDIAS_201_A_210_REV11_1.md) antes de editar.

---

# Prompt obrigatório REV11 — continuar após Hino 210
O lote de TESTE mais recente preparado é **V7.81.8**, derivado da V7.81.7 idêntica à produção e ao teste remoto antes da entrega. Hinos 201–210 foram acrescentados com letra e coros fiéis à partitura, dez JPG, dez MP3 `audio/hino-N.mp3` sintéticos Orquestra V4.5 e metronômos próprios, preservando Hinos 1–200, seis coros, registros, favoritos, PWA, partituras, links anteriores, botões em **uma linha sempre visível**, MP3 nativo e volume/mute. **Não alterar `index.html` sem autorização.** Os MP3 exigem audição; especial atenção a 205 ♩.54 (♩81 interno), 206 ♪134 (♩67 interno) e 208 𝅗𝅥53 (♩106 interno); fermatas e coro. Fonte instrumental YouTube somente Orquestra Sacra / Orquestra Paulista / Orquestra Hymns / Antony Andrey; YTM cantado Vozes do Campo prioritário; Spotify Orquestra Sacra prioritária. Não confundir número de volume com número de hino. YouTube 209 e Spotify 208 diretos, outras mídias só pesquisa/pendente; NÃO declarar mídias externas concluídas. Testar em celular/desktop, revisar auditivamente e obter aceite. Leia [REV11](CARGA_HINOS_201_A_210_REV11.md) e [regras REV10.9](BOTOES_VISIVEIS_REV10_9.md).

---

# REGRA VISUAL OBRIGATÓRIA REV10.9 — botões SEMPRE à mostra
Base local mais recente: **V7.81.7**, sucessora de V7.81.6. O usuário rejeitou a barra recolhida "Sequência": **mostrar os dez comandos (Anterior, Tocar/Pausar, Próximo, Parar, quatro modos ao terminar, Minimizar e Fechar) simultaneamente em UMA LINHA compacta, com ícones monocromáticos**, no celular e desktop, evitando segunda linha e expansor. O MP3 deve continuar com barra HTML5 **nativa** logo abaixo, sem `Vol.`/`⋮` duplicados. Manter mute reversível e volume escolhido. Os MP3 masterizados +4,3 dB de 191–200 são os mesmos da V7.81.6; não remasterizar. Proteger todos os hinos, letras, mídias, partituras, fontes aprovadas, registros/favoritos e `index.html`. O teste local de alinhamento não substitui validação real em HTTPS. Leia [REV10.9](BOTOES_VISIVEIS_REV10_9.md).

---

# Regra de interface e som REV10.8 — aplicar em toda nova carga
A base local de testes mais recente preparada é **V7.81.6**. **MP3 deve usar somente controles nativos do navegador**, não acrescentar `Vol.`, `⋮` ou painéis redundantes. As opções download e velocidade do menu nativo dependem do navegador; não prometer controle sobre elas. Preservar anterior/próximo, repetir, aleatório, parar, minimizar e fechar mídia no painel compacto **Sequência**, recolhido por padrão, sem perder o funcionamento. Mute não deve apagar o último volume positivo; inclusive 32% → mute → hino seguinte → desmute deve voltar a 32%. **MP3 191–200 foram masterizados em pacote separado com +4,3 dB**: para aplicar aumento, publicar também os dez novos MP3 no ambiente de TESTE, sem modificar MP3 1–190 nem alterar a partitura/tempo musical. Fazer backup dos V4.4. Dados anteriores, letras, coros, fontes aprovadas, links, registros, favoritos e metrônomo permanecem protegidos. Validar áudio real em HTTPS e aparelho antes do aceite; não alterar `index.html` de produção. Leia [REV10.8](PLAYER_NATIVO_MASTERIZACAO_REV10_8.md).

---

# Regra nova obrigatória REV10.7 — MP3 e volume
Ao continuar o Guia, a base local mais recente preparada é **V7.81.5**. Não voltar a exibir tarja informativa permanente sob o player MP3. O menu **⋮ próprio do Guia**, ao lado de `Vol.`, deve manter ações **Baixar MP3** e **Velocidade** 0,75×/1×/1,25×/1,5×/2×; não depender do menu nativo. **Mute NÃO significa apagar a preferência de volume audível**: guardar volume positivo em chave separada, preservar mute entre hinos e recuperar o último volume na ação de desmutar, inclusive em Próximo/Anterior/Repetir/Aleatório e, onde API permitir, YouTube/YouTube Music. O botão YouTube não deve exibir “Fonte enviada pelo usuário”; manter rastreabilidade interna. Preservar letra, dados, fontes musicais aprovadas, 200 hinos, seis coros, MP3 V4.4, partituras, controles e produção. Não confundir teste isolado com aprovação de reprodução real; testar celular/desktop antes da promoção. Ver [REV10.7](MELHORIAS_PLAYER_MP3_REV10_7.md) e política de fontes REV10.3.1.

---

# Instrução REV10.6 — vídeos do usuário no lote 191–200
Último arquivo local: **V7.81.4**, derivado da V7.81.3. Aplicado o mapeamento explícito dos 7 novos vídeos do YouTube para 192/193/194/196/197/198/199; 200 já tinha o vídeo correto, 191/195 preservados. A REV10.5 não sabia os números; consulte o [mapa REV10.6](LINKS_YOUTUBE_191_A_200_REV10_6.md). **Hino 199: 2 IDs, `kEbHExWm-Sk` primário em teste e `8GDPODmDoTk` alternativo não integrado até conferência.** Confirmar canal, número/título do Hinário 5 e natureza instrumental de TODOS os links indicados; não afirmar que foram auditados só porque o usuário forneceu correspondência. URLs sem Rádio (`list=RD`/`start_radio=1`). Não mudar Spotify, YTM, letras, MP3, partituras, controles/volume, Hinos 1–190/Coros ou `index.html` de produção. O HTML de TESTE deve ser publicado/validado separadamente da documentação.

---

# REV10.5 — nove URLs recebidas ainda não atribuídas
Antes de pesquisar novamente ou inventar links para 191–200, consultar [LINKS_RECEBIDOS_191_200_REV10_5.md](LINKS_RECEBIDOS_191_200_REV10_5.md). O usuário forneceu 9 IDs de YouTube: 1 já consta para o Hino 200 (`OgNlZz43BEw`), 8 aguardam número+título, canal e instrumental/cantado conferidos. Nunca atribuir hinos de acordo com a ordem dos URLs na conversa. Ao incorporar vídeo correto, ignorar `list=RD...` e `start_radio=1` para evitar Rádio auto-selecionar outro hino. Respeitar a identidade YouTube instrumental, YouTube Music cantado (Vozes do Campo prioritária) e Spotify Orquestra Sacra; não mudar `index.html` sem aprovação.

---

# Obrigatório na retomada — REV10.4 V7.81.3 (13/11/2026)
A última versão local para teste é **V7.81.3** derivada da V7.81.2, com correção de fontes externas 191–200 segundo a regra **YouTube instrumental** (Orquestra Sacra, Orquestra Paulista, Orquestra Hymns, Antony Andrey quando instrumental), **YouTube Music cantado** com **Vozes do Campo — Hinos CCB como primeira opção**, **Spotify priorizando Orquestra Sacra** e alternativas apenas já autorizadas. **Não reaproveitar links de artistas alheios**, não misturar títulos, hinos do Hinário 4 ou volumes de álbuns. Verificar número+título+edição+artista+natureza antes de inserir cada URL, e ouvir coletâneas vocais (descrições de Vozes do Campo podem conter playbacks). A V7.81.3 tem 4 YT diretos, 3 Spotify diretos e 4 YTM candidatos aguardando confirmação de canto; os demais mostram busca/indisponível de forma transparente. Nunca declarar mídias completas sem todos IDs validados. **Preservar Hinos 1–190, 6 coros, MP3 V4.4, letras, partituras, player V7.81.2 e volume escolhido. Não modificar `index.html` sem aprovação explícita.** Ler [mapa REV10.4](CURADORIA_MIDIAS_191_200_REV10_4.md), [política](POLITICA_FONTES_MULTIMIDIA_REV10_3.md), [player REV10.2](CONTROLES_REPRODUCAO_REV10_2.md).

---

# REGRA OBRIGATÓRIA REV10.3.1 — YouTube Music Vozes do Campo prioritária
Antes de gerar ou inserir links novos no Guia do Hinário nº 5, obedecer à identidade musical: (1) **YouTube = instrumental/orquestral** de Orquestra Sacra, Orquestra Paulista, Orquestra Hymns e Antony Andrey (quando instrumental); (2) **YouTube Music = versões cantadas**, pesquisar **primeiro Vozes do Campo — Hinos CCB**, e só recorrer a fontes vocais anteriormente autorizadas; (3) **Spotify = prioridade Orquestra Sacra**, demais somente se já autorizadas. Não usar artistas não solicitados nem vídeo instrumental como YouTube Music cantado, não inventar IDs e não confundir número de volume, posição de faixa ou Hinário nº 4 com número e título do Hinário nº 5. Antes de aprovar, verificar fonte, caráter musical, edição, número, título e, se coletânea, intervalo exato; se não houver faixa válida, registrar pendência sem descaracterizar o projeto. Preservar todo conteúdo anterior, controles e produção. Ver [Política REV10.3.1](POLITICA_FONTES_MULTIMIDIA_REV10_3.md).

---

# PROMPT OBRIGATÓRIO — política de mídia REV10.3 (13/11/2026)
Ao continuar o projeto Guia do Hinário nº 5, aplicar **sem exceção** a identidade artística de cada botão: **YouTube = vídeo instrumental/orquestral** e SOMENTE Orquestra Sacra, Orquestra Paulista, Orquestra Hymns e Antony Andrey (quando instrumental); **YouTube Music = gravação cantada**, somente de fontes vocais CCB previamente aprovadas; **Spotify = Orquestra Sacra prioritária** com apenas alternativas musicais já autorizadas. **Proibido** inserir artistas não solicitados, trocar música instrumental por canto no YouTube, usar vídeo instrumental como YouTube Music vocal, inventar IDs, ou preencher um botão com qualquer resultado apenas para remover pendência.
Antes de atribuir cada link, auditar a **edição Hinário nº 5**, **número**, **título**, **intérprete**, **natureza musical** e, em coletâneas, os tempos inicial/final. Nunca confundir número de volume/álbum, ordem da faixa ou Hinário nº 4 com o número do Hino nº 5. Se não houver gravação compatível nas fontes aprovadas, manter registro de pendência **sem mudar as fontes** nem anunciar lote como completo. Reavaliar a curadoria externa da V7.81.1/V7.81.2 191–200 antes da próxima entrega; as versões existentes contêm fontes não autorizadas e reutilização de vídeos que podem não ter canto. **Não modificar `index.html` em produção ou dados aprovados anteriores sem consentimento**.
Ler primeiro [POLITICA_FONTES_MULTIMIDIA_REV10_3.md](POLITICA_FONTES_MULTIMIDIA_REV10_3.md), o inventário [REV10.1](FONTES_EXTERNAS_191_A_200_REV10_1.md) e as regras de player [REV10.2](CONTROLES_REPRODUCAO_REV10_2.md).

---

# Regras adicionais REV10.2 — player e volume
A construção local V7.81.2 usa como base V7.81.1 e corrige controles de reprodução. Aplicar as regras: transporte Anterior/Próximo imediato; modos de término Parar/Próximo/Repetir/Aleatório confiáveis para MP3 e YouTube/YTM; MP3 `modoReproducao:'partitura'` toca **uma vez** pois já contém todas as estrofes; guardar volume selecionado (nativo e popover) e reutilizar em mudanças de hino, repetições e aleatório; usar YouTube IFrame API para set/getVolume e respeitar possíveis bloqueios de autoplay. Spotify não permite esses controles automáticos via iframe; manter anterior/próximo manuais com aviso e não afirmar conformidade falsa. Conferir o estado real do arquivo remoto, nunca alterar produção sem aceite. Ver [REV10.2](CONTROLES_REPRODUCAO_REV10_2.md) e [links/numeração REV10.1](FONTES_EXTERNAS_191_A_200_REV10_1.md).

---

# Adendo REV10.1 — regra de mídia externa e auditoria de volume
A continuação V7.81.1 local acrescentou as mídias externas dos Hinos 191–200, **sem alterar** Hinos 1–190, Coros 1–6, MP3 Orquestra V4.4 ou `index.html`. Confirmar primeiro o estado efetivo dos arquivos no GitHub: o teste remoto segue V7.80 até publicação. Antes de declarar novo lote concluído, buscar por **todos os serviços (Spotify, YouTube, YouTube Music)** em todas as fontes aprovadas e conferir cada gravação por **número e título do Hinário nº 5**. Não confundir **número do álbum/volume, ordem da faixa ou outra edição** com o número do hino; nunca inventar ID. Tratar busca `Spotify Pesquisar` como busca e vídeo compartilhado YT/YTM como origem comum, não faixa independente. Documentar IDs, intérpretes, limites de coletâneas e pendências. Consultar [fontes e mapa 191–200](FONTES_EXTERNAS_191_A_200_REV10_1.md). Fazer testes em celular e desktop antes da publicação/aceite. Preservar integralmente toda a base aprovada.



**Verificação final de publicação (13/11/2026):** o arquivo remoto `teste-multimidia.html` já corresponde exatamente à base local **V7.81**, SHA Git `b3df54ec10ea65853a298b8ca2d541ae11ef51a1`; ainda **não** contém os metadados novos da **V7.81.1**. Somente a documentação REV10.1 foi publicada nesta etapa; a produção `index.html` continua intacta. Nas notas anteriores, o status V7.80 refere-se a uma consulta anterior e está superado.

---

# Prompt atual — REV10 / V7.81 preparada para TESTE

Retomar o **Guia do Hinário nº 5 – CCB** a partir do `teste-multimidia.html` mais recente **efetivamente verificado e aprovado**. A base confirmada no GitHub em 13/11/2026 era V7.80; um pacote local V7.81 adicionou os Hinos 191–200 com MP3 orquestra V4.4, letras, partituras e metrônomo. Antes de modificar, compare com GitHub; **não presumir que V7.81 esteja publicada** e **não tocar `index.html` sem autorização**.

Preservar 1–190, Coros 1–6, registros, favoritos, PWA, layout responsivo e todos os controles do modal e metrônomo. Manter só `audio/hino-N.mp3`, sem segunda biblioteca. Fazer cada nova música pela fonte MSCX/MusicXML/MIDI original, respeitando fermatas, ligaduras, ritornelos, figuras, finais e andamento musical próximo do limite indicado. Soprano em cordas menos sintéticas, tenor distinto e presença de tuba/contrabaixo; TimGM6mb foi usado na V4.4, com limitações. Não inventar links externos.

**Passos imediatos:** (1) testar V7.81 em celular e desktop; (2) confirmar navegação de 190 a 191, 198 e 200, partituras em múltiplas páginas, áudio e metrônomo; (3) auditar estrofes/coros e links de mídias externas 191–200; (4) obter aprovação antes de qualquer promoção a produção; (5) registrar nova versão, REV11, changelog, checklist e pacote após aceite. Os arquivos do GitHub e o pacote de teste sempre têm status independente.

---

# Prompt de retomada — Guia do Hinário nº 5 (CCB)

**Revisão do dossiê: REV09 — 12/11/2026.**

Use este texto ao iniciar um novo chat e **anexe também** `DOCUMENTACAO_CONTINUIDADE.md` e o `teste-multimidia.html` da última versão de teste aprovada. Para trabalho de áudio, anexe partituras/MIDI e o MP3 aprovado.

---
### Verificação posterior de publicação — 12/11/2026 (REV09)

**MP3 171–180 já estão publicados no GitHub em `audio/` e tiveram seus SHA Git comparados aos bytes exatos dos dez MP3 V3.1 locais: 10/10 idênticos. NÃO reenviar esses áudios nem substituí-los.** O HTML **V7.79** e as **12 imagens de partitura** ainda não estavam no repositório na consulta posterior: `teste-multimidia.html` ainda é V7.78.3 e `assets/partituras` não tem arquivos 171–180. Próxima tarefa: subir apenas HTML de teste + 12 JPG, testar em aparelho real; `index.html` continua protegido. Este estado prevalece sobre instruções da REV09 escritas antes da checagem.

## ESTADO ATUAL — REV09
- Usuário decidiu **manter os MP3 Orquestra V3.1 dos Hinos 171–180 sem alterações**, apesar da percepção de oscilações de volume. Para os PRÓXIMOS LOTES, empregar apenas **sustain natural**, com transições ligadas, evitando modulação artificial de amplitude/vibrato.
- A nova base **V7.79 de TESTE** foi preparada para 171–180 (letras, MP3, metrônomo, partituras e YouTube Music). Não foi publicada/aprovada nesta conversa.
- **Partituras JPG: 12 arquivos**, porque os Hinos 171 e 177 ocupam DUAS páginas; os originais 171/172 e 177/178 partilhavam folha, já separadas corretamente.
- **Hino 172 sem coro**. Dados do metrônomo seguem a partitura, não a velocidade arbitrária do áudio.
- YouTube Music usa `0AS9FwjZnL4` com início individual por capítulo. Spotify e YouTube individual pendentes de confirmação específica.
- O HTML V7.79 deriva por 3 inserções isoladas da V7.78.3; preservar os 170 anteriores, a ordem de abertura do metrônomo/vídeo, `index.html` produção e `sw.js`.
- Após upload: conferir funcionamento real e obter aprovação; atualizar docs/manifesto, depois continuar a próxima carga.

## ESTADO ATUAL — REV08
- **MP3 171–180 V3.1 foram GERADOS, mas ainda não APROVADOS como lote.** Hinos 171 e 177 usam amostras V3.1 já apreciadas, 172–176/178–180 usam o mesmo arranjo.
- Vibrato discreto e soprano médio, cordas e madeiras equilibradas, tenor da clave de fá e tuba/contrabaixo graves presentes; andamento do lote anterior preservado.
- Banco disponível: `TimGM6mb.sf2`. **Sonatina ainda não instalada**, portanto não prometer sonoridade de biblioteca profissional.
- Próximo passo: avaliação dos dez MP3, aprovação musical, envio para `audio/` e só então integração de letras/partituras/mídias no HTML de teste. Não substituir o `index.html`.
- Manter a integridade das ligaduras, fermatas, ralentandos e tercinas segundo a partitura de cada hino.

## ESTADO ATUAL — REV07
- Usuário **aplicou a V7.78.3** do `teste-multimidia.html` (correção da ordem de abertura do metrônomo/vídeo no desktop). Continuar observando eventuais regressões; nunca alterar a produção sem aprovação.
- **MP3 171–180 gerados em teste**, não aprovados, não publicados. Base instrumental V4.1; +4,5% BPM relativo ao original, a validar musicalmente. Conferir fermatas, ligaduras, rall./poco rall. e tercinas em cada partitura. Não confundir testes locais com publicação.
- Prioridade é a avaliação auditiva de 171–180; depois enviar apenas os aprovados para `audio/`, integrar letras/partituras/mídias no HTML de testes e atualizar docs ao aprovar.
- Um único arquivo `audio/hino-N.mp3` por hino. Hinos 1–170 não devem ser modificados sem correção autorizada.

## MARCO MAIS RECENTE — REV06 (12/11/2026)
- MP3 e partituras JPG dos Hinos 161–170 já confirmados no GitHub, pasta `audio/` e `assets/partituras/`.
- **HTML V7.78.2 EM TESTES**: Hino 162 tem **Final** (não Coro); navegação Anterior/Próximo do modal agora funciona após o 160; MP3 ganhou ajuste `Vol.` com slider compacto.
- **Não publicar V7.78.2 nem modificar `index.html` sem aprovação de teste em aparelho real.**
- Nas próximas partituras, identificar e reproduzir `rall.`, `poco rall.`, tercinas/quiálteras, ligaduras, fermatas, casas e finais. Executar cada hino com fidelidade, mesmo buscando andamento ligeiramente mais vivo.
- Ao retomar, usar o pacote REV06 e confrontar hashes do repositório; um único MP3 por hino em `audio/`.

## MARCO MAIS RECENTE — REV05 (12/11/2026)
- O usuário **aprovou os dez MP3 Hinos 161–170**. Conferir upload em `audio/` antes de alegar publicação; na última checagem ainda não estavam no GitHub.
- Próximo passo: integrar Hinos 161–170 no `teste-multimidia.html` com letras e mídias, preservando a produção.
- **Para os MP3 171–180 e próximos:** buscar andamentos um pouco acima da média da faixa indicada, **somente quando o caráter e a partitura permitirem**; não alterar ligaduras, fermatas ou finalizações.
- Continuar com um único `audio/hino-N.mp3`, referência timbrística Hino 61 V4.1. Atualizar documentação/prompt/changelog a cada aprovação.

## REGRAS ATUAIS REV04 — sobrepõem recomendações históricas de versões anteriores
- **Hino 61 V4.1 aprovado** como referência musical: orquestra mais natural, tuba grave presente, ligaduras revistas, fermatas moderadas; a V3 fica em backup.
- **Um único MP3 por hino** sob `audio/hino-N.mp3`. **Não criar** segunda biblioteca em `audio/orquestral/` nem inserir escolha extra no modal. Manter a pasta experimental apenas para arquivo histórico até remoção autorizada.
- O `teste-multimidia.html` **V7.77 preparado** é a base V7.76 com apenas `?v=777` no Hino 61; `audio/hino-61.mp3` deve conter a V4.1 aprovada. Não modificar `index.html` ou `sw.js` automaticamente.
- O áudio enviado a `audio/hino-61.mp3` **é compartilhado com a produção** que aponta para essa URL. Confrontar SHA/URL/cache antes de declarar publicação.
- Priorizar a expansão 161+ e as mais de 300 mídias/coros pendentes. Não refazer automaticamente os Hinos 1–160.
- A cada aprovação, atualizar documentação, changelog, checklist, prompt e pacote REV, deixando explícitos os estados de teste/aprovação/publicação.


Estamos continuando o projeto **Guia do Hinário nº 5 – CCB** (HTML/CSS/JavaScript/PWA, repositório Douphing/guia-hinario5). Leia por completo o arquivo `DOCUMENTACAO_CONTINUIDADE.md` e examine o `teste-multimidia.html` que anexei **antes de propor alterações**.

**Regras obrigatórias:** nunca reconstruir o projeto do zero; **não modificar os Hinos 1–120**, nem alterar involuntariamente 121–160, coros, letras, MP3, mídias, metronomo, partituras, favoritos, registros, compartilhar, layout e PWA. Nunca modificar o `index.html` de produção sem minha aprovação. Partir da última versão de teste confiável e fazer mudanças cirúrgicas, com backup versionado, diff e testes visuais no celular e no desktop.

**Estado de referência em 12/11/2026 (REV03):** HTML V7.76; a orquestra virtual do Hino 61 **V3 — Tuba Grave** está aprovada **como áudio separado**, não integrada automaticamente. As próximas frentes são (1) construir hinos 161 em diante e suas mídias verificadas; (2) preparar arranjos orquestrais de outros hinos com partitura e fermatas/ligaduras fiéis; (3) organizar comentários históricos num changelog separado. Não usar V7.72 como base; ela apresentou regressões graves.

**Padrão musical já aprovado para as próximas cargas:** a V3 foi aprovada auditivamente em 12/11/2026 e passou a ser a referência. A V2 foi mantida apenas para comparação e MIDI-base. O arquivo V3 não está integrado ao Guia.

**Aplicação nas próximas cargas:** ao criar MP3s novos com partitura/MIDI, usar a **sonoridade orquestral **V3 — Tuba Grave** do Hino 61** como referência: graves presentes (tuba audível e baixo sustentado sem abafamento), metais, madeiras e cordas equilibrados, melodia clara, ligaduras respeitadas e fermatas breves e musicais. Cada hino conserva **suas próprias** notas, repetição, estrofes/coros, pausas e finais; **não replicar o desenho musical do Hino 61 indiscriminadamente**. Preservar os MP3 atuais, exportar as novas versões separadas e validar antes de integrar. Não deixar a construção dos demais hinos e mídias em segundo plano.

**Atualização documental obrigatória:** sempre que eu aprovar uma implementação, áudio, correção ou mudança de regra, na mesma entrega atualize `DOCUMENTACAO_CONTINUIDADE.md`, `CHANGELOG.md`, `PROMPT_DE_RETOMADA.md`, checklist pertinente e `SHA256SUMS.txt`; gere novo pacote ZIP identificado por revisão. **Não deixar a aprovação apenas neste chat.** Manter explícitos os estados “teste”, “aprovado”, “integrado” e “publicado”, sem assumir que aprovação implica publicação.

**Sua primeira resposta deve:** (a) confirmar os arquivos recebidos, a versão e as diferenças entre código e áudio de referência; (b) resumir os dados/recursos que devem ser protegidos; (c) indicar exatamente quais trechos serão alterados para a solicitação atual. **Não edite nada além da solicitação.** Quando for autorizada a mudança, entregue `teste-multimidia.html`, uma cópia com a nova versão e teste de regressão. Não confunda teste local com funcionamento confirmado no GitHub Pages.

**Solicitação atual:** [DESCREVER AQUI O QUE PRECISO NESTE NOVO CHAT]