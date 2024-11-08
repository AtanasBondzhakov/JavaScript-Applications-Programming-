import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { onLogout } from './services/userServices.js';
import { renderDashboard } from './views/dashboardView.js';

import { renderHome } from './views/homeView.js';
import { renderLogin } from './views/loginView.js';
import { renderRegister } from './views/registerView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', onLogout);
page('/dashboard', renderDashboard);

page.start();