import React, { lazy } from 'react';
import RoutePath from './path/publicPath';

/*****Public pages******/
const Index = lazy(
  () => import('pages/Public/index'),
);

const VideoAudioCalling = lazy(
  () => import('pages/Public/VideoAudioCalling'),
);

const InClass = lazy(
  () => import('pages/Public/InClass'),
);

const NotFound = lazy(
  () => import('pages/Public/NotFound'),
);

const publicRoutes = [
  { path: RoutePath.INDEX, component: <Index /> },
  { path: RoutePath.VIDEO_AUDIO_CALLING, component: <VideoAudioCalling /> },
  { path: RoutePath.IN_CLASS, component: <InClass /> },
  { path: RoutePath.NOT_FOUND, component: <NotFound /> },
];

export default publicRoutes;
