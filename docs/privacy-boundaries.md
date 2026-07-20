# Privacy Boundaries

The toolkit is designed around data minimization.

## Default Rule

Private content stays local. Public exports should contain only the minimum information required to prove that a workflow event occurred and can be reviewed.

## Good Public Evidence

- event type;
- timestamp;
- local task identifier;
- risk level;
- approval state;
- hash commitment;
- redacted metadata.

## Avoid Publishing

- private documents;
- raw prompts containing sensitive user data;
- personal identifiers;
- military or operational details;
- customer-specific content;
- credentials, keys, tokens, or session data.

## On-Chain Compatibility

The current seed does not require blockchain usage. Future ecosystem-specific variants may publish only commitments, hashes, or minimal metadata when that strengthens verifiability without leaking private data.
