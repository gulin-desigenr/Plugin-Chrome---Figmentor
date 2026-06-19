# Plano Mestre

Este diretorio organiza o desenvolvimento do `Figmentor Chrome` como produto e repositorio de engenharia.

## Tese

Nao construir apenas um exportador de JSON.

Construir um compilador de design para Elementor com:

- leitura confiavel do Figma
- IR canonico
- compilacao nativa para Elementor
- reconciliacao apos importacao
- verificacao estrutural, semantica e visual

## Ordem obrigatoria

1. `01-FUNDAO-E-ARQUITETURA.md`
2. `02-FIGMA-READER-E-IR.md`
3. `03-COMPILADOR-ELEMENTOR-BASE.md`
4. `04-IMPORTACAO-E-SYNC-ELEMENTOR.md`
5. `05-RECONCILIACAO-ESTRUTURAL.md`
6. `06-FIDELIDADE-VISUAL-E-RESPONSIVIDADE.md`
7. `07-OPERACAO-SEGURANCA-E-OBSERVABILIDADE.md`
8. `08-BETA-HOMOLOGACAO-E-ROLL-OUT.md`

## Regras globais

- nenhuma fase avanca sem evidencia escrita
- toda decisao importante vira contrato, schema ou regra
- toda importacao precisa ser revalidada apos o save
- toda reconciliacao precisa operar com escopo controlado
- verificacao visual nunca substitui verificacao estrutural

## Artefatos obrigatorios

- `Canonical IR`
- `Widget Mapping Rules`
- `Elementor Compilation Contract`
- `Import Report`
- `Reconciliation Report`
- `Verification Report`
- `Capability Matrix`

## Gate mestre

O plano so entra em execucao quando estiver claro que:

- a extensao Chrome sera o cockpit principal
- o fluxo alvo e `Figma -> IR -> Elementor JSON -> import -> reconcile`
- o MVP nao vai prometer fidelidade universal
- widgets fora do escopo terao fallback ou bloqueio formal
