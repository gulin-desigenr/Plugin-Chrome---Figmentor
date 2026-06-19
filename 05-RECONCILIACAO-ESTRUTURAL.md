# Fase 05: Reconciliacao Estrutural

## Objetivo

Corrigir automaticamente as divergencias entre o IR esperado e o documento efetivamente materializado no Elementor.

## Escopo

- diff IR vs documento salvo
- identificacao de lacunas de compilacao
- ajustes estruturais controlados
- ajustes de settings
- classificacao de casos bloqueados

## Entregaveis

- `Reconciliation Contract`
- motor de diff estrutural
- lista de acoes corretivas permitidas
- `Reconciliation Report`

## Tipos de divergencia

- alvo ausente
- propriedade ausente
- valor salvo diferente
- widget inadequado
- nesting inadequado
- caso nao materializavel no widget atual

## Checkpoints

- reconciliacao opera com escopo controlado
- o sistema sabe quando corrigir e quando bloquear
- ha rastreabilidade entre divergencia, acao e resultado

## Gates bloqueantes

- nao seguir se reconciliacao puder expandir escopo silenciosamente
- nao seguir se o sistema ainda tentar “corrigir tudo” sem classificar risco
- nao seguir sem relatorio por alvo

## Criterio de saida

O sistema corrige automaticamente os deltas estruturais centrais do MVP sem perder governanca.
