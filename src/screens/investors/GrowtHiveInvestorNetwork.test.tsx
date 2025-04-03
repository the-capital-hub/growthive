import React from "react";
import { render, screen } from "@testing-library/react";
import GrowtHiveInvestorNetwork from "./GrowtHiveInvestorNetwork";

// Mock the child components to simplify testing
jest.mock("./Header", () => () => <div data-testid="header-component" />);
jest.mock("./HeroSection", () => () => (
  <div data-testid="hero-section-component" />
));
jest.mock("./BenefitsSection", () => () => (
  <div data-testid="benefits-section-component" />
));
jest.mock("./OfferingsSection", () => () => (
  <div data-testid="offerings-section-component" />
));
jest.mock("./EligibilitySection", () => () => (
  <div data-testid="eligibility-section-component" />
));
jest.mock("./ProcessSection", () => () => (
  <div data-testid="process-section-component" />
));
jest.mock("./CommunitySection", () => () => (
  <div data-testid="community-section-component" />
));
jest.mock("./CtaSection", () => () => (
  <div data-testid="cta-section-component" />
));

describe("GrowtHiveInvestorNetwork", () => {
  it("renders all section components", () => {
    render(<GrowtHiveInvestorNetwork />);

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section-component")).toBeInTheDocument();
    expect(
      screen.getByTestId("benefits-section-component"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("offerings-section-component"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("eligibility-section-component"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("process-section-component")).toBeInTheDocument();
    expect(
      screen.getByTestId("community-section-component"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("cta-section-component")).toBeInTheDocument();
  });

  it("has the correct background color and text color", () => {
    render(<GrowtHiveInvestorNetwork />);
    const mainElement = screen.getByRole("main");

    expect(mainElement).toHaveClass("bg-zinc-950");
    expect(mainElement).toHaveClass("text-white");
  });
});
