<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTableRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'number_table' => 'integer',
            'capacity_table' => 'integer',
            'status_table' => 'string',
        ];
    }
}
