const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Orders API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });
  //   beforeAll(() => {
  //     // Set a timeout of 10 seconds (10000 ms) for all tests in this suite
  //     jest.setTimeout(20000);
  //   });

  afterAll(async () => {
    mongoDisconnect();
  });

  describe("Test GET /orders", () => {
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get("/v1/orders")
        .expect("Content-Type", /text\/html/)
        .expect(200);
    });
  });

  describe("Test POST /orders", () => {
    const completeOrderData = {
      items: [
        {
          itemName: "Pizza",
          quantity: 1,
        },
        {
          itemName: "Caprese Salad",
          quantity: 1,
        },
        {
          itemName: "Garlic Bread",
          quantity: 2,
        },
        {
          itemName: "Soda",
          quantity: 1,
        },
      ],
    };

    const orderWithInvalidQuantity = {
      items: [
        {
          itemName: "Pizza",
          quantity: 1,
        },
        {
          itemName: "Caprese Salad",
          quantity: 1,
        },
        {
          itemName: "Garlic Bread",
          quantity: 2,
        },
        {
          itemName: "Soda",
          quantity: -5,
        },
      ],
    };

    const orderWithInvalidItem = {
      items: [
        {
          itemName: "Spaghetti",
          quantity: 1,
        },
        {
          itemName: "Caprese Salad",
          quantity: 1,
        },
        {
          itemName: "Garlic Bread",
          quantity: 2,
        },
        {
          itemName: "Soda",
          quantity: 1,
        },
      ],
    };

    const emptyOrder = {};

    // test("It should respond with 201 created", async () => {
    //   const response = await request(app)
    //     .post("/v1/orders")
    //     .send(completeOrderData)
    //     .expect("Content-Type", /json/)
    //     .expect(201);

    //   expect(response.body).toMatchObject(completeOrderData);
    // });

    test("It should catch invalid quantity", async () => {
      const response = await request(app)
        .post("/v1/orders")
        .send(orderWithInvalidQuantity)
        .expect("Content-Type", /json/)
        .expect(400);

      //   expect(response.body).toStrictEqual({
      //     error: "Please place a valid order!",
      //   });
    });

    test("It should catch empty order", async () => {
      const response = await request(app)
        .post("/v1/orders")
        .send(emptyOrder)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Please place a valid order!",
      });
    });

    // test("It should catch invalid dishes", async () => {
    //   const response = await request(app)
    //     .post("/v1/orders")
    //     .send(orderWithInvalidItem)
    //     .expect("Content-Type", /json/)
    //     .expect(400);

    //   expect(response.body).toBe("Item 'Spaghetti' is not on the menu");
    // });
  });
});
