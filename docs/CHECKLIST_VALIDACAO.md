# Checklist de validação do Guia — antes de entregar HTML ou MP3

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