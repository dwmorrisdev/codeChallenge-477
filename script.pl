#!/usr/bin/perl

use DBI;
use strict;

my $driver = "SQLite";
my $database = "data.db";
my $dsn = "DBI:$driver:$database";
my $userid = "";
my $password = "";

#connect to db
my $dbh = DBI->connect($dsn);
print "Opened database successfully\n";

#select and print db to console
my $stmt = qq(SELECT * FROM users);
my $sth = $dbh->prepare( $stmt );
my $rv = $sth->execute() or die $DBI::errstr;
if($rv < 0){
  print $DBI::errstr;
}
while (my @row = $sth->fetchrow_array()){
  print "ID = ". $row[0] ."\n";
  print "FIRST_NAME = ". $row[1] ."\n";
  print "LAST_NAME = ". $row[2] ."\n";
  print "HOME = ". $row[3] ."\n";
  print "\n";
}
print "Operation completed successfully\n";

#disconnect from db
$dbh->disconnect();
