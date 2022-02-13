import { render, screen } from "@testing-library/react-native";
import { screensEnabled } from "react-native-screens";
import { Title } from "./Title";

jest.mock("@expo-google-fonts/almendra", () => ({
  __esModule: true,
  useFonts: jest.fn(() => [true]),
}));

describe("Title Component", () => {
  it("renders title when fonts have loaded.", () => {
    const title = "Longsword";
    const screen = render(<Title>{title}</Title>);

    expect(screen.getByText(title));
  });
});
