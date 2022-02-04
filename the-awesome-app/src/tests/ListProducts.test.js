import ListProducts from "../components/products/ListProducts";
import {render,screen,fireEvent, waitFor} from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from '../redux/store';
import axios from 'axios';

jest.mock('axios');
jest.spyOn(window, "alert").mockImplementation(() => {});

it("ListProducts", async () => {

    axios.get.mockResolvedValueOnce({data: [{id:1, name: "p1", description: "d1", price : 100}, {id:2, name: "p2", description: "d2", price : 200}]})
    render(<Provider store={store}><ListProducts/></Provider>)

    expect(screen.getByText("List Products")).toBeInTheDocument();

    await waitFor(() => screen.getAllByTestId("product"));

    //screen.debug();
    expect(screen.getAllByTestId("product")).toHaveLength(2);

    axios.delete.mockResolvedValueOnce({status: 200});
    const allDeleteBtn = screen.getAllByText("Delete");

    fireEvent.click(allDeleteBtn[0], {});

    await waitFor(() => screen.getAllByTestId("product"));
    expect(screen.getAllByTestId("product")).toHaveLength(1);
    screen.debug();
})