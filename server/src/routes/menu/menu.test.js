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
});
