<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::factory()->create(['email' => 'admin@admin.com']);
        $admin->roles()->attach(Role::where('name', 'Administrator')->value('id'));
 
        $editor = User::factory()->create(['email' => 'editor@edit.com']);
        $editor->roles()->attach(Role::where('name', 'Editor')->value('id'));
    }
}
