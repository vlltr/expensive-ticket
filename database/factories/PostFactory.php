<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $categoryIDs = Category::pluck('id');

        return [
            'title' => $this->faker->text(20),
            'content' => $this->faker->paragraph(5),
            'category_id' => $categoryIDs->random(),
        ];
    }
}
