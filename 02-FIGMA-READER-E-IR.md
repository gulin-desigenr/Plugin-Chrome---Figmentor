# Fase 02: Figma Reader e IR

## Objetivo

Ler o frame do Figma Web com confianca suficiente para gerar um `Canonical IR` auditavel e reutilizavel.

## Escopo

- captura de frame selecionado
- leitura de hierarquia
- leitura de auto layout
- leitura de texto, cor, borda, sombra, radius e spacing
- classificacao de papeis semanticos
- normalizacao para IR

## Entregaveis

- schema do `Canonical IR`
- extrator de nos do Figma
- normalizador de blocos
- estrategia de evidencia por bloco

## Campos minimos por bloco

- `block_id`
- `source_node_id`
- `block_type`
- `semantic_role`
- `content`
- `layout`
- `style`
- `responsive_behavior`
- `confidence`

## Checkpoints

- o IR representa estrutura e estilo sem depender do DOM do Elementor
- cada bloco traz evidencia suficiente para explicar seu mapeamento
- o sistema distingue bloco simples, bloco composto e bloco fora de escopo

## Gates bloqueantes

- nao seguir se o reader depender de heuristica frouxa demais
- nao seguir se componentes complexos ainda forem achatados cedo demais
- nao seguir se o IR carregar texto livre em vez de campos estruturados

## Criterio de saida

Um frame real do Figma pode ser convertido em IR consistente e reproduzivel.
