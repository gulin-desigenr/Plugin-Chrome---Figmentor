# Contratos de Modulo

## Contrato geral

Cada modulo deve expor:

- `moduleId`: identificador estavel
- `version`: versao semantica
- `run(input)`: funcao principal tipada
- `validate(input)`: checagem de precondicoes
- `describe()`: resumo de responsabilidade e limites

## Matriz de entradas e saidas

| Modulo | Entrada | Saida | Bloqueios |
| --- | --- | --- | --- |
| `figma-reader` | `FigmaReadRequest` | `FigmaReadResult` | frame ausente, contexto de captura ausente |
| `normalizer` | `NormalizeRequest` | `CanonicalIR` | snapshot invalido |
| `elementor-compiler` | `CompileRequest` | `CompiledExecutionBatch` | plano nao aprovado, capability ausente |
| `elementor-importer` | `ImportRequest` | `ExecutionReport` | preflight reprovado, trigger invalido |
| `reconciler` | `ReconcileRequest` | `ReconciliationReport` | execucao sem inventario |
| `verifier` | `VerifyRequest` | `VerificationReport` | evidencias ausentes |

## Regras obrigatorias

- nenhum modulo muda responsabilidade dinamicamente
- nenhum modulo usa texto livre como decisao unica
- toda interface carrega ids estaveis de correlacao
- toda falha relevante retorna codigo estruturado

## Contrato operacional minimo do import

O import da v1 so pode ser acionado por lote compilado e plano aprovado, incluindo:

- `planId`
- `sourceSessionId`
- `correlationId`
- `idempotencyKey`
- `trigger`
- operacoes resolvidas por alvo e propriedade

## Contrato minimo de reconciliacao

`reconciler` nao e opcional. Ele precisa produzir pelo menos:

- `planId`
- `executionId`
- `targetDeltas`
- `scopeExpansionDetected`
- `blockingConflicts`

## Contrato minimo de verificacao

`verifier` precisa registrar:

- qual execucao foi verificada
- quais viewports foram observados
- evidencias estruturais, semanticas e visuais
- um veredito final explicitamente tipado
