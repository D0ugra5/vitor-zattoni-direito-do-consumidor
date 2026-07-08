
# Landing page de Pensão Alimentícia (para Google Ads)

Página dedicada de conversão, **fora do menu** do site, otimizada para os termos de alta intenção descobertos no Semrush (mercado BR).

## Pesquisa Semrush — termos que orientam o copy

**🎯 Alta intenção (foco do Ads — CPC alto = cliente quente):**
- `advogado pensão alimentícia` — 170/mo · CPC **$1.22** · KD 15
- `advogado de pensão alimentícia` — 260/mo · CPC **$1.03** · KD 13
- `advogado de família` — 1.000/mo · CPC $1.09 · KD 37
- `advogado vara da família` — 1.600/mo · CPC $1.05

**📈 Volume alto (usar no copy + dúvidas):**
- `pensão alimentícia` — 9.900/mo (variações sem acento somam +18.000)
- `revisão de pensão alimentícia` — 720/mo · KD 13
- `prisão por pensão alimentícia` — 720/mo
- `exoneração de pensão alimentícia` — 390/mo · KD 19
- `execução de pensão alimentícia` — 210/mo
- `pensão alimentícia atrasada` — 170/mo
- `guarda compartilhada quem paga pensão` — 2.400/mo
- `valor da pensão alimentícia` — 2.400/mo

**❓ Dúvidas mais buscadas (vira FAQ):**
- Qual o valor da pensão alimentícia? (1.900/mo)
- Como pedir pensão alimentícia na justiça gratuita? (1.900/mo)
- Pensão alimentícia até 18 ou 21 anos? (1.900/mo)
- Se o pai não pagar, quem paga? (1.900/mo)
- Quando o filho perde o direito? (590/mo)
- Guarda compartilhada paga pensão? (4.400/mo)

## O que será construído

### 1. Nova rota `/pensao-alimenticia`
- Arquivo: `src/routes/pensao-alimenticia.tsx`
- **Não entra no menu** (Header/Footer permanecem com Home, Imobiliário, Inventário, Consumidor)
- `robots`: indexável normalmente; canonical próprio
- SEO: title "Advogado de Pensão Alimentícia — Vitor Zattoni" · description focada em ação, revisão, execução e exoneração

### 2. Estrutura da página (conversão > institucional)

```text
┌────────────────────────────────────────────────┐
│ HERO                                           │
│  H1: Advogado de Pensão Alimentícia            │
│  Sub: Pedir, revisar, executar ou exonerar.    │
│       Atendimento sigiloso pelo WhatsApp.      │
│  [Falar com Advogado no WhatsApp] (gtag conv.) │
│  Selo OAB/PR 125.654 · Quatro Barras–PR        │
├────────────────────────────────────────────────┤
│ "Como posso te ajudar"  (4 cards de serviço)   │
│  • Pedir pensão (ação de alimentos)            │
│  • Revisar valor (aumento/redução)             │
│  • Executar pensão atrasada (inclui prisão)    │
│  • Exonerar (filho maior, mudança de situação) │
├────────────────────────────────────────────────┤
│ "Quando procurar um advogado" — bullets curtos │
│  guarda compartilhada, desemprego do pagador,  │
│  filho 18+, pai sumido, descumprimento...      │
├────────────────────────────────────────────────┤
│ Como funciona o atendimento (3 passos)         │
│  1. WhatsApp  2. Análise do caso  3. Estratégia│
├────────────────────────────────────────────────┤
│ FAQ (6–8 perguntas dos termos do Semrush)      │
│  + schema JSON-LD FAQPage                      │
├────────────────────────────────────────────────┤
│ CTA final: faixa dourada + botão WhatsApp      │
├────────────────────────────────────────────────┤
│ Footer (mesmo do site)                         │
└────────────────────────────────────────────────┘
```

### 3. Conversão no WhatsApp (Google Ads)
- Mensagem dedicada em `src/lib/whatsapp.ts`:
  > "Olá, Dr. Vitor Zattoni. Vim pelo site e gostaria de orientação sobre pensão alimentícia. Pode me ajudar?"
- `WhatsAppButton` já dispara `gtag('event','conversion', …)` em `/consumidor`. Vou estender para também disparar em `/pensao-alimenticia` (mesmo `send_to` `AW-18153701329/dTn8CJ_px6wcENH_rdBD`, já que é a mesma conversão de "Contato").

### 4. Design (consistente com o site)
- Mesma paleta navy + gold, fontes Cormorant + Outfit, mesmo Header (transparente no topo) e Footer.
- Visual sóbrio e premium, sem promessa de resultado (compliance OAB já presente no rodapé).

## Detalhes técnicos
- Sem alterações de menu (Header/Footer intactos).
- Sem novas dependências.
- `WhatsAppButton.tsx`: trocar `pathname.startsWith("/consumidor")` por uma lista (`["/consumidor","/pensao-alimenticia"]`).
- `whatsapp.ts`: adicionar chave `"/pensao-alimenticia"` em `WHATSAPP_MESSAGES`.
- `routeTree.gen.ts` é regerado automaticamente pelo plugin do TanStack.
- JSON-LD FAQPage embutido via `head().scripts` da rota.

## Fora do escopo
- Não criar página de "Direito de Família" genérica.
- Não adicionar link no menu nem no Footer (é landing de Ads).
- Não mexer em `/consumidor`, `/imobiliario`, `/inventario`.
