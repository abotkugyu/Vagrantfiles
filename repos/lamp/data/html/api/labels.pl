#!/usr/bin/perl
require './common.pl';
use DBI;
use 5.20.0;

my $user = 'root';
my $password = 'root';
my $DSN="dbname=abot;host=mysql;port=3306;";
my $dbh = DBI->connect("DBI:mysql:$DSN", $user, $password);
my $sth = $dbh->prepare("show databases;");
my $rv  = $sth->rows;

my $json_data = {"success" => "login is successful"} ;

use JSON::PP ();
use CGI ();
return_json($json_data);

sub return_json {
    my $q     = 'CGI'->new;
    my $json  = 'JSON::PP'->new;
    my ($data) = @_;
    print $q->header("application/json");
    print $json->encode($data);
}
#my $self = shift;
#$self->render( text => "Entry ID is " );