module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended", // enables eslint-plugin-prettier and eslint-config-prettier
    ],
    rules: {
        "prettier/prettier": "warn", // shows prettier issues as lint warnings
        "react/react-in-jsx-scope": "off", // for React 17+
        "@typescript-eslint/no-unused-vars": "warn",
    },
};
