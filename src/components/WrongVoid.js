import {Platform} from 'react-native';
import RNFS from 'react-native-fs';

const path = Platform.select({
  android: '${path}',
  ios: RNFS.MainBundlePath + '/files/',
});
export const WrongVoid = [
  (track1 = {
    url: `${path}uhoh.mp3`, // Load media from the file system
    title: 'uhoh',
    artist: 'eFlashApps',
    // Load artwork from the file system: //tryagain.mp3'
    artwork: `${path}uhoh.mp3`,
    duration: null,
  }),
  (track = {
    url: `${path}tryagain.mp3`, // Load media from the file system
    title: 'tryagain',
    artist: 'eFlashApps',
    // Load artwork from the file system: oopsie.mp3
    artwork: `${path}tryagain.mp3`,
    duration: null,
  }),
  // asset:/files
  (track3 = {
    url: `${path}oopsie.mp3`, // Load media from the file system
    title: 'oopsie',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: `${path}oopsie.mp3`,
    duration: null,
  }),
  (track4 = {
    url: `${path}youcandoit.mp3`, // Load media from the file system
    title: 'youcandoit',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: `${path}youcandoit.mp3`,
    duration: null,
  }),
];
export const RightVOid = [
  (track1 = {
    url: `${path}excellent.mp3`, // Load media from the file system
    title: 'excellent',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: `${path}excellent.mp3`,
    duration: null,
  }),
  (track = {
    url: `${path}fantastic.mp3`,
    title: 'fantastic',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: '${path}fantastic.mp3',
    duration: null,
  }),
  (track3 = {
    url: `${path}goodanswer.mp3`,
    title: 'goodanswer',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: '${path}goodanswer.mp3',
    duration: null,
  }),
  (track4 = {
    url: `${path}youcandoit.mp3`, // Load media from the file system
    title: 'goodjob',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    //artwork: '${path}youcandoit.mp3',
    duration: null,
  }),
  (track5 = {
    url: `${path}great.mp3`, // Load media from the file system
    title: 'great',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: `${path}great.mp3`,
    duration: null,
  }),
  (track6 = {
    url: `${path}marvelous.mp3`, // Load media from the file system
    title: 'marvelous',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: '${path}marvelous.mp3',
    duration: null,
  }),
  (track7 = {
    url: `${path}sensational.mp3`, // Load media from the file system
    title: 'sensational',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: '${path}sensational.mp3',
    duration: null,
  }),
  (track8 = {
    url: `${path}spectacular.mp3`, // Load media from the file system
    title: 'spectacular',
    artist: 'eFlashApps',
    // Load artwork from the file system:
    artwork: '${path}spectacular.mp3',
    duration: null,
  }),
];
