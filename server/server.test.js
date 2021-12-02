const supertest = require("supertest");
const { app } = require("./server");

describe("Test server endpoints", () => {
  test("GET /api/get-campaigns", async () => {
    await supertest(app).get("/api/get-campaigns").expect(200);
  });

  test("POST /api/add-campaign", async () => {
    await supertest(app)
      .post("/api/add-campaign")
      .send({
        startDate: 1638447594089,
        endDate: 1638447594089,
        targetImpressions: 100,
      })
      .expect(200);
  });
});
