


module.exports = {
    getAllItems: (req, res, next) => {
        res.status(200).send(inventory)
    },


    postItem: (req, res, next) => {
        const  {
            name,
            price,
            imgUrl
        } = req.body
        const newItem = {
            id, 
            name,
            price,
            imgUrl
        }
        inventory.push(newItem);
        id++;
        res.status(200).send(inventory)
    },

    deleteItem: (req, res, next) => {
        const { id } = req.params;
        const index = inventory.findIndex(item => {
            return item.id === +id;
        });
        if(index !== -1) {
            inventory.splice(index, 1);
            res.status(200).send(inventory);
        } else {
            res.status(404).send("Item not found")
        }
    },
    dummy: async (req, res, next) => {
        const db = req.app.get("db");
        const users = await db.select_users()
        .catch(err => console.log(err));
        res.status(200).send(users)
    }

    
    
}