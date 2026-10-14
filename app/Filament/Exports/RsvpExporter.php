<?php

namespace App\Filament\Exports;

use App\Models\Rsvp;
use Filament\Actions\Exports\ExportColumn;
use Filament\Actions\Exports\Exporter;
use Filament\Actions\Exports\Models\Export;
use Illuminate\Support\Number;

class RsvpExporter extends Exporter
{
    protected static ?string $model = Rsvp::class;

    public static function getColumns(): array
    {
        return [
            ExportColumn::make('id')
                ->label('ID'),
            ExportColumn::make('name'),
            ExportColumn::make('phone'),
            ExportColumn::make('email'),
            ExportColumn::make('attending'),
            ExportColumn::make('has_plus_one'),
            ExportColumn::make('plus_one_name'),
            ExportColumn::make('plus_one_phone'),
            ExportColumn::make('plus_one_email'),
            ExportColumn::make('dietary_preference'),
            ExportColumn::make('plus_one_dietary_preference'),
            ExportColumn::make('message'),
            ExportColumn::make('created_at'),
            ExportColumn::make('updated_at'),
        ];
    }

    public static function getCompletedNotificationBody(Export $export): string
    {
        $body = 'Your rsvp export has completed and ' . Number::format($export->successful_rows) . ' ' . str('row')->plural($export->successful_rows) . ' exported.';

        if ($failedRowsCount = $export->getFailedRowsCount()) {
            $body .= ' ' . Number::format($failedRowsCount) . ' ' . str('row')->plural($failedRowsCount) . ' failed to export.';
        }

        return $body;
    }
}
