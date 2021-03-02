<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactListController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\VisitorListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::get('/SendVisitorDetails',[VisitorListController::class,'SendVisitorDetails']);
Route::post('/SendContactDetails',[ContactListController::class,'SendContactDetails']);
Route::get('/SendSiteInfo',[SiteInfoController::class,'SendSiteInfo']);

Route::get('/SendCategoryDetails',[CategoryDetailsController::class,'SendCategoryDetails']);
