# Figmentor Chrome

Plugin Chrome para transformar frames do Figma em documentos Elementor com importacao, reconciliacao estrutural e validacao final.

## Visao do produto

O objetivo deste repositorio e desenvolver um unico plugin Chrome capaz de:

1. ler o design no Figma Web
2. normalizar o frame em um `Canonical IR`
3. compilar esse IR para JSON compativel com Elementor
4. importar o documento no WordPress/Elementor
5. reconciliar divergencias apos a importacao
6. validar fidelidade estrutural, semantica e visual

O produto nao deve depender apenas de check visual.

## Principios

- Figma e a fonte visual de verdade
- o IR e o contrato interno do sistema
- a importacao para Elementor deve ser auditavel
- reconciliacao automatica vem antes de ajuste manual
- verificacao visual e a ultima camada, nao a unica

## Estrutura de planejamento

- [00-PLANO-MESTRE.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/00-PLANO-MESTRE.md>)
- [01-FUNDAO-E-ARQUITETURA.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/01-FUNDAO-E-ARQUITETURA.md>)
- [02-FIGMA-READER-E-IR.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/02-FIGMA-READER-E-IR.md>)
- [03-COMPILADOR-ELEMENTOR-BASE.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/03-COMPILADOR-ELEMENTOR-BASE.md>)
- [04-IMPORTACAO-E-SYNC-ELEMENTOR.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/04-IMPORTACAO-E-SYNC-ELEMENTOR.md>)
- [05-RECONCILIACAO-ESTRUTURAL.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/05-RECONCILIACAO-ESTRUTURAL.md>)
- [06-FIDELIDADE-VISUAL-E-RESPONSIVIDADE.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/06-FIDELIDADE-VISUAL-E-RESPONSIVIDADE.md>)
- [07-OPERACAO-SEGURANCA-E-OBSERVABILIDADE.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/07-OPERACAO-SEGURANCA-E-OBSERVABILIDADE.md>)
- [08-BETA-HOMOLOGACAO-E-ROLL-OUT.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/08-BETA-HOMOLOGACAO-E-ROLL-OUT.md>)

## Forma de uso

Leia os arquivos em ordem. Nenhuma fase deve avancar sem cumprir os gates da fase anterior.

## Escopo inicial do MVP

Entra no MVP:

- leitura de frame no Figma Web
- geracao de `Canonical IR`
- compilacao para JSON Elementor
- importacao do documento
- reconciliacao estrutural
- verificacao em `desktop` e `mobile`

Fica fora do MVP:

- interacoes complexas
- animacoes
- assets ricos e edicao automatica de midia
- cobertura universal de todos os widgets do Elementor
- autocorrecao infinita multi-rodada
