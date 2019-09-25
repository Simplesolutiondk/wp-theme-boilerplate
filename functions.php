<?php

require_once realpath( dirname( __FILE__, 4 ) ) . '/vendor/autoload.php';

use ssoFramework\src\assets\Actions;
use ssoFramework\src\assets\Removable;
use ssoFramework\src\assets\Enqueue;
use ssoFramework\src\api\MenuEndpoints;
use ssoFramework\Init;

/*
	Framework Initial
*/
Init::load();
Init::theme_setup();

Actions::loadFilters();
Actions::loadActions();
Removable::removeActions();

/*
 * Load Custom API routes
 */
MenuEndpoints::loadActions();

/*
	Load assets
*/
Enqueue::css();
Enqueue::js();
Enqueue::loadActions();