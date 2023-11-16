<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TablesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    // public function toArray(Request $request): array
    // {
    //     return parent::toArray($request);
    // }
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'number_table' => $this->number_table,
            'capacity_table' => $this->capacity_table,
            'status_table' => $this->status_table,
        ];
    }
}
