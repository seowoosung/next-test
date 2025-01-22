import store from "./store";
import { usersApi } from "./services/users";

describe("Redux Store", () => {
  it("should create store with usersApi Reducer", () => {
    const currentState = store.getState();
    expect(currentState).toHaveProperty(usersApi.reducerPath);
  });
});
