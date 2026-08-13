# Página de Cível Contencioso otimizada para os termos quentes

Nova página `/civil-contencioso`, no mesmo padrão visual das páginas de Inventário, Imobiliário e Consumidor (navy + dourado, hero com imagem, animações de reveal, botão de WhatsApp).

## Termos que a página vai atacar (Semrush, base BR)

| Onde entra | Termo | Volume | KD |
|---|---|---|---|
| Title / H1 | advogado civil / advogada cível | 4.400 + 2.400 | 14–16 |
| Bloco "Indenizações" | indenização por danos morais, dano moral, danos morais valor, processo por danos morais | ~12.000 somados | 17–24 |
| Bloco "Cobranças e execuções" | execução de título extrajudicial, ação de cobrança, cobrança judicial | ~7.800 somados | 18–25 |
| Bloco "Contratos" | rescisão de contrato, revisão de contrato, advogado contratos | ~15.200 somados | 12–38 |
| Bloco "Locação" | ação de despejo | 4.400 | 22 |
| Bloco "Responsabilidade civil" | advogado responsabilidade civil, acidente de trânsito indenização | 310 | 15–20 |

Nenhum desses passa de KD 38, ou seja: todos são alcançáveis para o site como está hoje.

## Estrutura da página

1. **Hero** — imagem premium gerada (mesa de trabalho jurídica, tom navy), H1 "Advogado cível: condução de conflitos e processos judiciais", subtítulo curto listando contratos, indenizações e cobranças, botão "Solicitar análise" (WhatsApp).
2. **Visão geral** — parágrafo justificado explicando o que é a atuação cível contenciosa em linguagem simples, com a citação em destaque no estilo das outras páginas.
3. **Situações atendidas** — grid de 6 cards com ícone centralizado + título curto + uma linha de texto: Indenizações e danos morais · Cobranças e execuções · Contratos (revisão e rescisão) · Locação e despejo · Responsabilidade civil e acidentes · Conflitos patrimoniais.
4. **Como funciona a análise** — 3 ou 4 etapas (contato, análise de documentos, avaliação de caminhos, condução), no mesmo formato de timeline já usado no site.
5. **Dúvidas frequentes** — accordion com 5 perguntas derivadas das buscas reais: prazo para entrar com ação, o que serve como prova, como é calculado o valor de danos morais, diferença entre cobrança judicial e execução, quanto tempo leva um processo cível. Respostas sem promessa de resultado.
6. **CTA final** — bloco navy com botão de WhatsApp.

## Detalhes técnicos

- Arquivo novo `src/routes/civil-contencioso.tsx`, reaproveitando `Header`, `Footer`, `FloatingWhatsApp`, `WhatsAppButton` e o padrão de `head()` das páginas existentes.
- `head()` com title, description, canonical, OG e Twitter completos, usando o hero como `og:image`.
- JSON-LD `LegalService` + `FAQPage` (mesmo padrão da página de bloqueio de app), para elegibilidade a rich results.
- `src/lib/whatsapp.ts`: nova mensagem para `/civil-contencioso` e inclusão em `CONVERSION_PATHS` para disparar a conversão do Google Ads no clique.
- Imagem `src/assets/civil-contencioso-hero.jpg` gerada no mesmo tom das demais.
- Link no menu do `Header` — apenas se você quiser; por padrão deixo no menu, já que é página institucional de SEO (diferente das de Ads).

## Conformidade OAB

Texto sem promessa de ganho, sem valores, sem "processe já". Termos comerciais entram de forma descritiva ("orientação em ações de indenização por danos morais"), como já foi feito na página de bloqueio de app.
