const express = require('express');
const app = express();
const PORT = 4007;
const ecommerceRoutes = require('./ecommerce');
const passwordStrengthRoutes = require('./passwordStrengthRoutes');
app.use('/ecommerce', ecommerceRoutes); 
app.use('/passwordstrength', passwordStrengthRoutes); 
app.use((req, res) => {
    res.status(200).send("Welcometo search /ecommerce/products to See Products.To Check  Password write /passwordstrength");
});
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});