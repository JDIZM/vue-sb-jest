// tests/unit/Button.spec.js

import { mount } from "@vue/test-utils";

import MyButton from "../../src/stories/Button.vue";

//👇 Imports a specific story for the test
import { Primary } from "../../src/stories/Button.stories";

test("renders the button in the primary state", () => {
  const wrapper = mount(MyButton, {
    propsData: Primary.args,
  });
  expect(wrapper.classes()).toContain("storybook-button--primary");
});
