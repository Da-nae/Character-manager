const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                input: "./input.html",
                modify: "./modify.html",
                character: "./character.html"
            },
            target: 'esnext',
        },
    },
});