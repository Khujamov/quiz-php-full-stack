<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;

class QuestionController extends Controller
{
    public function index()
    {
        return Question::all();
    }

    public function show($id)
    {
        $question = Question::where('quizId',$id)->get();
        return $question;
    }

    public function store(Request $request)
    {
        $question = Question::create($request->all());
        return response()->json($question, 201);
    }

    public function update($id,Request $request)
    {
        $question = Question::findOrFail($id);
        $question->update($request->all());
        return response()->json($question, 200);
    }

    public function delete($id)
    {
        Question::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
