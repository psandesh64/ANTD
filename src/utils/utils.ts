// import { writeFileSync } from 'fs';
// import { resolve } from 'path';
import token from './../../token.json'

export function flattenTokens({
  obj,
  prefix = '',
}: {
  obj: Record<string, any>;
  prefix?: string;
}): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const value = obj[key];

    // Build the key – special handling for the token named "primary"
    let newKey = prefix ? `${prefix}${key}` : key;
    if (key === 'main' && prefix) {
      // e.g. "Primarymain" → "Primary"
      newKey = prefix;
    }

    if (value && typeof value === 'object' && 'value' in value) {
      result[newKey] = value.value as string;
    } else if (value && typeof value === 'object' && value !== null) {
      Object.assign(result, flattenTokens({ obj: value, prefix: newKey }));
    }
  }

  return result;
}

// Generate flattened tokens
// const flat = flattenTokens({ obj: token.Global });

// Write to a real JSON file
// const outputPath = resolve(process.cwd(), 'flattened-tokens.json');

// writeFileSync(
//   outputPath,
//   JSON.stringify(flat, null, 2), // Pretty print with 2 spaces
//   'utf-8'
// );

// console.log(`Flattened tokens written to: ${outputPath}`);