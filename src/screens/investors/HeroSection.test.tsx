import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

// Mock the PartnerLogos component
jest.mock("./PartnerLogos", () => () => <div data-testid="partner-logos" />);

describe("HeroSection", () => {
  it("renders the main heading and subheading", () => {
    render(<HeroSection />);

    expect(screen.getByText("JOIN OUR")).toBeInTheDocument();
    expect(screen.getByText("Angel Network")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<HeroSection />);

    expect(
      screen.getByText(
        /At GrowtHive, we give accredited investors exclusive access/,
      ),
    ).toBeInTheDocument();
  });

  it("renders the call-to-action button", () => {
    render(<HeroSection />);

    expect(screen.getByText("Join Investor Community")).toBeInTheDocument();
  });

  it("renders the companies count text", () => {
    render(<HeroSection />);

    expect(screen.getByText("More than")).toBeInTheDocument();
    expect(screen.getByText("15k companies")).toBeInTheDocument();
    expect(screen.getByText("are with us")).toBeInTheDocument();
  });

  it("includes the PartnerLogos component", () => {
    render(<HeroSection />);

    expect(screen.getByTestId("partner-logos")).toBeInTheDocument();
  });
});
