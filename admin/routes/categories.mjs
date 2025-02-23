import { Router } from "express";
import { categories, products } from "../constants/index.mjs";

const router = Router();

router.get("/categories", (req, res) => {
  res.send(categories);
});

router.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  // const {id} = req.params;

  const matchedProducts = products?.filter((item) => item?._base === id); //بيرجع مصفوفة  فيها كل العناصر المطابقة للشرط, كل تصنيف ليه اكتر من منتج
  if (!matchedProducts || matchedProducts.length === 0) {
    return res
      .status(404)
      .json({ message: "No products matched with this category" });
  }
  res.json(matchedProducts);
});

export default router;
