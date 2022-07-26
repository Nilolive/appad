import * as express from 'express';

import CatCtrl from './controllers/cat';
import ProjetoCtrl from './controllers/projeto';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const projetoCtrl = new ProjetoCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

   // Projetos
   
   router.route('/projetos').get(projetoCtrl.getAll);
   router.route('/projetos/count').get(projetoCtrl.count);
   router.route('/projeto').post(projetoCtrl.insert);
   router.route('/projeto/:id').get(projetoCtrl.get);
   router.route('/projeto/:id').put(projetoCtrl.update);
   router.route('/projeto/:id').delete(projetoCtrl.delete);
 
  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}