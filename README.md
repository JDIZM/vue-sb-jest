# test-jest

A default vue project that installs storybook and works with jest.

1. installed vue 2 using the cli with recommended jest config and example vue test.
2. installed storybook and created the sample test from https://storybook.js.org/docs/vue/workflows/unit-testing
3. installed `@storybook/addon-storyshots` and `jest-vue-preprocessor`
4. modified the jest config according to https://www.npmjs.com/package/@storybook/addon-storyshots while keeping the `preset: "@vue/cli-plugin-unit-jest",`
5. added the storyshot test and applied the fix from https://github.com/storybookjs/storybook/issues/13223#issuecomment-870866451

There is an additional warning from the example storybook components

```console
Unexpected error while loading ./stories/Introduction.stories.mdx: SyntaxError: Cannot use import statement outside a module
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
