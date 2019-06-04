import Cat from "../src/models/cat.model";
import { CatService } from "../src/services/cat-service";

// The jest.mock method mocks the whole cat model. 
// You will always need to mock the whole model, otherwise you get errors on the initialization of the model.
jest.mock("../src/models/cat.model");

beforeEach(() => {
    jest.resetAllMocks();
});

// This test shows how the constructor can be mocked, and how to spy on passed parameters.
describe("given a new instance of the cat model", () => {
    it("sets garfield as the name of the cat", () => {
        new CatService().createANewCatByConstructor("garfield", 12);
        expect(Cat).toBeCalledWith(expect.objectContaining({
            name: "garfield",
        }));
    });

    it("sets 12 as the age of the cat", () => {
        new CatService().createANewCatByConstructor("garfield", 12);
        expect(Cat).toBeCalledWith(expect.objectContaining({
            age: 12,
        }));
    });
});