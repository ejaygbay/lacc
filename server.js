const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routers/auth-routes');
const dashboardRoutes = require('./routers/dashboard-routes');
const jobRoutes = require('./routers/job-routes');
const categoryRoutes = require('./routers/category-routes');
const sequelize = require('./models/tables');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname, +'/public'));

app.use(authRoutes);
app.use(dashboardRoutes);
app.use(jobRoutes);
app.use(categoryRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))