<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('history_read', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->bigInteger('id_user')->unsigned();
			$table->bigInteger('id_novel')->unsigned();
			$table->timestamps();
			// Foreign Keys
			$table->foreign('id_novel')->references('id')->on('novel');
			$table->foreign('id_user')->references('id')->on('users');
		});
		// Remove updated_at
		Schema::table('history_read', function (Blueprint $table) {
			$table->dropColumn('updated_at');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('history_read');
	}
};
