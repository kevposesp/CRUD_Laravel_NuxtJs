<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tables>
 */
class TablesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'number_table' => $this->faker->unique()->numberBetween(100, 120),
            'capacity_table' => $this->faker->numberBetween(2, 8),
            'status_table' => $this->faker->randomElement(['available', 'occupied']),
        ];
    }
}
