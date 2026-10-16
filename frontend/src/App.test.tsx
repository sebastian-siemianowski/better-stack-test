
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Hello World App", () => {
    it("renders the heading", () => {
        render(<App />);

        expect(
            screen.getByRole("heading", {
                name: "Hello World!",
            })
        ).toBeInTheDocument();
    });

    it("starts the counter at zero", () => {
        render(<App />);

        expect(
            screen.getByTestId("counter")
        ).toHaveTextContent("0");
    });

    it("increments when Increase is clicked", async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.click(
            screen.getByRole("button", { name: "Increase" })
        );

        expect(
            screen.getByTestId("counter")
        ).toHaveTextContent("1");
    });

    it("decrements when Decrease is clicked", async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.click(
            screen.getByRole("button", { name: "Decrease" })
        );

        expect(
            screen.getByTestId("counter")
        ).toHaveTextContent("-1");
    });

    it("resets the counter to zero", async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.click(
            screen.getByRole("button", { name: "Increase" })
        );

        await user.click(
            screen.getByRole("button", { name: "Reset" })
        );

        expect(
            screen.getByTestId("counter")
        ).toHaveTextContent("0");
    });

    it("switches tabs and preserves the playground counter", async () => {
        const user = userEvent.setup();
        render(<App />);

        const playgroundTab = screen.getByRole("tab", {name: "Hello World"});
        const betterStackTab = screen.getByRole("tab", {name: "Better Stack Test"});

        expect(playgroundTab).toHaveAttribute("aria-selected", "true");

        await user.click(screen.getByRole("button", {name: "Increase"}));
        await user.click(betterStackTab);

        expect(betterStackTab).toHaveAttribute("aria-selected", "true");
        expect(playgroundTab).toHaveAttribute("aria-selected", "false");
        expect(screen.getByRole("tabpanel", {name: "Better Stack Test"})).toBeVisible();
        expect(screen.queryByRole("tabpanel", {name: "Hello World"})).not.toBeInTheDocument();

        await user.click(playgroundTab);

        expect(playgroundTab).toHaveAttribute("aria-selected", "true");
        expect(betterStackTab).toHaveAttribute("aria-selected", "false");
        expect(screen.getByRole("tabpanel", {name: "Hello World"})).toBeVisible();
        expect(screen.queryByRole("tabpanel", {name: "Better Stack Test"})).not.toBeInTheDocument();
        expect(screen.getByTestId("counter")).toHaveTextContent("1");
    });
});
