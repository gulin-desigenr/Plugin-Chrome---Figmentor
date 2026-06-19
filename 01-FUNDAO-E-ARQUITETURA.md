# Fase 01: Fundacao e Arquitetura

## Objetivo

Definir a arquitetura oficial do produto, o escopo do MVP e os contratos tecnicos que vao organizar o repositorio.

## Escopo

- visao de produto
- arquitetura logica
- modulos da extensao
- definicao do MVP
- limites explicitos da v1

## Modulos alvo

- `figma-reader`
- `normalizer`
- `elementor-compiler`
- `elementor-importer`
- `reconciler`
- `verifier`

## Entregaveis

- diagrama logico do sistema
- definicao de modulos e interfaces
- repositorio inicial com convencoes
- lista de casos em escopo e fora de escopo

## Checkpoints

- a equipe consegue explicar o fluxo ponta a ponta em uma pagina
- existe fronteira clara entre leitura, compilacao, importacao e reconciliacao
- o MVP esta fechado sem depender de promessas vagas

## Gates bloqueantes

- nao seguir sem definir qual dado entra no IR
- nao seguir sem definir como o import sera acionado
- nao seguir se reconciliacao ainda for tratada como “ajuste manual depois”

## Criterio de saida

Arquitetura aprovada e escopo do MVP congelado.
