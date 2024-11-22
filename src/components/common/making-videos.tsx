import HeroVideoDialog from '../ui/hero-video-dialog';

const videos = [
  {
    topText: 'Thailand',
    bottomText: 'Rush and Relax',
    videoSrc: 'https://www.youtube.com/embed/46KCgJBUUsA?si=GMJwNQrDlcF8qnMV',
    thumbnailSrc:
      'https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/40c6b0ea-b0ca-4f53-5df6-4343fbfbbd00/public',
    thumbnailAlt: 'Rush and Relax',
  },
  {
    topText: 'Diep Son',
    bottomText: 'Two sides of sea',
    videoSrc: 'https://www.youtube.com/embed/T3FagRLcJ54?si=2DIKK6KUHGlNIOWa',
    thumbnailSrc:
      'https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public',
    thumbnailAlt: 'Diep Son',
  },
  {
    topText: 'Buon Ma Thuot',
    bottomText: 'Into the Wild',
    videoSrc: 'https://www.youtube.com/embed/QupEcfMG-5k?si=grtAaOvrafn4TjHq',
    thumbnailSrc:
      'https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/7f30018f-3d6f-4d77-3e33-b1c093127200/public',
    thumbnailAlt: 'Into the Wild',
  },
];

export default function MakingVideos() {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-col gap-16 px-4 py-16'>
      {videos.map((video, index) => (
        <HeroVideoDialog
          className='block'
          key={'video-dialog-' + index}
          {...video}
        />
      ))}
    </div>
  );
}
