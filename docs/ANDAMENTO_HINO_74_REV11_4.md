> **REV11.5 corrige o estado de teste anterior:** a V2 a 84 BPM não eliminou a emenda da fermata; a **V3** foi reconstruída da partitura em **83 BPM**, com acorde cadencial sem interrupções e graves reforçados. O novo HTML V7.81.13 permite, opcionalmente no Hino 74, o MP3 acompanhar o BPM escolhido no metrônomo. **Nenhum arquivo de produção foi substituído**. Detalhes em [REV11.5](HINO74_ORQUESTRA_SINCRONIA_REV11_5.md).

---

# REV11.4 — Hino 74: andamento 84 BPM, fermatas ajustadas — V7.81.12 TESTE
Data: 14/11/2026.

## Correção e regra permanente de andamento
A partitura original MSCX do **Hino 74 — Vamos produzir frutos de louvor** especifica **♩ = 72–88 BPM**; 72 é o limite mínimo, **não** o andamento-alvo. A escolha musical vigente em todas as cargas do Guia é **entre o ponto médio da faixa e o limite máximo**, com preferência por sonoridade viva e andamento coerente, respeitando rigorosamente a unidade do pulso indicada (semínima, mínima, colcheia etc.). Para o Hino 74 foi adotado **♩ = 84 BPM**, acima da média (80) e abaixo do máximo (88).

## Arquivos de teste
- MP3: `audio/hino-74.mp3` V2, 44,1 kHz, estéreo 256 kbps, duração **164,08 s**.
- A V1 corrigia duas fermatas nas primeiras terminações e tinha andamento de 72 BPM, duração 191,43 s.
- A V2 parte **do áudio V1** e aumenta o andamento em relação 84/72, usando o filtro FFmpeg `atempo`, preservando a altura das notas, o arranjo e as proporções internas. As duas fermatas ficam com aproximadamente **3,57 s**, em vez de 4,17 s da V1; a terceira terminação mantém seu desenho, apenas em novo andamento.
- **Não é nova renderização da partitura com instrumentos acústicos**. O resultado ainda exige apreciação auditiva de articulações, sustains, transições, fermatas e sonoridade.
- `teste-multimidia-V7.81.12-HINO74-84BPM-TESTE.html` deriva de **V7.81.11** e altera **somente** o valor de `metronomo.bpm` do Hino 74 de 80 para **84**, além de um comentário de versão. Valores mínimos e máximos 72–88, 210 hinos, seis coros, todas as letras, mídias, controles, layout, registros, favoritos, SW e partitura são preservados.
- Scripts JS: **33 conferidos sem erros de sintaxe**; MP3 decodificado sem amostras inválidas nem clipping; ZIP íntegro.
- **A V7.81.12 é apenas para TESTE e precisa de aprovação auditiva.** A atualização desta documentação não publica o HTML ou MP3 no GitHub. O `index.html` de produção **não deve ser alterado sem autorização**.

## Checklist
- [x] Conferida a unidade semínima e a faixa 72–88 na partitura MSCX original.
- [x] Gerado MP3 V2 a 84 BPM sem mudança nominal de altura tonal.
- [x] Corrigidas proporcionalmente as duas fermatas sem eliminar o efeito expressivo.
- [x] HTML de teste com metrônomo do Hino 74 ajustado para BPM 84, demais dados preservados.
- [x] 33 scripts sintaticamente válidos, MP3 e ZIP conferidos.
- [ ] Ouvir a V2 com atenção especial às primeiras terminações e ao final, comparando o MP3 fornecido e a partitura.
- [ ] Se aprovada, substituir **somente** `audio/hino-74.mp3` no ambiente de testes e o `teste-multimidia.html` pela V7.81.12. Validar metrônomo e reprodução.
- [ ] Não modificar `index.html` em produção sem autorização expressa.

**Regra para toda carga futura:** sempre consultar `min`, `max` e a figura do pulso na partitura original; usar preferência **média→máxima** e nunca escolher o limite mínimo por padrão.
