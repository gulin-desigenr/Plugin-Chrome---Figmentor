# Fase 04: Importacao e Sync Elementor

## Objetivo

Importar o documento compilado no Elementor e confirmar o estado salvo como base para a reconciliacao.

## Escopo

- autenticacao no WordPress
- criacao ou atualizacao do documento
- importacao do JSON
- leitura de volta do documento salvo
- relatorio de importacao

## Entregaveis

- `Elementor Import Contract`
- mecanismo de import/upload
- leitura do estado pos-save
- `Import Report`

## Decisoes que esta fase precisa fechar

- import em pagina existente ou template novo
- estrategia de autenticacao
- estrategia de associacao entre documento salvo e frame de origem
- estrategia de reimportacao idempotente

## Checkpoints

- a extensao consegue importar um documento e identificar o alvo salvo
- existe leitura de volta do estado final
- o sistema sabe se houve perda no save ou no import

## Gates bloqueantes

- nao seguir sem prova de persistencia real
- nao seguir se o import so puder ser considerado “sucesso” visualmente
- nao seguir sem relatorio de importacao estruturado

## Criterio de saida

O documento entra no Elementor e volta a ser lido como estado confiavel do sistema.
