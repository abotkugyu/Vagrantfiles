#!/usr/bin/perl
use Socket;
use strict;
use warnings;
sub ScoketServer {
  my $sock_receive;
  socket($sock_receive, PF_INET, SOCK_STREAM, getprotobyname( 'tcp' ));
  my $local_port = 9000;
  my $pack_addr = sockaddr_in($local_port, INADDR_ANY);
  bind($sock_receive, $pack_addr);
  listen($sock_receive, SOMAXCONN);
  my $sock_client;
  while (accept( $sock_client, $sock_receive )) {
    my $content;
    # クライアントからのデータの読み込み
    while (my $line = <$sock_client>) {
      $content .= $line;
    }
    # クライアントへのデータの書き込み
    print $sock_client "echo: $content";
    close $sock_client;
  }
}

&ScoketServer();
