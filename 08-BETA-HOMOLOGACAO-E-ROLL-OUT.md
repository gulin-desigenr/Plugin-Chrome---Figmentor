# Fase 08: Beta, Homologacao e Roll-out

## Objetivo

Provar o produto em casos reais antes de ampliar o escopo operacional.

## Escopo

- suite piloto
- metricas de sucesso
- falhas aceitaveis
- gates de liberacao
- plano de beta controlado

## Entregaveis

- suite minima de paginas piloto
- criterios de aceite
- relatorio consolidado de homologacao
- plano de roll-out gradual

## Suite minima recomendada

- 2 landing pages simples
- 2 landing pages medias
- 1 pagina densa

Todas devem ser testadas em:

- `desktop`
- `mobile`

## Metas minimas

- 100% das paginas importam e geram relatorio
- pelo menos 80% terminam com convergencia estrutural aprovada
- pelo menos 80% ficam em `converged` ou `minor_delta` no resultado final
- 0 execucoes com corrupcao estrutural silenciosa

## Gates bloqueantes

- nao abrir beta sem suite piloto real
- nao ampliar escopo se widgets fora do MVP ainda dominarem as falhas
- nao chamar de homologado sem metricas fechadas

## Criterio de saida

O produto prova valor em paginas reais e fica pronto para ciclo controlado de beta.
