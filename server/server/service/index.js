'use strict';
/***************************************************************************************************************************

 * Shared Service use by diffent controllers 
 
 **************************************************************************************************************************/
var _ = require('lodash');
var NETWORK_SERVICE = require('./network');

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    NETWORK_SERVICE
);