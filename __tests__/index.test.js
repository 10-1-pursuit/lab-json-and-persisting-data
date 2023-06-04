const { nineNineCentItem, nineNineCentItems } = require("../index")

 describe ("nineNineCentItem" , () => {
    it("return one product" , () => {
    const item = nineNineCentItem();
    expect(item).toHaveProperty('idenity');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('bio');
    expect(item).toHaveProperty('location');
    expect(item).toHaveProperty('material');
    expect(item).toHaveProperty('price');
    expect(item).toHaveProperty('expiration');
    });
});

describe ("nineNineCentItems" , () => {
    it("Generates 5 products" , () => {
  const count = 5;
  const item = nineNineCentItems(count);
  expect(item).toHaveLength(count)
    });
});    