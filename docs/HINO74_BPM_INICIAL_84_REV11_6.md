# REV11.6 — Hino 74: andamento inicial aprovado 84 BPM (V7.81.15 TESTE)

**14/11/2026 — correção de configuração, sem alterações na produção.**

A partitura original indica **♩ = 72–88 BPM**. A **média aritmética exata** é **(72+88)/2=80 BPM**, mas o usuário definiu expressamente **84 BPM como valor inicial e padrão do metrônomo** por representar sua escolha musical um pouco acima da média em direção ao máximo. **Nunca rotular 84 como média matemática.**

**Na V7.81.15**, versão local derivada da V7.81.14:
- Hino 74 abre com **84 BPM** no resumo, campo numérico e slider.
- **↺ Padrão** retorna a **84 BPM**.
- O slider continua de **72 a 88 BPM**, passo de 1.
- O checkbox **MP3 acompanha o andamento** continua ativado inicialmente apenas para este hino no piloto; a gravação original V3 **permanece em 83 BPM**, e o navegador ajusta `playbackRate=BPM/83`. Portanto, com 84 BPM de estudo o MP3 reproduz aproximadamente **1,012×**; não houve nova renderização nem modificação dos bytes do MP3 V3.
- O indicador textual do andamento/velocidade acompanha o controle deslizante **mesmo antes de abrir o MP3**.
- Dados de todos os demais 209 hinos e seis coros, letras, mídias, partitura, registro, favoritos, controles, volume e CSS preservados. Comparação da entrada Hino 74 mostra **somente metronomo.bpm 80→84**. Scripts JS **34 verificados com node --check**. Em Chromium: modal 74 começou em 84, botão Padrão restaurou 84, slider 88 atualizou o BPM e a indicação de taxa para 1,06×.
- O HTML de teste V7.81.15 e ZIP foram criados localmente. **Não substituir `index.html` de produção, `sw.js` ou `teste-multimidia.html` remoto sem autorização**. A publicação desta documentação não publica o HTML.

**Regra geral:** usar a faixa e a unidade de pulsação da partitura; quando o usuário escolher explicitamente um **andamento inicial preferencial**, esse valor prevalece sobre fórmulas automáticas de média, desde que permaneça dentro da faixa. Não escolher números arbitrários e não chamar valores superiores à média de "média exata".

## Checklist
- [x] Confirmado 72–88 em semínimas; padrão aprovado 84.
- [x] HTML inicia e reseta para 84; slider permite 72–88.
- [x] Indicação de velocidade acompanha mudança mesmo antes de abrir MP3.
- [x] 34 scripts válidos, demais dados preservados.
- [ ] Validar som real e preservação de pitch em navegador HTTPS/celular com V3 e Hino 74 no BPM 84.
- [ ] Aprovação do responsável antes de substituir qualquer HTML ou MP3 publicado.

Veja [REV11.5](HINO74_ORQUESTRA_SINCRONIA_REV11_5.md) para a origem da gravação V3, fermata e instrumentação.
