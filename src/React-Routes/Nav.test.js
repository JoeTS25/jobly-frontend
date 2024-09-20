import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Nav from "./Nav";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Nav />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <Nav />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider currentUser={null}>
          <Nav />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
