<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class AuthController extends Controller
{
    // Enregistre un nouvel utilisateur
    public function register(Request $request)
    {
        Log::info('Register Request: ', $request->all());

        $validator = Validator::make($request->all(), [
            'user_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            Log::error('Validation Errors: ', $validator->errors()->toArray());
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'user_name' => $request->user_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully'], 201);
    }
        // Authentifie un utilisateur
        public function login(Request $request)
        {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);
    
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
    
            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json(['message' => 'Invalid login details'], 401);
            }
    
            $user = User::where('email', $request->email)->firstOrFail();
            $token = $user->createToken('auth_token')->plainTextToken;
    
            return response()->json(['message' => 'Login successful', 'token' => $token, 'user' => $user]);
        }
    
    

    // Déconnecte un utilisateur
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout successful']);
    }
}
