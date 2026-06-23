import type { NextFunction, Request, Response } from "express";
import Db_connection from "../config/db.ts";

//get/items
export const getItems = async(req: Request, res:Response, next:NextFunction)=>{
    try {
       const [rows] = await Db_connection.query("SELECT * FROM items ORDER BY id ASC")
        res.json({success:true, data:rows})
    } catch (error) {
        next(error)
    }
};

//get/items/id

export const getItemId = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {id} = req.params;
        const [rows]: any = await Db_connection.query("SELECT * FROM items WHERE id = ?", [id]);
if (rows.length === 0) {
    return res.status(404).json({ success: false, message: "Item not found" });
}
res.json({ success: true, data: rows[0] });
    } catch (error) {
        next(error)
    }
}

//Post/items
export const createItem = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {name, description }= req.body;
       const [result]: any = await Db_connection.query(
    "INSERT INTO items (name, description) VALUES (?, ?)",
    [name, description]
);
res.status(201).json({ success: true, data: { id: result.insertId, name, description } });
    } catch (error) {
        next(error)
    }
}


//Put/items/id
export const  updateItem = async (req:Request, res:Response, next:NextFunction) =>
    {
    try {
        const {id} = req.params;
        const {name , description} = req.body;
        const [result]: any = await Db_connection.query(
    "UPDATE items SET name = ?, description = ? WHERE id = ?",
    [name, description, id]
);
if (result.affectedRows === 0) {
    return res.status(404).json({ success: false, message: "Item not found" });
}
res.json({ success: true, message: "Item updated" });
    } catch (error) {
        next(error)
    }
}

//Delete/item/id
export const deleteItem = async (req:Request, res:Response, next:NextFunction)=>{
    try {
            const {id} = req.params;
    const [result]: any = await Db_connection.query(
    "DELETE FROM items WHERE id = ?",
    [id]
);
if (result.affectedRows === 0) {
    return res.status(404).json({ success: false, message: "Item not found" });
}
res.json({ success: true, message: "Item deleted successfully" });
    }
    catch (error) {
        next(error)
    }
}
