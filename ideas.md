# Direção Visual — Dr. Anselmo Carneiro

## Briefing

Website premium para médico especialista em harmonização facial definitiva, com foco em público masculino e resultados naturais. Posicionamento de alto luxo, autoridade técnica e confiança.

---

<response>
<probability>0.07</probability>
<text>

## Ideia A — "Arquitetura da Face"

**Design Movement:** Brutalismo Editorial Refinado — inspirado em revistas de moda masculina de luxo (Esquire, GQ Black Book) com influência de arquitetura contemporânea.

**Core Principles:**
1. Tensão controlada entre espaço negativo e massa tipográfica
2. Assimetria estrutural como linguagem de autoridade
3. Linha como elemento construtivo — não decorativo
4. Contraste de escala como hierarquia visual

**Color Philosophy:** Branco puro (#FAFAFA) como tela, grafite profundo (#1A1A1A) como estrutura, bronze acinzentado (#8B7355) como acento de precisão cirúrgica. A cor é usada com parcimônia — cada toque de bronze é uma decisão.

**Layout Paradigm:** Grid de 12 colunas com quebras deliberadas. Seções que "sangram" para fora do grid. Texto que ocupa apenas 4 colunas em algumas seções, criando tensão com o espaço vazio. Números de seção em tipografia grande e translúcida como scaffolding visual.

**Signature Elements:**
1. Linha horizontal fina (1px, grafite) que divide seções como um bisturi
2. Numeração de seção em display grande (ex: "01", "02") em fonte serifada, cor 8% opacity
3. Citações do médico em tipografia italic grande, ocupando 60% da largura

**Interaction Philosophy:** Cursor customizado (ponto minimalista). Hover em imagens revela uma linha de enquadramento sutil. Scroll revela elementos com fade + translate-y de 20px, duração 800ms, easing cubic-bezier(0.16, 1, 0.3, 1).

**Animation:** Entrada do hero com stagger de 150ms por elemento. Parallax de 15% na imagem do hero. Transição de seção com uma linha que "desenha" da esquerda para a direita.

**Typography System:**
- Display: Cormorant Garamond (600) — para headlines grandes, transmite elegância clássica masculina
- Body: DM Sans (300, 400) — leiturabilidade moderna sem personalidade excessiva
- Accent: Cormorant Garamond Italic (400) — para citações e subtítulos
- Escala: 72px / 48px / 32px / 20px / 16px / 14px

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## Ideia B — "Precisão Cirúrgica"

**Design Movement:** Minimalismo Técnico — inspirado em identidades visuais de marcas de relógios suíços de luxo (IWC, A. Lange & Söhne) e design editorial japonês.

**Core Principles:**
1. Cada elemento justifica sua existência — nada ornamental
2. Proporções matemáticas (razão áurea) na composição
3. Silêncio visual como declaração de confiança
4. Tipografia como arquitetura

**Color Philosophy:** Off-white quente (#F5F2EE) como base, preto suave (#111111) como texto, azul petróleo escuro (#1B3A4B) como acento de profundidade e inteligência. A paleta remete a um consultório de alto padrão — limpo, preciso, confiável.

**Layout Paradigm:** Composições de duas colunas com proporção 40/60 e 60/40 alternadas. Imagens que ocupam metade da viewport. Texto alinhado à esquerda sempre, nunca centralizado. Margens generosas (120px laterais em desktop).

**Signature Elements:**
1. Linha vertical fina no lado esquerdo de seções de texto (border-left 2px, azul petróleo)
2. Números de estatística em tipografia monospace grande
3. Imagens em preto e branco com hover que revela cor

**Interaction Philosophy:** Transições lentas e deliberadas (600-900ms). Hover em CTAs com border que "preenche" de dentro para fora. Scroll indicator lateral minimalista.

**Animation:** Fade-in com translate-x para elementos de texto (da esquerda). Imagens com scale de 1.02 no hover. Header que muda de transparente para branco com blur backdrop.

**Typography System:**
- Display: Playfair Display (700) — autoridade clássica sem afetação
- Body: Libre Baskerville (400) — serifado legível, remete a publicações médicas de prestígio
- Mono: JetBrains Mono (400) — para números, estatísticas, CRO
- Escala: 80px / 56px / 36px / 24px / 17px / 13px

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## Ideia C — "Engenharia da Face" ← SELECIONADA

**Design Movement:** Editorial Masculino de Luxo — cruzamento entre o design de marcas de moda masculina de alto luxo (Bottega Veneta, Loro Piana) e publicações editoriais como Monocle e Wallpaper*.

**Core Principles:**
1. Espaçamento como luxo — o que não está na tela é tão importante quanto o que está
2. Tipografia serifada de display como voz de autoridade silenciosa
3. Composições assimétricas que criam movimento sem agitação
4. Cada seção tem um ritmo próprio — o site respira de forma diferente em cada bloco

**Color Philosophy:** Branco quente (#F8F6F2) como base, quase-preto (#141414) como estrutura, verde oliva escuro (#3D4A35) como acento de precisão e naturalidade. O verde oliva remete à natureza, à saúde, à permanência — alinhado ao posicionamento de "harmonização definitiva". Usado em 5% da interface, mas em momentos estratégicos.

**Layout Paradigm:** Composições que quebram o grid intencionalmente. Hero com texto à esquerda e imagem ocupando 55% da tela à direita, sem padding. Seções alternando entre full-bleed e conteúdo contido. Uso de "offsets" — elementos que começam na coluna 2 ou 3, criando tensão visual.

**Signature Elements:**
1. Linha horizontal ultrafina (0.5px) em verde oliva como separador de seções premium
2. Letras iniciais em display grande e translúcido como textura de fundo em seções de texto
3. Numeração de procedimentos em Cormorant Garamond italic, tamanho 11px, uppercase com letter-spacing 0.3em

**Interaction Philosophy:** Tudo acontece em câmera lenta. Hover states que demoram 400ms para completar. Scroll reveals com easing "out expo" — rápido no início, suave no final. O site nunca "pula" — cada transição é uma respiração.

**Animation:**
- Hero: fade-in staggered (nome → headline → subheadline → CTAs), 120ms entre cada
- Parallax no hero: imagem se move 20% mais lento que o scroll
- Scroll reveals: opacity 0→1 + translateY(32px→0), duration 900ms, easing cubic-bezier(0.16, 1, 0.3, 1)
- Hover em imagens: scale 1.03, duration 600ms
- Header: blur(0→8px) + background opacity 0→0.95 ao scrollar 80px

**Typography System:**
- Display: Cormorant Garamond (300, 600) — elegância masculina, autoridade sem arrogância
- Body: Outfit (300, 400) — moderno, limpo, sem personalidade excessiva
- Label/Tag: Outfit (500) uppercase, letter-spacing 0.15em — para rótulos e categorias
- Escala: 88px / 64px / 44px / 28px / 18px / 15px / 12px

</text>
</response>

---

## Decisão Final: Ideia C — "Engenharia da Face"

**Razão:** Esta direção captura perfeitamente o posicionamento do Dr. Anselmo Carneiro — especialista em harmonização definitiva com foco masculino. O verde oliva como acento reforça a ideia de naturalidade e permanência. A tipografia Cormorant Garamond transmite autoridade clássica sem parecer antiquada. As composições assimétricas criam uma experiência editorial que diferencia o site de qualquer template médico genérico.
