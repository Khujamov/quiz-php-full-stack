<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;
use JWTAuth;
class QuizController extends Controller
{
    //
    public function all()
    {
        return Quiz::all();
    }

    public function index()
    {
        $payload = JWTAuth::parseToken()->getPayload();
        // then either of
        $userId = $payload->get('sub');
        return Quiz::where('userId', $userId)->get();
    }

    public function show($id)
    {
        $quiz = Quiz::findOrFail($id);
        return $quiz;
    }

    public function store(Request $request)
    {
        $payload = JWTAuth::parseToken()->getPayload();
        // then either of
        $userId = $payload->get('sub');
        $quiz = Quiz::create([
          'title' =>  $request->get('title'),
          'userId' => $userId
        ]);
        return response()->json($quiz, 201);
    }

    public function update($id,Request $request)
    {
        $quiz = Quiz::findOrFail($id);
        $quiz->update($request->all());
        return response()->json($quiz, 200);
    }

    public function delete($id)
    {
        Quiz::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
