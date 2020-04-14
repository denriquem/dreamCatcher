import Register from "./Register";
import Enzyme from "enzyme";
import { setup, findByTestAttr } from "./../../testHelpers";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let registerComponent;

beforeEach(() => {
  wrapper = setup(Register);
});

describe("Register", () => {
  it("should render without errors", () => {
    registerComponent = findByTestAttr(wrapper, "component-register");
    expect(registerComponent).toHaveLength(1);
  });

  it("should render a sign up form", () => {
    const signUpForm = findByTestAttr(wrapper, "signUp-form");
    expect(signUpForm).toHaveLength(1);
  });

  it("should render a submit button", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton).toHaveLength(1);
  });
});
