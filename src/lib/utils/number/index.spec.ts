import {
  subtractFloatNumbers,
  addFloatNumbers,
  decimalCommifyFormatter,
  integerCommifyFormatter,
  commifyParser,
  getPriceWithDecimalFromTick,
} from "./index";

describe("commify 테스트", () => {
  it("정수 commify formatter", () => {
    expect(integerCommifyFormatter("1000")).toStrictEqual("1,000");
    expect(integerCommifyFormatter("100")).toStrictEqual("100");
    expect(integerCommifyFormatter("1234567")).toStrictEqual("1,234,567");
    expect(integerCommifyFormatter("aaa")).toStrictEqual("0");
  });
  it("실수 commify formatter", () => {
    expect(decimalCommifyFormatter("1000.12", 3)).toStrictEqual("1,000.12");
    expect(decimalCommifyFormatter("100.12345", 3)).toStrictEqual("100.123");
    expect(decimalCommifyFormatter("0.12", 3)).toStrictEqual("0.12");
    expect(decimalCommifyFormatter("12.123456", 8)).toStrictEqual("12.123456");
    expect(decimalCommifyFormatter("1234.123456", 8)).toStrictEqual("1,234.123456");
    expect(decimalCommifyFormatter("1022")).toStrictEqual("1,022");
    expect(decimalCommifyFormatter("aaa", 3)).toStrictEqual("0");
  });
  it("commify parser", () => {
    expect(commifyParser("123,333")).toStrictEqual("123333");
    expect(commifyParser("123,333.1234")).toStrictEqual("123333.1234");
    expect(commifyParser(undefined)).toStrictEqual("0");
  });
});

describe("실수 덧셈 뺄셈 테스트", () => {
  it("Float 덧셈 정상 수행", () => {
    expect(addFloatNumbers(1, 3)).toStrictEqual(4);
    expect(addFloatNumbers(10000, 0.01)).toStrictEqual(10000.01);
    expect(addFloatNumbers(12, 0.09)).toStrictEqual(12.09);
    expect(addFloatNumbers(0.25, 0.01)).toStrictEqual(0.26);
    expect(addFloatNumbers(0.26, 0.01)).toStrictEqual(0.27);
    expect(addFloatNumbers(0.27, 0.01)).toStrictEqual(0.28);
    expect(addFloatNumbers(0.28, 0.01)).toStrictEqual(0.29);
    expect(addFloatNumbers(0.29, 0.01)).toStrictEqual(0.3);
    expect(addFloatNumbers(0.3, 0.01)).toStrictEqual(0.31);
    expect(addFloatNumbers(10.123, 3.34)).toStrictEqual(13.463);
  });

  it("Float 뺄셈 정상 수행", () => {
    expect(subtractFloatNumbers(1, 3)).toStrictEqual(-2);
    expect(subtractFloatNumbers(0.25, 0.01)).toStrictEqual(0.24);
    expect(subtractFloatNumbers(0.26, 0.01)).toStrictEqual(0.25);
    expect(subtractFloatNumbers(0.27, 0.01)).toStrictEqual(0.26);
    expect(subtractFloatNumbers(0.28, 0.01)).toStrictEqual(0.27);
    expect(subtractFloatNumbers(0.29, 0.01)).toStrictEqual(0.28);
    expect(subtractFloatNumbers(0.3, 0.01)).toStrictEqual(0.29);
    expect(subtractFloatNumbers(0.31, 0.01)).toStrictEqual(0.3);
    expect(subtractFloatNumbers(0.32, 0.01)).toStrictEqual(0.31);
    expect(subtractFloatNumbers(10.123, 3.34)).toStrictEqual(6.783);
    expect(subtractFloatNumbers(3, 1.98)).toStrictEqual(1.02);
  });
});

describe("Price tick 테스트", () => {
  it("price tick으로부터 decimal number 구하기", () => {
    expect(getPriceWithDecimalFromTick(100, 1)).toStrictEqual("100");
    expect(getPriceWithDecimalFromTick(100, 0.1)).toStrictEqual("100.0");
    expect(getPriceWithDecimalFromTick(100, 0.01)).toStrictEqual("100.00");
    expect(getPriceWithDecimalFromTick(100.123, 0.01)).toStrictEqual("100.12");
    expect(getPriceWithDecimalFromTick(100.1, 0.01)).toStrictEqual("100.10");
  });
});
