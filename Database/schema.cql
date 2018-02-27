DROP KEYSPACE IF EXISTS fantasy_football;

CREATE KEYSPACE IF NOT EXISTS fantasy_football
WITH REPLICATION = {
  'class': 'SimpleStrategy', 
  'replication_factor': 3
};

USE fantasy_football;

CREATE TABLE IF NOT EXISTS player_fantasy_stats (
  rank INT,
  player_name VARCHAR,
  player_pos VARCHAR,
  player_team VARCHAR,
  player_photo VARCHAR,
  passing_yrds FLOAT,
  passing_tds FLOAT,
  passing_int FLOAT,
  rushing_yrds FLOAT,
  rushing_tds FLOAT,
  recieving_yrds FLOAT,
  recieving_tds FLOAT,
  fumble_tds FLOAT,
  two_pts FLOAT,
  lost_fumble FLOAT,
  fantasy_pts FLOAT,
  PRIMARY KEY (rank)
);

CREATE TABLE IF NOT EXISTS kicker_fantasy_stats (
  rank INT,
  player_name VARCHAR,
  player_pos VARCHAR, 
  player_team VARCHAR,
  player_photo VARCHAR,
  pat_made INT,
  nineteen INT,
  two_nine INT,
  three_nine INT,
  four_nine INT,
  five_plus INT,
  fantasy_pts FLOAT,
  PRIMARY KEY (rank)
);

CREATE TABLE IF NOT EXISTS dst_fantasy_stats (
  rank INT,
  team VARCHAR,
  team_pos VARCHAR, 
  team_photo VARCHAR,
  sack INT,
  interception INT,
  fumble INT,
  safety INT,
  TD INT,
  def_two_point_ret INT,
  return_td INT,
  points_allowed INT,
  fantasy_pts FLOAT,
  PRIMARY KEY (rank)
);