# Guia do Hinário nº 5 — REV11.3 / V7.81.11 TESTE
**13/11/2026 — Navegação automática dos modais por modo de término.**

## Problema observado
Na V7.81.10, o Hino **210** encerrava a sequência e desabilitava Próximo, embora o usuário esperasse o próximo modal. O algoritmo não voltava do último ao primeiro hino disponível. Identificado também um caso legado: o Hino **21** tinha modo `partitura-especial` e podia repetir o MP3 completo por estrofes antes de avançar.

## Comportamento obrigatório (todas as cargas)
- **Próximo:** ao terminar uma faixa, abrir automaticamente o modal do próximo hino com gravação cadastrada **na mesma plataforma**; após o último hino elegível, voltar ao primeiro (MP3 **210→1**). Se uma mídia externa não existir no hino seguinte, pular para o próximo hino que tenha aquela mídia, sem inventar link.
- **Anterior:** botão imediato, com navegação circular (MP3 **1→210**).
- **Repetir:** reiniciar a mesma mídia, mantendo o mesmo número/modal.
- **Aleatório:** escolher outro hino disponível na plataforma selecionada, sem repetir o atual.
- **Parar:** permanecer no modal, sem iniciar outra mídia.
- **Coros:** sequência própria e circular, com Coro 6→Coro 1 onde houver faixa.
- **MP3 completo:** modos `partitura` e `partitura-especial` representam o hino inteiro; um evento real de término significa uma execução, independentemente do número de estrofes. O Hino 21 foi corrigido sem alteração do MP3.
- **YouTube e YouTube Music:** modos obedecem ao fim detectado pela API IFrame (`ENDED`) e aos limites temporais de coletâneas; próxima reprodução pode exigir toque manual por bloqueio de autoplay do navegador.
- **Spotify:** o Guia mantém Anterior/Próximo **manuais** entre faixas cadastradas. O iframe atual não detecta término de forma confiável nem garante início automático; modos de término automáticos permanecem desabilitados. A API oficial de iframe tem eventos `playback_update`, mas o autoplay pode ser bloqueado: https://developer.spotify.com/documentation/embeds/references/iframe-api . Não afirmar suporte automático sem integrar e validar explicitamente.
- **Volume escolhido:** continuar preservado nas mudanças de modal e de mídia conforme REV10.8; não recriar botões redundantes.

## Escopo e preservação
Versão local **V7.81.11** derivada da **V7.81.10**, sem modificação de `MULTIMIDIA`, `LETRAS`, 210 hinos, seis coros, CSS do modal largo sem rolagem, player MP3 nativo, dez botões sempre visíveis, registros, favoritos, partituras, metrônomo, mídias externas ou arquivos de áudio. Somente o algoritmo de sequência e o reconhecimento de execução integral do MP3 especial foram corrigidos. **`index.html` de produção e `sw.js` não foram modificados.** O envio da documentação não publica automaticamente o novo `teste-multimidia.html`.

## Verificações
- **33 scripts** sintaticamente válidos.
- **23 de 23 testes** de MP3, troca de modal, modos, coros, volume e navegação manual Spotify, sem exceções JS.
- **10 de 10 testes complementares** com API simulada YouTube/YouTube Music: Próximo, Parar, Repetir, Aleatório e fim de trecho da coletânea.
- **Hino 21:** ao terminar uma vez, avança ao 22.
- Conteúdo antigo preservado; apenas dois scripts alterados e nenhum CSS alterado.
- **Limitação:** testes externos foram simulados; YouTube/YTM reais e Spotify real em HTTPS ainda exigem validação auditiva e no celular/desktop.

## Checklist do teste real
- [ ] Hino 210 em MP3 → selecionar Próximo → ao terminar deve abrir Hino 1 automaticamente com volume preservado.
- [ ] Hino 1 → botão Anterior → Hino 210; Coro 6 → Coro 1.
- [ ] Repetir não muda de modal; Aleatório abre outro hino; Parar não navega.
- [ ] Com YouTube ou YouTube Music, testar término de faixa e trecho de coletânea, e eventuais bloqueios de autoplay.
- [ ] Conferir favoritos/registros, mini-player, metrônomo aberto, partitura e modal desktop **sem rolagem**.
- [ ] Spotify continua com navegação manual, sem prometer repetição automática.
- [ ] Só publicar em `index.html` após aprovação expressa; substituir `teste-multimidia.html` apenas para testes.

**Esta revisão está pronta para avaliação, não homologada em produção.**
