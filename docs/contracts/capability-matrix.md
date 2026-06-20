# Capability Matrix

## Objetivo

Registrar o que o bridge do Elementor consegue executar com seguranca no MVP e quais classes de operacao precisam ser bloqueadas, degradadas ou sinalizadas.

## Matriz inicial da fase 01

| Capacidade | Status no MVP | Consumidor principal | Observacao |
| --- | --- | --- | --- |
| atualizar texto de widget existente | `supported` | `elementor-compiler` | precisa de alvo resolvido |
| atualizar spacing e dimensoes locais | `supported_with_constraints` | `elementor-compiler` | sem reflow estrutural amplo |
| atualizar cor, tipografia e decoracao local | `supported_with_constraints` | `elementor-compiler` | depende de cobertura do widget |
| aplicar CSS overlay local | `limited` | `elementor-compiler` | budgetado e rastreado |
| trocar widget | `blocked` | `reconciler` | fora do MVP |
| mover elemento entre secoes | `blocked` | `reconciler` | fora do MVP |
| alterar tema global | `blocked` | `elementor-importer` | fora do MVP |
| subir ou substituir asset automaticamente | `blocked` | `elementor-importer` | fora do MVP |
| validar estrutura apos save | `supported` | `reconciler` | obrigatorio |
| validar viewport desktop e mobile | `supported` | `verifier` | obrigatorio |

## Regras de uso

- `elementor-compiler` deve consultar esta matriz antes de emitir operacoes
- `elementor-importer` deve negar operacoes fora da matriz aprovada
- `reconciler` deve sinalizar qualquer expansao real alem da matriz

## Evolucao esperada

Esta matriz deve ganhar granularidade por widget e por propriedade a partir das fases 03 e 04.
