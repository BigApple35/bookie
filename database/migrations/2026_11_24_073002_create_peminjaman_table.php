<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('peminjaman', function (Blueprint $table) {
            $table->id('id_peminjaman');
            $table->foreignId('id_pengguna')->constrained('pengguna', 'id_pengguna')->restrictOnDelete();
            $table->foreignId('id_buku')->constrained('buku', 'id_buku')->restrictOnDelete();
            $table->date('tanggal_pinjam');
            $table->date('tanggal_kembali');
            $table->date('tanggal_dikembalikan')->nullable();
            $table->integer('sisa_kuota_perpanjang')->default(1);
            $table->enum('status', ['Berjalan', 'Selesai'])->default('Berjalan');
            $table->timestamps();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('peminjaman');
    }
};
