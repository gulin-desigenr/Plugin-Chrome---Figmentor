# Escopo do MVP

## Em escopo

- leitura de um frame do Figma Web por sessao
- normalizacao para `Canonical IR`
- plano aprovado com budget de mutacao
- compilacao para operacoes seguras do bridge
- preflight antes de persistencia no Elementor
- reconciliacao estruturada apos execucao
- verificacao estrutural, semantica e visual
- relatorios de execucao e verificacao

## Fora de escopo na v1 padrao

- conversao multipagina irrestrita
- troca automatica de widget
- mudanca estrutural ampla de layout
- alteracoes globais de tema
- upload e substituicao automatica de assets
- rollback fisico completo sem snapshot externo
- autonomia total sem aprovacao humana em itens sensiveis

## Definicao pratica do MVP

O MVP e bem-sucedido quando consegue:

1. ler uma pagina existente no Elementor
2. comparar contra um frame do Figma
3. planejar mutacoes limitadas e explicitas
4. executar apenas o que foi aprovado
5. provar o resultado com relatorio verificavel

## Casos explicitamente bloqueados

- `widget_swap`
- `global_style`
- `dom_structure_change`
- `cross_section_move`
- expansao espontanea de propriedades ou alvos

## Evidencias obrigatorias

- `Canonical IR`
- `Implementation Plan`
- `Execution Report`
- `Reconciliation Report`
- `Verification Report`
- `Capability Matrix`
