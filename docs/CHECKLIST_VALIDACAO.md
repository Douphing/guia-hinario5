# Checklist de validação do Guia — antes de entregar HTML ou MP3

## REV09 — V7.79 (TESTE, pendente de publicação e aprovação)
- [x] Dez registros de `MULTIMIDIA` e `LETRAS` integrados para Hinos 171–180 sem alterar 1–170.
- [x] Hino 172 sem coro; os outros incluem coro quando presente na partitura.
- [x] 12 JPG: `171-p1/p2`, `177-p1/p2`, demais `-p1`; verificar visualmente PDF original compartilhado.
- [x] YouTube Music capítulo correspondente; início e término definidos para 171–179, 180 começa em 1908s.
- [x] Sintaxe JS validada; Chromium 320/390/1280/1536; ordem metrônomo/mídia sem rolagem em desktop.
- [ ] Enviar MP3 171–180 ao GitHub, sem sobrescrever anteriores; testar execução no navegador.
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