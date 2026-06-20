# Fase 01: Fundacao e Arquitetura

## Declaracao de produto

Figmentor Chrome existe para transformar a comparacao `Figma -> Elementor` em um fluxo governado dentro de uma extensao Chrome com:

1. leitura
2. normalizacao
3. decisao explicita
4. planejamento aprovado
5. execucao controlada
6. verificacao de convergencia

O produto nao promete paridade visual irrestrita. Ele promete escopo claro, escrita limitada e evidencia verificavel.

## Objetivo da fase

- congelar o escopo do MVP
- definir as fronteiras dos modulos
- registrar os contratos tecnicos minimos
- iniciar o repositorio oficial da pasta `[10]`

## Fluxo ponta a ponta em uma pagina

1. a extensao Chrome coleta contexto da sessao e aciona `figma-reader`
2. `figma-reader` extrai o frame e metadados relevantes do Figma Web
3. `normalizer` converte a leitura em `Canonical IR`
4. a camada de cockpit monta ou aprova um `Implementation Plan`
5. `elementor-compiler` traduz o plano em operacoes aceitas pelo bridge
6. `elementor-importer` executa preflight, mutacao e finalizacao no WordPress/Elementor
7. `reconciler` compara intencao, destino e resultado observado
8. `verifier` produz prova estrutural, semantica e visual de convergencia

## Principios de arquitetura

- Figma e a fonte visual de verdade.
- A extensao Chrome e o cockpit principal do produto.
- O `Canonical IR` e o contrato central entre leitura, decisao, compilacao e verificacao.
- Matching, decisao e escrita nao podem ser colapsados no mesmo modulo.
- Execucao nunca amplia escopo aprovado.
- Toda importacao precisa ser revalidada depois do save.

## Gates bloqueantes da fase

- nao avancar sem definir o dado minimo que entra no IR
- nao avancar sem definir como a extensao aciona o import
- nao avancar se reconciliacao continuar tratada como ajuste manual informal

## Checkpoints atendidos por esta entrega

- existe explicacao ponta a ponta em uma pagina
- existe fronteira clara entre leitura, compilacao, importacao e reconciliacao
- o MVP foi fechado com itens em escopo e fora de escopo
- o repositorio passou a ter convencoes e contratos explicitos
