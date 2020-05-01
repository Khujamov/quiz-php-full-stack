<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['text', 'correctAnswer','wrongAnswer1','wrongAnswer2','wrongAnswer3','quizId'];
}
