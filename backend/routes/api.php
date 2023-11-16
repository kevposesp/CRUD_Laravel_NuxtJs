<?php

use App\Http\Controllers\Tables as TablesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/tables', [TablesController::class, 'index']);
Route::post('/tables', [TablesController::class, 'store']);
Route::get('/tables/{table}', [TablesController::class, 'show']);
Route::put('/tables/{table}', [TablesController::class, 'update']);
Route::delete('/tables/{table}', [TablesController::class, 'destroy']);
