<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTableRequest;
use App\Http\Requests\UpdateTableRequest;
use App\Http\Resources\TablesResource;
use App\Models\Tables as TablesModel;
use Illuminate\Http\Request;

class Tables extends Controller
{
    public function index()
    {
        $tables = TablesModel::all();
        return response()->json(['tables' => TablesResource::collection($tables)], 200);
    }

    public function store(CreateTableRequest $request)
    {
        $table = TablesModel::create($request->validated());
        return response()->json(['table' => new TablesResource($table)], 201);
    }

    public function show(TablesModel $table)
    {
        return response()->json(['table' => new TablesResource($table)], 200);
    }

    public function update(UpdateTableRequest $request, TablesModel $table)
    {
        $table->update($request->validated());
        return response()->json(['table' => new TablesResource($table)], 200);
    }

    public function destroy(TablesModel $table)
    {
        $table->delete();
        return response()->json(null, 204);
    }


}
