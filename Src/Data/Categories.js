import Category from "../Models/Category";
import Product from "../Models/Product";

export default [
  new Category(1, "Vegetables", [
    new Product(1, "Potato", 4, require("../Assets/Images/potato.png"), [
      require("../Assets/Images/potato.png"),
      require("../Assets/Images/potato.png"),
      require("../Assets/Images/potato.png"),
    ]),
    new Product(2, "Tomato", 2, require("../Assets/Images/tomato.png"), [
      require("../Assets/Images/tomato.png"),
      require("../Assets/Images/tomato.png"),
      require("../Assets/Images/tomato.png"),
    ]),
    new Product(3, "Carrot", 6, require("../Assets/Images/carrot.png"), [
      require("../Assets/Images/carrot.png"),
      require("../Assets/Images/carrot.png"),
      require("../Assets/Images/carrot.png"),
    ]),
    new Product(4, "Cucumber", 2, require("../Assets/Images/cucumber.png"), [
      require("../Assets/Images/cucumber.png"),
      require("../Assets/Images/cucumber.png"),
      require("../Assets/Images/cucumber.png"),
    ]),
    new Product(5, "Onion", 6, require("../Assets/Images/onion.png"), [
      require("../Assets/Images/onion.png"),
      require("../Assets/Images/onion.png"),
      require("../Assets/Images/onion.png"),
    ]),
  ]),
  new Category(2, "Meat & Fish", [
    new Product(7, "Lamb", 24, require("../Assets/Images/lamb.png"), [
      require("../Assets/Images/lamb.png"),
      require("../Assets/Images/lamb.png"),
      require("../Assets/Images/lamb.png"),
    ]),
    new Product(8, "Beef", 28, require("../Assets/Images/beef.png"), [
      require("../Assets/Images/beef.png"),
      require("../Assets/Images/beef.png"),
      require("../Assets/Images/beef.png"),
    ]),
    new Product(9, "T-Bone", 34, require("../Assets/Images/tbone.png"), [
      require("../Assets/Images/tbone.png"),
      require("../Assets/Images/tbone.png"),
      require("../Assets/Images/tbone.png"),
    ]),
    new Product(
      10,
      "Pork Belly",
      26,
      require("../Assets/Images/porkbelly.png"),
      [
        require("../Assets/Images/porkbelly.png"),
        require("../Assets/Images/porkbelly.png"),
        require("../Assets/Images/porkbelly.png"),
      ]
    ),
    new Product(11, "Shrimp", 38, require("../Assets/Images/shrimp.png"), [
      require("../Assets/Images/shrimp.png"),
      require("../Assets/Images/shrimp.png"),
      require("../Assets/Images/shrimp.png"),
    ]),
    new Product(
      12,
      "White Fish",
      36,
      require("../Assets/Images/whitefish.png"),
      [
        require("../Assets/Images/whitefish.png"),
        require("../Assets/Images/whitefish.png"),
        require("../Assets/Images/whitefish.png"),
      ]
    ),
    new Product(13, "Sea Food", 30, require("../Assets/Images/seafood.png"), [
      require("../Assets/Images/seafood.png"),
      require("../Assets/Images/seafood.png"),
      require("../Assets/Images/seafood.png"),
    ]),
  ]),
  new Category(3, "Chicken", [
    new Product(14, "Tandoori", 24, require("../Assets/Images/tandoori.png"), [
      require("../Assets/Images/tandoori.png"),
      require("../Assets/Images/tandoori.png"),
      require("../Assets/Images/tandoori.png"),
    ]),
    new Product(15, "Tika", 22, require("../Assets/Images/tika.png"), [
      require("../Assets/Images/tika.png"),
      require("../Assets/Images/tika.png"),
      require("../Assets/Images/tika.png"),
    ]),
    new Product(
      16,
      "Fried Chicken",
      20,
      require("../Assets/Images/friedchicken.png"),
      [
        require("../Assets/Images/friedchicken.png"),
        require("../Assets/Images/friedchicken.png"),
        require("../Assets/Images/friedchicken.png"),
      ]
    ),
    new Product(17, "Nuggets", 18, require("../Assets/Images/nuggets.png"), [
      require("../Assets/Images/nuggets.png"),
      require("../Assets/Images/nuggets.png"),
      require("../Assets/Images/nuggets.png"),
    ]),
    new Product(18, "Pane", 16, require("../Assets/Images/pane.png"), [
      require("../Assets/Images/pane.png"),
      require("../Assets/Images/pane.png"),
      require("../Assets/Images/pane.png"),
    ]),
    new Product(
      19,
      "Cordon Bleu",
      32,
      require("../Assets/Images/cordonbleu.png"),
      [
        require("../Assets/Images/cordonbleu.png"),
        require("../Assets/Images/cordonbleu.png"),
        require("../Assets/Images/cordonbleu.png"),
      ]
    ),
  ]),
  new Category(4, "Fruits", [
    new Product(20, "Apple", 4, require("../Assets/Images/apple.png"), [
      require("../Assets/Images/apple.png"),
      require("../Assets/Images/apple.png"),
      require("../Assets/Images/apple.png"),
    ]),
    new Product(21, "Banana", 2, require("../Assets/Images/banana.png"), [
      require("../Assets/Images/banana.png"),
      require("../Assets/Images/banana.png"),
      require("../Assets/Images/banana.png"),
    ]),
    new Product(22, "Orange", 6, require("../Assets/Images/orange.png"), [
      require("../Assets/Images/orange.png"),
      require("../Assets/Images/orange.png"),
      require("../Assets/Images/orange.png"),
    ]),
    new Product(23, "Grapes", 3, require("../Assets/Images/grapes.png"), [
      require("../Assets/Images/grapes.png"),
      require("../Assets/Images/grapes.png"),
      require("../Assets/Images/grapes.png"),
    ]),
    new Product(24, "Pears", 2, require("../Assets/Images/pears.png"), [
      require("../Assets/Images/pears.png"),
      require("../Assets/Images/pears.png"),
      require("../Assets/Images/pears.png"),
    ]),
    new Product(25, "Peach", 6, require("../Assets/Images/peach.png"), [
      require("../Assets/Images/peach.png"),
      require("../Assets/Images/peach.png"),
      require("../Assets/Images/peach.png"),
    ]),
    new Product(26, "Cherry", 6, require("../Assets/Images/cherry.png"), [
      require("../Assets/Images/cherry.png"),
      require("../Assets/Images/cherry.png"),
      require("../Assets/Images/cherry.png"),
    ]),
  ]),
];
