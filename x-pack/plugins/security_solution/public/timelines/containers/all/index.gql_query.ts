/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import gql from 'graphql-tag';

export const allTimelinesQuery = gql`
  query GetAllTimeline(
    $pageInfo: PageInfoTimeline!
    $search: String
    $sort: SortTimeline
    $onlyUserFavorite: Boolean
    $timelineType: TimelineType
    $status: TimelineStatus
  ) {
    getAllTimeline(
      pageInfo: $pageInfo
      search: $search
      sort: $sort
      onlyUserFavorite: $onlyUserFavorite
      timelineType: $timelineType
      status: $status
    ) {
      totalCount
      defaultTimelineCount
      templateTimelineCount
      elasticTemplateTimelineCount
      customTemplateTimelineCount
      favoriteCount
      timeline {
        savedObjectId
        description
        favorite {
          fullName
          userName
          favoriteDate
        }
        eventIdToNoteIds {
          eventId
          note
          timelineId
          noteId
          created
          createdBy
          timelineVersion
          updated
          updatedBy
          version
        }
        excludedRowRendererIds
        notes {
          eventId
          note
          timelineId
          timelineVersion
          noteId
          created
          createdBy
          updated
          updatedBy
          version
        }
        noteIds
        pinnedEventIds
        status
        title
        timelineType
        templateTimelineId
        templateTimelineVersion
        created
        createdBy
        updated
        updatedBy
        version
      }
    }
  }
`;
