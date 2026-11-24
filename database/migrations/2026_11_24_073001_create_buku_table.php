<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('buku', function (Blueprint $table) {
            $table->id('id_buku');
            $table->string('barcode', 50)->unique();
            $table->string('isbn', 20)->unique()->nullable();
            $table->string('judul', 255);
            $table->string('penulis', 150);
            $table->string('penerbit', 150)->nullable();
            $table->year('tahun_terbit')->nullable();
            $table->string('kategori', 50);
            $table->text('sinopsis')->nullable();
            $table->string('letak_rak', 20);
            $table->integer('jumlah_stok')->default(1);
            $table->enum('status_ketersediaan', ['Tersedia', 'Dipinjam'])->default('Tersedia');
            $table->timestamps();

            $table->index('judul');
            $table->index('penulis');
            $table->index('kategori');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('buku');
    }
};
