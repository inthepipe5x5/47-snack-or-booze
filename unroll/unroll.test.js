const unroll = require("./unroll");
beforeEach(() => {
    testSquare = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
});

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  let testSquare = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  const unrolledTestSquareToBeExpected = [
    1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
  ];

  it("unroll func works", () => {
    expect(typeof unroll(testSquare)).toEqual("object"); //typeof returns 'object' for arrays
    expect(unroll(testSquare)).toBeTruthy();
    expect(unroll(testSquare).length).toEqual(
      unrolledTestSquareToBeExpected.length
    );
    expect(unroll(testSquare)).toEqual(unrolledTestSquareToBeExpected);
    expect(unroll(testSquare).length).not.toEqual(0);
  });
});
