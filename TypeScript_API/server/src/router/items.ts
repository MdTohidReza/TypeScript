import { Router } from "express";
import { getItemId,getItems, createItem, updateItem, deleteItem } from "../controller/controller.ts";

const router = Router()

router.get('/',getItems)
router.get('/:id',getItemId)
router.post('/',createItem)
router.put('/:id',updateItem)
router.delete('/:id',deleteItem)

export default router;