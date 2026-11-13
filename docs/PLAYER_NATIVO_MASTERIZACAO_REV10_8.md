# V7.81.6 — Player nativo e sonoridade MP3 — REV10.8 (13/11/2026)

**Estado:** versão local preparada SOMENTE para TESTES. Não publicar em `index.html` sem aprovação expressa. Esta revisão consolida a preferência do usuário por uma interface limpa e o pedido de aumentar a intensidade sonora dos MP3 sem perder a orquestração aprovada.

## Interface do MP3
1. **Um player HTML5 nativo**, com play/pausa, tempo, progresso, alto-falante/mute e menu do navegador. Retirar os botões e popovers personalizados **`Vol.`** e **`⋮`** que duplicavam os recursos.
2. **Download e velocidade** passam a depender do menu nativo do navegador, cuja disponibilidade varia conforme navegador e aparelho. Não prometer todas as opções em toda plataforma. No Android Chrome usado pelo usuário, as opções apareceram no menu nativo nas capturas.
3. **Sequência:** preservar funções do Guia (anterior/próximo, parar, repetir, aleatório, minimizar, fechar somente mídia), mas deixar seus botões **recolhidos por padrão**, acessíveis ao expandir o botão discreto **Sequência**. Minimizar e Fechar mídia continuam diretamente disponíveis. Não remover regras de término ou navegação.
4. **Mute reversível:** manter `guia-hinario5-ultimo-volume-audivel-v1` separado de `guia-hinario5-volume-midia-v1`. Se o usuário ajusta 32%, silencia e navega, o próximo áudio segue silenciado sem apagar os 32%. Ao desmutar, recuperar 32%. Tratar também mudança rápida de volume e mute mesmo quando o navegador coalescer eventos `volumechange`.
5. A velocidade modificada no player nativo, **quando o navegador notificar `ratechange`**, pode ser retomada no próximo MP3 usando a preferência `guia-hinario5-velocidade-mp3-v1`. Não acrescentar menu próprio.

## Sonoridade mais forte — Hinos 191–200
- Preparados dez **novos arquivos MP3 de TESTE**, derivados dos V4.4, com **+4,3 dB** de ganho e limitador protetivo, mantendo 44,1 kHz estéreo e 256 kbps. Pico final medido de **−2,7 a −1,1 dBFS**; a faixa de nível médio ficou aproximadamente entre −16,2 e −15,6 dBFS. Não mudar notas, timbres, BPM, fermatas, estrofes ou duração musical.
- **ESSENCIAL:** o HTML apenas usa o caminho habitual `audio/hino-N.mp3`. Para ouvir ganho, é necessário enviar os **dez MP3 masterizados** para a pasta `audio/` NO AMBIENTE DE TESTES, substituindo **somente 191–200**; guardar cópia anterior V4.4. O HTML isolado **não aumenta** a intensidade dos MP3 antigos.
- Não alterar áudios 1–190 nem dos Coros; esta masterização não altera a base instrumental e não é uma nova gravação de orquestra.

## Preservação e testes
- Hash e conteúdo dos objetos `MULTIMIDIA` e `LETRAS` idênticos à V7.81.5, abrangendo Hinos 1–200 e Coros 1–6, incluindo todas as mídias externas e os registros vinculados.
- **33 scripts JavaScript válidos** na validação estática; dois blocos de script não JS estão fora da contagem.
- **Teste de navegador em Chromium com HTML carregado na memória** e viewport 390 px: modal do Hino 199 e player nativo carregados, sem botões personalizados; Sequência recolhida e expandida corretamente; transição 199→200 com mute restaurando 32%, sem erros de JS.
- **Ressalva:** o teste do navegador não resolveu o áudio em URL relativa e, portanto, **não validou reprodução de MP3 real** ou download/menus reais no site publicado. Conferir auditivamente a nova masterização e a navegação em HTTPS, Android e desktop.
- O pacote de TESTE inclui HTML, dez MP3 masterizados, doze partituras não alteradas, relatório de hashes e instruções. Há versões leve (HTML e partituras, sem áudio) e áudio separado.
- `index.html` de produção e `sw.js` não foram modificados. A revisão documental **não realiza upload automático** da V7.81.6 para `teste-multimidia.html`.

## Checklist de aceite
- [x] HTML montado: player nativo, popovers personalizados removidos, sequência recolhida.
- [x] Correção de mute após Próximo testada em navegador isolado.
- [x] Dez MP3 de teste 191–200 masterizados, conferidos por medição de picos/média.
- [x] Objetos de hinos e letras preservados, 33 scripts JS verificados.
- [ ] Publicar V7.81.6 e MP3 191–200 **somente em ambiente de testes**, mantendo backup V4.4.
- [ ] Ouvir os dez MP3 em celular e fones/caixa; avaliar volume mais forte **sem distorção ou perda de dinâmica**.
- [ ] Conferir o menu nativo (download/velocidade) nos navegadores desejados; lembrar que essas opções variam por dispositivo.
- [ ] Verificar abertura/fechamento da opção Sequência, anterior/próximo, repetir/aleatório, mute e volume ao navegar.
- [ ] Testar Spotify, YouTube e YouTube Music, partituras, metrônomo, favoritos/registros, responsividade e cache.
- [ ] Aprovação expressa antes de promover para produção.

## Política musical inalterada
YouTube instrumental: **Orquestra Sacra, Orquestra Paulista, Orquestra Hymns, Antony Andrey instrumental**. YouTube Music vocal: **Vozes do Campo — Hinos CCB prioritária**. Spotify: **Orquestra Sacra preferencial**, com alternativas apenas já autorizadas. Nunca confundir número de álbum ou volume com número+título do Hinário nº 5.
