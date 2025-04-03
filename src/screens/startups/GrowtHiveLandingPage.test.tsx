import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GrowtHiveLandingPage from "./GrowtHiveLandingPage";

// Mock the child components to simplify testing
jest.mock("./Header", () => () => <div data-testid="header-component" />);
jest.mock("./HeroSection", () => () => (
  <div data-testid="hero-section-component" />
));
jest.mock("./WelcomeSection", () => () => (
  <div data-testid="welcome-section-component" />
));
jest.mock("./PartnersSection", () => () => (
  <div data-testid="partners-section-component" />
));
jest.mock("./StartupFocusSection", () => () => (
  <div data-testid="startup-focus-section-component" />
));
jest.mock("./FundingApplicationSection", () => () => (
  <div data-testid="funding-application-section-component" />
));
jest.mock("./WhyGrowtHiveSection", () => () => (
  <div data-testid="why-growthive-section-component" />
));
jest.mock("./Footer", () => () => <div data-testid="footer-component" />);

describe("GrowtHiveLandingPage", () => {
  it("renders all section components", () => {
    render(<GrowtHiveLandingPage />);

    // Check if all components are rendered
    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section-component")).toBeInTheDocument();
    expect(screen.getByTestId("welcome-section-component")).toBeInTheDocument();
    expect(
      screen.getByTestId("partners-section-component"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("startup-focus-section-component"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("funding-application-section-component"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("why-growthive-section-component"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });

  it("includes the Tabler icons stylesheet", () => {
    render(<GrowtHiveLandingPage />);

    // Check if the stylesheet link is included
    const linkElement = document.querySelector('link[href*="tabler-icons"]');
    expect(linkElement).toBeInTheDocument();
  });

  it("has the correct background color", () => {
    render(<GrowtHiveLandingPage />);

    // Check if the main container has the correct background color class
    const mainContainer = screen.getByRole("main").parentElement;
    expect(mainContainer).toHaveClass("bg-zinc-950");
  });
});
