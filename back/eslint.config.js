import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "warn",
            "semi": "error",
            "quotes": [2, "single", { "avoidEscape": true }]
        }
    }
];
