import { render, screen } from "@testing-library/react-native";
import { InfoButton } from "./InfoButton";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("InfoButton Component", () => {
  it("renders", () => {
    const screen = render(<InfoButton />);

    expect(screen.getByTestId("info-button"));
  });
});
