# Fase 03: Compilador Elementor Base

## Objetivo

Converter o `Canonical IR` em JSON compativel com Elementor com o maximo de fidelidade estrutural nativa possivel.

## Escopo

- mapeamento de blocos para widgets e containers
- regras de nesting
- traducao de spacing, sizing e tipografia
- injecao de identificadores estaveis
- classificacao de fallback

## Entregaveis

- `Widget Mapping Rules`
- gerador de JSON Elementor
- matriz `IR -> widget/container`
- relatorio de perda de fidelidade por bloco

## Regras base do compilador

- nunca gerar widget sem justificativa de mapeamento
- preferir container nativo a hacks de CSS
- registrar explicitamente toda aproximacao
- separar `compilado com fidelidade`, `compilado com delta` e `nao compilavel`

## Checkpoints

- o compilador produz JSON importavel
- containers, headings, text, buttons e blocos simples saem corretos
- o JSON final inclui identificadores estaveis para reconciliacao

## Gates bloqueantes

- nao seguir se o JSON ainda quebrar em import basico
- nao seguir se widgets complexos estiverem sendo forjados como widgets simples
- nao seguir se perdas de fidelidade nao forem reportadas

## Criterio de saida

O sistema gera um JSON Elementor nativo e consistente para os blocos centrais do MVP.
