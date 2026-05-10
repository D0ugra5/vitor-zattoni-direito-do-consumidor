## Quebra de cor entre seções

Hoje todas as seções da Home usam o mesmo `--navy-deep` como fundo (apenas Areas e Princípios usam um leve `bg-navy/40`). Isso deixa a página visualmente "plana". Vou introduzir uma alternância sutil de tons de navy para criar respiro entre blocos, mantendo a estética premium e sóbria.

### Paleta adicional (em `src/styles.css`)

Adicionar dois novos tokens próximos ao navy atual:

- `--navy-deep`: `oklch(0.20 0.04 255)` — atual (mais escuro)
- `--navy-mid`: `oklch(0.23 0.042 255)` — novo, intermediário
- `--navy-soft`: `oklch(0.26 0.045 255)` — leve elevação para destaque

Diferença de ~3% em luminosidade — perceptível, mas elegante e coesa.

### Aplicação na Home (`src/routes/index.tsx`)

Alternância A → B → A para criar ritmo visual:

```text
Hero          → navy-deep (imagem + overlay)
Intro         → navy-deep
Areas         → navy-mid       ← quebra
About         → navy-deep
Principles    → navy-mid       ← quebra
Transition    → navy-deep (imagem)
Contact       → navy-deep
```

### Detalhes finos

- Trocar o atual `bg-navy/40` das seções Areas e Princípios pelo novo `bg-navy-mid` (mais limpo e consistente).
- Manter a `border-t border-gold/15` entre seções como divisor dourado sutil.
- Opcional: adicionar um leve gradiente vertical (1–2%) no topo das seções "mid" para suavizar a transição, evitando uma linha dura.
- Garantir contraste do texto offwhite continua AA em ambos os tons (já validado, ambos são bem escuros).

### Resultado

Ritmo visual entre seções sem quebrar a unidade da paleta navy/gold, reforçando a sensação de "capítulos" no scroll institucional.
