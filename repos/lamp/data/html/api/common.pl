#!/usr/bin/perl
package common;
use JSON::PP ();
use CGI ();

sub return_json {
    my $q     = 'CGI'->new;
    my $json  = 'JSON::PP'->new;
    my ($data) = @_;
    print $q->header("application/json");
    print $json->encode($data);
}