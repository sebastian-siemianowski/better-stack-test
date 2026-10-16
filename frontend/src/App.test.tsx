
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
});
