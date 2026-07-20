import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node src/demo.js examples/sample-task.json");
  process.exit(1);
}

const task = JSON.parse(readFileSync(resolve(inputPath), "utf8"));

function classify(taskInput) {
  const reasons = [];
  let riskLevel = "low";

  if (["confidential", "restricted"].includes(taskInput.data_sensitivity)) {
    riskLevel = "high";
    reasons.push("Sensitive data boundary detected.");
  }

  if (["send", "change_record", "external_call"].includes(taskInput.intended_action)) {
    riskLevel = "high";
    reasons.push("Consequential external action detected.");
  }

  if (taskInput.data_sensitivity === "internal" && riskLevel !== "high") {
    riskLevel = "medium";
    reasons.push("Internal information should be reviewed before export.");
  }

  if (reasons.length === 0) {
    reasons.push("No elevated risk trigger matched the demo policy.");
  }

  return {
    task_id: taskInput.task_id,
    risk_level: riskLevel,
    approval_required: riskLevel !== "low",
    reasons
  };
}

function sha256Json(value) {
  return createHash("sha256")
    .update(JSON.stringify(value, Object.keys(value).sort()))
    .digest("hex");
}

const classification = classify(task);
const receipt = {
  receipt_id: `receipt-${task.task_id}`,
  task_id: task.task_id,
  issued_at: new Date().toISOString(),
  risk_level: classification.risk_level,
  approval_state: classification.approval_required ? "pending_human_review" : "not_required",
  privacy_boundary: task.data_sensitivity === "public" ? "public_export" : "local_only",
  content_hash: sha256Json({ task, classification }),
  notes: "Demo policy only. Production systems should use stronger validation, signatures, logging, and review controls."
};

console.log(JSON.stringify({ task, classification, receipt }, null, 2));
