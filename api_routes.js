// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var pacienteController = require('./controller/PacienteController');

// Contact routes
router.route('/pacientes')
    .get(pacienteController.index)
    .post(pacienteController.new);
router.route('/pacientes/:contact_id')
    .get(pacienteController.view)
    .patch(pacienteController.update)
    .put(pacienteController.update)
    .delete(pacienteController.delete);
    router.route('/inicio')
    .get(pacienteController.inicio);


// Export API routes
module.exports = router;