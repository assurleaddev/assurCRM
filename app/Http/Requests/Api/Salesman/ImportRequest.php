<?php

namespace App\Http\Requests\Api\Salesman;

use App\Http\Requests\Api\BaseRequest;

class ImportRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $rules = [
            'file'    => 'required',
        ];

        return $rules;
    }
}
