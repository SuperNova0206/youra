<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('materials', MaterialController::class);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::get('users', [UsersController::class, 'index']);
Route::post('users', [UsersController::class, 'store']);
Route::get('users/{id}', [UsersController::class, 'show']);
Route::put('users/{id}', [UsersController::class, 'update']);
Route::delete('users/{id}', [UsersController::class, 'destroy']);
