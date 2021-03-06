<?php


use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactListController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\VisitorListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::get('/SendVisitorDetails',[VisitorListController::class,'SendVisitorDetails']);
Route::post('/SendContactDetails',[ContactListController::class,'SendContactDetails']);
Route::get('/SendSiteInfo',[SiteInfoController::class,'SendSiteInfo']);

Route::get('/SendCategoryDetails',[CategoryDetailsController::class,'SendCategoryDetails']);
Route::get('/ProductListByRemark/{remark}',[ProductListController::class,'ProductListByRemark']);
Route::get('/ProductListBySubCategory/{Category}/{SubCategory}',[ProductListController::class,'ProductListBySubCategory']);
Route::get('/ProductListByCategory/{Category}',[ProductListController::class,'ProductListByCategory']);
Route::get('/SendSliderInfo',[SliderController::class,'SendSliderInfo']);


Route::get('/ProductDetails/{code}',[ProductDetailsController::class,'ProductDetails']);

Route::get('/NotificationHistory',[NotificationController::class,'NotificationHistory']);

Route::get('/ProductBySearch/{key}',[ProductListController::class,'ProductBySearch']);

Route::get('/CreateOTP/{mobile}',[LoginController::class,'CreateOTP']);
