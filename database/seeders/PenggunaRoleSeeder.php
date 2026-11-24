<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class PenggunaRoleSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            [
                'nama' => 'Admin Perpustakaan',
                'nomor_induk' => 'KPL001',
                'email' => 'kepala@bookie.local',
                'password' => Hash::make('password'),
                'role' => 'kepala_perpustakaan',
                'sisa_kuota' => 0,
                'status_denda' => false,
                'status_kepenggunaan' => 'Aktif',
            ],
            [
                'nama' => 'Pustakawan Utama',
                'nomor_induk' => 'PST001',
                'email' => 'pustakawan@bookie.local',
                'password' => Hash::make('password'),
                'role' => 'pustakawan',
                'sisa_kuota' => 0,
                'status_denda' => false,
                'status_kepenggunaan' => 'Aktif',
            ],
            [
                'nama' => 'Anggota Mahasiswa',
                'nomor_induk' => 'PGN001',
                'email' => 'mahasiswa@bookie.local',
                'password' => Hash::make('password'),
                'role' => 'pengguna',
                'sisa_kuota' => 3,
                'status_denda' => false,
                'status_kepenggunaan' => 'Aktif',
            ],
        ];

        foreach ($users as $user) {
            DB::table('pengguna')->updateOrInsert(
                ['email' => $user['email']],
                $user
            );
        }
    }
}
