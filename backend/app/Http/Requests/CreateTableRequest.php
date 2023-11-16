<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTableRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'number_table' => 'required|integer',
            'capacity_table' => 'required|integer',
            'status_table' => 'required|string',
        ];
    }
}
