# REV10.9 — V7.81.7: controles sempre visíveis em uma linha
**13/11/2026 — alteração pontual na versão local de TESTES.** A V7.81.6 mostrou o botão expansor "Sequência" e, ao abrir, os comandos ficavam distribuídos em duas linhas. O usuário rejeitou esse resultado e aprovou a orientação **"prefiro com os botões à mostra"**. **Regra vigente: todos os dez comandos visíveis numa única linha compacta, sem disclosure, expansor, menu ou segunda fila.**

## Implementação
- Base: `teste-multimidia` V7.81.6. Versão local gerada: **V7.81.7**.
- Removido exclusivamente o markup e o listener do botão `hdSequenceDisclosure` e o CSS da V7.81.6 que ocultava `.hd-sequence-transport` e `.hd-sequence-modes` e repartia comandos em duas linhas. Reativado layout histórico V7.61/V7.63: **grade com dez colunas**, ícones vetoriais monocromáticos, uma única faixa horizontal.
- Botões visíveis após abrir MP3/YouTube/YTM/Spotify: **Anterior, Tocar/Pausar, Próximo, Parar**, os quatro modos **Parar/Próximo/Repetir/Aleatório ao terminar**, **Minimizar**, **Fechar somente a mídia**. Modos que a API Spotify não permite continuam desabilitados, sem inventar recursos.
- **O player nativo do MP3 segue inalterado logo abaixo**. Não reintroduzir botões duplicados `Vol.` ou `⋮` do Guia.
- **MP3 191–200** reforçados em +4,3 dB são os mesmos da V7.81.6 (arquivos do pacote completo sem remasterização adicional); nenhum MP3 1–190 alterado.
- Hinos 1–200, Coros 1–6, letras, partituras, mídias, favoritos, registros, metrônomo, layouts anteriores e volume persistente intactos.

## Validação realizada
- 33 scripts JavaScript válidos em `node --check`, sem erros de sintaxe.
- Chromium nas larguras **320, 390, 768, 1280 px**: dez comandos em **uma linha**, `overflow = false`, sem expansor, player nativo visível, nenhum erro JS.
- Em 390 px: Hino 199 com volume 37% silenciado → Próximo → Hino 200 manteve `volume=0.37` e `muted=true`. Validação de estado, não teste auditivo.
- Teste em navegador isolado sem MP3 no caminho relativo exibiu "Arquivo não encontrado"; não anunciar execução real de áudio ou continuidade externa como testada. Verificação em HTTPS, celular e desktop após upload ainda pendente.

## Checklist de aceite
- [x] Dez botões visíveis em uma linha no HTML de teste, sem "Sequência".
- [x] Larguras 320/390/768/1280 px sem transbordamento.
- [x] Barra MP3 HTML5 nativa e volume persistente preservados.
- [x] Dados das mídias/partituras/letras inalterados.
- [ ] Publicar **somente no `teste-multimidia.html`** a V7.81.7 com backup da versão anterior.
- [ ] Ouvir MP3 de 191–200 no ambiente real, com o ganho V7.81.6 já publicado, e confirmar modos após o término.
- [ ] Validar acessibilidade dos comandos por toque em celular, player minimizado e vídeos externos.
- [ ] Aprovação expressa antes de editar `index.html` produção.

**A documentação REV10.9 pode ser publicada separadamente do HTML. Não confundir o envio de documentos com atualização da página.** Preservar a política de fontes REV10.3.1 e os estados pendentes de links REV10.4/REV10.6.
