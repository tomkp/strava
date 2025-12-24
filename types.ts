/**
 * Strava API Type Definitions
 * Complete type definitions for Strava API responses
 */

// ============================================================================
// OAuth Types
// ============================================================================

export interface StravaTokenResponse {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: StravaAthlete;
}

export interface StravaTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

// ============================================================================
// Athlete Types
// ============================================================================

export interface StravaAthlete {
  id: number;
  username?: string | null;
  resource_state?: number;
  firstname?: string;
  lastname?: string;
  bio?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  sex?: 'M' | 'F' | null;
  premium?: boolean;
  summit?: boolean;
  created_at?: string;
  updated_at?: string;
  badge_type_id?: number;
  weight?: number;
  profile_medium?: string;
  profile?: string;
  friend?: string | null;
  follower?: string | null;
}

export interface StravaAthleteStats {
  biggest_ride_distance?: number;
  biggest_climb_elevation_gain?: number;
  recent_ride_totals?: StravaActivityTotals;
  recent_run_totals?: StravaActivityTotals;
  recent_swim_totals?: StravaActivityTotals;
  ytd_ride_totals?: StravaActivityTotals;
  ytd_run_totals?: StravaActivityTotals;
  ytd_swim_totals?: StravaActivityTotals;
  all_ride_totals?: StravaActivityTotals;
  all_run_totals?: StravaActivityTotals;
  all_swim_totals?: StravaActivityTotals;
}

export interface StravaActivityTotals {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
  achievement_count?: number;
}

// ============================================================================
// Activity Types
// ============================================================================

export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type?: string;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset?: number;
  location_city?: string;
  location_state?: string;
  location_country?: string;
  achievement_count?: number;
  kudos_count?: number;
  comment_count?: number;
  athlete_count?: number;
  photo_count?: number;
  trainer?: boolean;
  commute?: boolean;
  manual?: boolean;
  private?: boolean;
  visibility?: string;
  flagged?: boolean;
  gear_id?: string;
  start_latlng?: [number, number];
  end_latlng?: [number, number];
  average_speed: number;
  max_speed: number;
  average_heartrate?: number;
  max_heartrate?: number;
  elev_high?: number;
  elev_low?: number;
  average_cadence?: number;
  average_temp?: number;
  has_heartrate: boolean;
  heartrate_opt_out?: boolean;
  display_hide_heartrate_option?: boolean;
  upload_id?: number;
  upload_id_str?: string;
  external_id?: string;
  from_accepted_tag?: boolean;
  pr_count?: number;
  total_photo_count?: number;
  has_kudoed?: boolean;
  map?: StravaMap;
  resource_state?: number;
  athlete?: {
    id: number;
    resource_state?: number;
  };
  // Detailed activity fields
  calories?: number;
  description?: string;
  photos?: {
    primary?: {
      id?: number;
      unique_id?: string;
      urls?: Record<string, string>;
      source?: number;
    };
    count?: number;
  };
  gear?: {
    id: string;
    primary: boolean;
    name: string;
    distance: number;
  };
  laps?: StravaLap[];
  splits_metric?: StravaSplit[];
  splits_standard?: StravaSplit[];
  best_efforts?: StravaBestEffort[];
  segment_efforts?: StravaSegmentEffort[];
}

export interface StravaMap {
  id: string;
  summary_polyline?: string;
  polyline?: string;
  resource_state?: number;
}

export interface StravaLap {
  id: number;
  name: string;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  average_speed: number;
  max_speed: number;
  average_heartrate?: number;
  max_heartrate?: number;
  lap_index: number;
  split: number;
  start_index: number;
  end_index: number;
  total_elevation_gain: number;
  average_cadence?: number;
  device_watts?: boolean;
  average_watts?: number;
  pace_zone?: number;
}

export interface StravaSplit {
  distance: number;
  elapsed_time: number;
  elevation_difference: number;
  moving_time: number;
  split: number;
  average_speed: number;
  average_heartrate?: number;
  pace_zone?: number;
}

export interface StravaBestEffort {
  id: number;
  name: string;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  start_index: number;
  end_index: number;
  pr_rank?: number | null;
  achievements?: StravaAchievement[];
}

export interface StravaAchievement {
  type_id: number;
  type: string;
  rank: number;
}

// ============================================================================
// Segment Types
// ============================================================================

export interface StravaSegmentEffort {
  id: number;
  name: string;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  start_index: number;
  end_index: number;
  average_heartrate?: number;
  max_heartrate?: number;
  average_cadence?: number;
  device_watts?: boolean;
  average_watts?: number;
  segment: StravaSegment;
  kom_rank?: number | null;
  pr_rank?: number | null;
  achievements?: StravaAchievement[];
  hidden: boolean;
}

export interface StravaSegment {
  id: number;
  name: string;
  activity_type: string;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: [number, number];
  end_latlng: [number, number];
  climb_category: number;
  city: string;
  state: string;
  country: string;
  private: boolean;
  hazardous: boolean;
  starred: boolean;
}

// ============================================================================
// Zones Types
// ============================================================================

export interface StravaZone {
  min: number;
  max: number;
}

export interface StravaHeartRateZones {
  custom_zones: boolean;
  zones: StravaZone[];
}

export interface StravaPowerZones {
  zones: StravaZone[];
}

export interface StravaActivityZones {
  heart_rate?: StravaHeartRateZones;
  power?: StravaPowerZones;
}

// ============================================================================
// Streams Types
// ============================================================================

export type StravaStreamType =
  | 'time'
  | 'distance'
  | 'latlng'
  | 'altitude'
  | 'velocity_smooth'
  | 'heartrate'
  | 'cadence'
  | 'watts'
  | 'temp'
  | 'moving'
  | 'grade_smooth';

export interface StravaStream {
  type: StravaStreamType;
  data: number[] | [number, number][];
  series_type: 'time' | 'distance';
  original_size: number;
  resolution: string;
}

export type StravaStreams = {
  [K in StravaStreamType]?: StravaStream;
};

// ============================================================================
// Request Options
// ============================================================================

export interface GetActivitiesOptions {
  /** Epoch timestamp to filter activities that occurred before */
  before?: number;
  /** Epoch timestamp to filter activities that occurred after */
  after?: number;
  /** Page number (default: 1) */
  page?: number;
  /** Number of items per page (default: 30, max: 200) */
  per_page?: number;
}

export interface GetActivityStreamsOptions {
  /** List of stream types to retrieve */
  keys?: StravaStreamType[];
  /** Whether to return streams keyed by type (default: true) */
  key_by_type?: boolean;
}

// ============================================================================
// Rate Limit Info
// ============================================================================

export interface StravaRateLimitInfo {
  /** Current 15-minute usage (requests, daily limit) */
  shortTerm: {
    usage: number;
    limit: number;
  };
  /** Current daily usage (requests, daily limit) */
  longTerm: {
    usage: number;
    limit: number;
  };
}

// ============================================================================
// Client Configuration
// ============================================================================

export interface StravaClientConfig {
  /** Strava OAuth client ID */
  clientId: string;
  /** Strava OAuth client secret */
  clientSecret: string;
  /** OAuth redirect URI */
  redirectUri?: string;
  /** Auto-refresh tokens when they expire (default: true) */
  autoRefresh?: boolean;
  /** Buffer time in seconds before expiry to trigger refresh (default: 600 = 10 minutes) */
  refreshBuffer?: number;
  /** Optional callback when tokens are refreshed */
  onTokenRefresh?: (tokens: StravaTokens) => void | Promise<void>;
}
