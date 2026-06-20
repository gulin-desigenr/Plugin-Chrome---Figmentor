# Figmentor Chrome

Extensao Chrome para operar o fluxo `Figma -> IR -> Elementor -> reconcile -> verify` com escopo controlado, escrita auditavel e evidencia de convergencia.

## Tese

Figmentor nao e um exportador cego. O cockpit principal e a extensao Chrome, que coordena leitura do Figma Web, planejamento, acionamento do bridge no WordPress/Elementor e verificacao posterior.

O produto promete:

1. leitura confiavel do frame no Figma Web
2. normalizacao para `Canonical IR`
3. planejamento e compilacao de mutacoes permitidas
4. importacao segura via bridge do Elementor
5. reconciliacao estrutural apos save
6. verificacao estrutural, semantica e visual

O produto nao promete fidelidade universal nem autonomia irrestrita.

## Fundacao entregue nesta pasta

Esta pasta agora concentra a fundacao oficial da Fase 01:

- docs de produto, arquitetura, contratos e capability matrix
- scaffold TypeScript inicial para contratos e modulos
- convencoes alinhadas ao plano mestre do plugin Chrome

Arquivos principais:

- [00-PLANO-MESTRE.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/00-PLANO-MESTRE.md>)
- [01-FUNDAO-E-ARQUITETURA.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/01-FUNDAO-E-ARQUITETURA.md>)
- [docs/product/phase-01-foundation.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/docs/product/phase-01-foundation.md>)
- [docs/product/mvp-scope.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/docs/product/mvp-scope.md>)
- [docs/architecture/system-overview.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/docs/architecture/system-overview.md>)
- [docs/contracts/module-interfaces.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/docs/contracts/module-interfaces.md>)
- [docs/contracts/capability-matrix.md](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/docs/contracts/capability-matrix.md>)
- [src/index.ts](</Users/pedrogulin/Library/Mobile Documents/com~apple~CloudDocs/PEDRO_DEV/[10] Plugin Chrome - Figmentor/src/index.ts>)

## Estrutura de repositorio

- `docs/product`: visao, fase 01 e MVP
- `docs/architecture`: fluxo ponta a ponta e fronteiras do sistema
- `docs/contracts`: contratos operacionais e matriz de capacidades
- `src/contracts`: tipos centrais do dominio
- `src/modules`: modulos oficiais com placeholders tipados da fase 01

## Convencoes

- nenhum modulo escreve fora de um plano aprovado
- a extensao Chrome orquestra, os modulos de dominio decidem
- toda escrita precisa de correlacao, idempotencia e evidencia posterior
- verificacao visual nunca substitui verificacao estrutural

## Check rapido

Depois de instalar dependencias:

```bash
npm install
npm run check
```
