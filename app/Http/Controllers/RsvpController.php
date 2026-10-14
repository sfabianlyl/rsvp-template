<?php

namespace App\Http\Controllers;

use App\Models\Rsvp;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RsvpController extends Controller
{
    public function index()
    {
        return Inertia::render('rsvp');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'attending' => 'required|in:yes,no',
            'has_plus_one' => 'required_if:attending,yes|boolean',
            'plus_one_name' => 'required_if:has_plus_one,true|nullable|string|max:255',
            'plus_one_phone' => 'required_if:has_plus_one,true|nullable|string|max:255',
            'plus_one_email' => 'required_if:has_plus_one,true|nullable|email|max:255',
            'dietary_preference' => 'required_if:attending,yes|in:halal,non-halal',
            'message' => 'required_if:attending,no|nullable|string',
        ]);

        $exists = Rsvp::where('name', $validated['name'])->exists();

        if ($exists) {
            return Inertia::render('rsvp', [
                'error_message' => "Oops! It seems you have submitted before. Please contact the bride or groom if you'd like to make any changes to your RSVP. <br></br><br></br>Alex - +1 (555) 012-3456<br></br>Jordan - +1 (555) 098-7654",
            ]);
        }

        Rsvp::create($validated);

        return Inertia::render('rsvp', [
            'success' => true,
            'attending' => $validated['attending']
        ]);
    }
}
