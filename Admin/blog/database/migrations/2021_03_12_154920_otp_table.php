<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class OtpTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('otp_table',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('mobile');
            $table->string('otp');
            $table->string('created_timestamp');
            $table->string('created_date');
            $table->string('created_time');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
