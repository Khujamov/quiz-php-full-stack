<?php

use Illuminate\Database\Seeder;
use App\Question;
class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Question::truncate();

        $faker = \Faker\Factory::create();

        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 20; $i++) {
            Question::create([
                'text' => $faker->sentence,
                'correctAnswer' => $faker->sentence,
                'wrongAnswer1' => $faker->sentence,
                'wrongAnswer2' => $faker->sentence,
                'wrongAnswer3' => $faker->sentence,
            ]);
        }
    }
}
