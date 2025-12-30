import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
  'no-console': 'off',          // cho phép console.log
  'react/prop-types': 'off',    // khi dùng TypeScript
  'no-unused-vars': 'warn',     // tránh fail build
}
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
