<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('antrean_reservasi', function (Blueprint $table) {
            $table->id('id_reservasi');
            $table->foreignId('id_pengguna')->constrained('pengguna', 'id_pengguna')->cascadeOnDelete();
            $table->foreignId('id_buku')->constrained('buku', 'id_buku')->cascadeOnDelete();
            $table->dateTime('tanggal_reservasi')->useCurrent();
            $table->enum('status', ['Menunggu', 'Tersedia', 'Selesai', 'Batal'])->default('Menunggu');
            $table->timestamps();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('antrean_reservasi');
    }
};
