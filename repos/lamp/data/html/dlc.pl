#!/usr/bin/perl
use Mojolicious::Lite;
use DBI;
use 5.20.0;
use experimental 'signatures';

my $user = 'root';
my $password = 'root';
my $DSN="dbname=abot;host=mysql;port=3306;";
my $dbh = DBI->connect("DBI:mysql:$DSN", $user, $password);
my $sth = $dbh->prepare("show databases;");
my $rv  = $sth->rows;
my $debug = '';

if ($debug eq ``) {
  get '/' => {template => 'dlc'};
} else {
  get '/' => {json => {debug => $debug}};
}

app->start;
