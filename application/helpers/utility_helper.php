<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('asset_url()'))
{
    function asset_url()
    {
        return base_url().'assets/';
    }
    function upload_url(){
        return base_url().'uploads/';
    }
    function calcAge($birthday)
    {
        $today = date('Y-1-1');
        list($year, $month, $day) = explode('-', $today);

        $arrBirth = date_parse($birthday);

        return $arrBirth['year'] == 0 ? '~' : $year - $arrBirth['year'];
    }
}