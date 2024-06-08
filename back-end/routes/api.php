<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MaterialsApiController;
use App\Http\Controllers\UsersControllerAPI;

Route::apiResource('materials', MaterialsApiController::class);
Route::apiResource('users', UsersControllerAPI::class);