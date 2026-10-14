<?php

namespace App\Filament\Resources\Rsvps\Tables;

use App\Filament\Exports\RsvpExporter;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ExportAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RsvpsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('phone')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email address')
                    ->searchable(),
                TextColumn::make('attending')
                    ->searchable(),
                IconColumn::make('has_plus_one')
                    ->boolean(),
                TextColumn::make('plus_one_name')
                    ->searchable(),
                TextColumn::make('plus_one_phone')
                    ->searchable(),
                TextColumn::make('plus_one_email')
                    ->searchable(),
                TextColumn::make('dietary_preference')
                    ->searchable(),
                TextColumn::make('plus_one_dietary_preference')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])->headerActions([
                ExportAction::make()->exporter(RsvpExporter::class)
            ]);
    }
}
