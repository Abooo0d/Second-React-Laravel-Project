<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
  public function signup(SignUpRequest $request){
    /** @var User $user */
    $data = $request->validated();
    $user = User::create([
      'name' => $data["name"],
      'email' => $data["email"],
      "password" => bcrypt($data["password"])
    ]);
    $token = $user->createToken("main")->plainTextToken;
    return([
      'user' => $user,
      "token" => $token
    ]);
  }
  public function login(LoginRequest $request){
    $credentials = $request->validated();
    $remember = $credentials["remember"] ?? false;
    unset($credentials["remember"]);
    if(!Auth::attempt($credentials,$remember)){
      return response([
        "error" => "The Provided Credentials Are Not Correct"
      ],422);
    }
    /** @var User $user */
    $user = Auth::user();
    $token =  $user->createToken('main')->plainTextToken;
    return response([
      "user" => $user,
      "token" => $token
    ]);
  }
  public function logout(Request $request){
    /** @var User $user  */
    $user = Auth::user();
    $user->currentAccessToken()->delete();
    return response([
      "success" => true
    ]);
  }
}
