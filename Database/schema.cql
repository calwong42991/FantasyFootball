DROP KEYSPACE IF EXISTS fantasy_football;

CREATE KEYSPACE IF NOT EXISTS fantasy_football
WITH REPLICATION = {
  'class': 'SimpleStrategy', 
  'replication_factor': 3
};

USE fantasy_football;

CREATE TABLE IF NOT EXISTS player_fantasy_stats (
  id UUID,
  player_name TEXT,
  player_pos TEXT,
  player_team TEXT,
  player_photo TEXT,
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
  PRIMARY KEY (id)
);