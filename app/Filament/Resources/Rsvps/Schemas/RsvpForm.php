<?php

namespace App\Filament\Resources\Rsvps\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class RsvpForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('attending')
                    ->required(),
                Toggle::make('has_plus_one')
                    ->required(),
                TextInput::make('plus_one_name'),
                TextInput::make('plus_one_phone')
                    ->tel(),
                TextInput::make('plus_one_email')
                    ->email(),
                TextInput::make('dietary_preference'),
                TextInput::make('plus_one_dietary_preference'),
                Textarea::make('message')
                    ->columnSpanFull(),
            ]);
    }
}
