<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survay extends Model
{
  use HasFactory;
  protected $fillable = ["title","description","expire_data","user_id","image","status","created_at","updated_at"];
}
