import Counter from '../components/Counter';
import {fireEvent, render, screen} from '@testing-library/react';


it("Counter", () => {

    render(<Counter title="Hello"/>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Counter: 5")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Inc"), {});
    expect(screen.getByText("Counter: 6")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Count"), {target: {value: 25}});
    expect(screen.getByText("Counter: 25")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Value"), {target: {value: 100}});
    fireEvent.click(screen.getByText("Update"), {});

    expect(screen.getByText("Counter: 100")).toBeInTheDocument();

})