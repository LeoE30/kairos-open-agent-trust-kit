# KAIROS Open Agent Trust Kit

Public-good toolkit for local-first AI agents that need human approval, privacy boundaries, and reconstructable evidence.

This repository is the open grant-facing seed of KAIROS. It is intentionally bounded: it provides reusable schemas, workflow examples, and a minimal reference demo without exposing Forneus Technologies' proprietary commercial architecture.

## Problem

AI agents are moving from chat into real workflows. When an agent prepares an action, touches sensitive data, or sends a result to another system, teams need more than a text answer. They need to know:

- what task was requested;
- which risk level was assigned;
- whether human approval was required;
- what evidence was produced;
- what data stayed local;
- how the decision can be reviewed later.

Most agent frameworks focus on orchestration. This project focuses on trust primitives around orchestration.

## Public Scope

The open toolkit covers:

- task intake schema;
- risk classification schema;
- human approval states;
- tamper-evident receipt schema;
- privacy boundary notes;
- example workflows for AI assistant, compliance, and security operations;
- a minimal local demo that emits JSON evidence receipts.

It does not include private Forneus product internals, customer data, production infrastructure, or military/dual-use operational details.

## Repository Layout

```text
schemas/
  task-intake.schema.json
  risk-classification.schema.json
  evidence-receipt.schema.json
examples/
  sample-task.json
  sample-receipt.json
src/
  demo.js
docs/
  roadmap.md
  privacy-boundaries.md
  grant-scope.md
```

## Demo

```bash
node src/demo.js examples/sample-task.json
```

The demo reads a local task request, classifies it with a simple deterministic policy, and prints a hashable evidence receipt. The current implementation is deliberately small so reviewers can inspect the model without depending on external services.

## Grant-Funded Roadmap

The grant-funded roadmap is focused on useful public deliverables:

1. Harden schemas and examples.
2. Add adapter examples for agent frameworks.
3. Add signed/hashable receipt exports.
4. Publish docs and demo video.
5. Collect feedback from open AI and decentralized infrastructure builders.

## Forneus Technologies

Forneus Technologies is building trust-layer software for regulated, sensitive, and high-stakes workflows. Public links:

- Website: https://forneus.io
- YouTube: https://www.youtube.com/@ForneusTechnologies
- X: https://x.com/ForneusIO

## License

MIT License. See `LICENSE`.
