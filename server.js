const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const homeRoutes = require('./routes/homeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
// importing from routes
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


