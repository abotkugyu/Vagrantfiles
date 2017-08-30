#!/usr/bin/perl
use Mojolicious::Lite;
use 5.20.0;
use experimental 'signatures';

get '/' => {template => 'index'};

app->start;
