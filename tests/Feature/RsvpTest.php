<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RsvpTest extends TestCase
{
    use RefreshDatabase;

    public function test_rsvp_page_can_be_rendered()
    {
        $response = $this->get('/rsvp');

        $response->assertStatus(200);
    }

    public function test_user_can_submit_rsvp()
    {
        $response = $this->post('/rsvp', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'attending' => 'yes',
            'guests' => 2,
            'dietary' => 'None',
            'message' => 'Congrats!',
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect();
        
        $this->assertDatabaseHas('rsvps', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'attending' => 'yes',
        ]);
    }

    public function test_rsvp_validation()
    {
        $response = $this->post('/rsvp', [
            'name' => '',
        ]);

        $response->assertSessionHasErrors('name');
    }
}
