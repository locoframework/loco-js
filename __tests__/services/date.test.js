import DateService from "services/date";

describe("Date", () => {
  const date = new Date(2015, 10, 8, 14, 12, 30, 30); // Nov
  const service = new DateService(date, "en");

  describe("#toString", () => {
    it("supports default format", () => {
      expect(service.toString()).toEqual("2015-11-08");
    });

    it("supports short format", () => {
      expect(service.toString("short")).toEqual("Nov 08");
    });

    it("supports long format", () => {
      expect(service.toString("long")).toEqual("November 08, 2015");
    });
  });
});
