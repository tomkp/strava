/**
 * Strava API Client
 * A complete, reusable TypeScript client for the Strava API v3
 *
 * @packageDocumentation
 */

// Main client
export { StravaClient } from './client';

// Type definitions
export type {
  // OAuth
  StravaTokenResponse,
  StravaTokens,
  // Athlete
  StravaAthlete,
  StravaAthleteStats,
  StravaActivityTotals,
  // Activities
  StravaActivity,
  StravaMap,
  StravaLap,
  StravaSplit,
  StravaBestEffort,
  StravaAchievement,
  // Segments
  StravaSegmentEffort,
  StravaSegment,
  // Zones
  StravaZone,
  StravaHeartRateZones,
  StravaPowerZones,
  StravaActivityZones,
  // Streams
  StravaStreamType,
  StravaStream,
  StravaStreams,
  // Options
  GetActivitiesOptions,
  GetActivityStreamsOptions,
  StravaRateLimitInfo,
  StravaClientConfig,
} from './types';

// Error classes
export {
  StravaError,
  StravaAuthenticationError,
  StravaAuthorizationError,
  StravaNotFoundError,
  StravaRateLimitError,
  StravaTokenRefreshError,
  StravaValidationError,
  StravaNetworkError,
  StravaApiError,
  parseStravaError,
  isStravaErrorType,
} from './errors';
