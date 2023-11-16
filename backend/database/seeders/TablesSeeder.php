<?php

namespace Database\Seeders;

use App\Entity\Tables;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\Tables::factory(20)->create();
    }
}
