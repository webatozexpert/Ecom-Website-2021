<?php

use App\Http\Controllers\VisitorListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/SendVisitorDetails',[VisitorListController::class,'SendVisitorDetails']);
