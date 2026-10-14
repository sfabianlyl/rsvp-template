<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rsvp extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'attending',
        'has_plus_one',
        'plus_one_name',
        'plus_one_phone',
        'plus_one_email',
        'dietary_preference',
        'message',
    ];
}
