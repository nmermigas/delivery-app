const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Menu API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    mongoDisconnect();
  });

  describe("Test GET /menu", () => {
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get("/v1/menu")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("Test POST /menu", () => {
    const completeMenuItemData = {
      itemName: "Hot Dog",
      category: "Main Dishes",
      description: "American Hot Dog",
      price: 7.99,
    };

    const menuItemDataWithoutPrice = {
      itemName: "Hot Dog",
      category: "Main Dishes",
      description: "American Hot Dog",
    };

    const menuItemDataWithoutName = {
      category: "Main Dishes",
      description: "American Hot Dog",
      price: 7.99,
    };

    const menuItemDataWithoutCategory = {
      itemName: "Hot Dog",
      description: "American Hot Dog",
      price: 7.99,
    };

    const menuItemDataWithInvalidCategory = {
      itemName: "Hot Dog",
      category: "Main Food",
      description: "American Hot Dog",
      price: 7.99,
    };

    // test("It should respond with 201 created", async () => {
    //   const response = await request(app)
    //     .post("/v1/menu")
    //     .send(completeMenuItemData)
    //     .expect("Content-Type", /json/)
    //     .expect(201);

    //   expect(response.body).toMatchObject(completeMenuItemData);
    // });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/v1/menu")
        .send(menuItemDataWithoutName)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required property",
      });
    });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/v1/menu")
        .send(menuItemDataWithoutPrice)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required property",
      });
    });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/v1/menu")
        .send(menuItemDataWithoutCategory)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required property",
      });
    });
  });
});
