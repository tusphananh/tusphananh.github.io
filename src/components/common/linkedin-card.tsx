import GlassCard from '../ui/glass-card';
import PreviewItemDialog from '../ui/preview-item';
import DynamicImage from './dynamic-image';

const images = [
  'https://media.licdn.com/dms/image/v2/D5622AQFyv1KpGllnXw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725961341099?e=1735776000&v=beta&t=w291myeibSrnH3HOy0d1RvpUqMw69nKMDik7LpONpNk',
  'https://media.licdn.com/dms/image/v2/D5622AQEJUkgEihupaA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725961331864?e=1735776000&v=beta&t=IOx2JG80hs-53BL5ieCkecDxv0jmwKekPsPxmHW_gUQ',
  'https://media.licdn.com/dms/image/v2/D5622AQGaVdleKm7wwA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725961345210?e=1735776000&v=beta&t=sx5tGaCmztPdIjsOaFCuoK2UsmhGphIctrKrZtaAqyE',
  'https://media.licdn.com/dms/image/v2/D5622AQGuMB9HeVLsLA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725961346685?e=1735776000&v=beta&t=zezQ11TUQiIYkODV46xSuRg2IuVcGJlFDmabz_juyk0',
];

export default function LinkedInCard() {
  return (
    <div className='w-full px-4'>
      <GlassCard className='mx-auto max-w-screen-sm'>
        <div className='mb-4 flex w-fit items-center gap-4'>
          <DynamicImage
            src='https://media.licdn.com/dms/image/v2/D560BAQE2Ak-BqhS8EA/company-logo_100_100/company-logo_100_100/0/1720973326944/choiee_logo?e=1741219200&v=beta&t=wLIhVhZtuFR-6MLnEU6phPyDSOG-SYUKfTY-8fEpI58'
            width={60}
            height={60}
            alt='Choiee'
            className='mx-auto h-12 w-12'
            imageClassName='rounded-sm'
          />
          <span>
            <a
              target='_blank'
              className='font-semibold underline'
              href='https://choiee.com'
            >
              Choiee
            </a>
            <h3 className='text-sm text-white/40'>October 2024</h3>
          </span>
        </div>

        <p className='text-white/70'>🌟 Exciting Times at Choiee! 🌟</p>
        <p className='mb-2 text-white/70'>
          We are thrilled to introduce our product to the world and connect with
          the incredible talents in the startup ecosystem during UpYouth - Tech
          Startup Ecosystem&apos;s Demo Day.
        </p>

        <a
          href=' https://www.linkedin.com/posts/choiee_choiee-startup-demoday-activity-7239206586202644480-16-6'
          target='_blank'
          className='text-blue-500 hover:underline'
        >
          Read more
        </a>

        <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {images.map((image, index) => {
            return (
              <PreviewItemDialog
                key={'preview-dialog-' + index}
                trigger={
                  <DynamicImage
                    key={'trigger-' + index}
                    width={900}
                    height={900}
                    src={image}
                    alt={'Choiee Demo Day Preview' + index}
                    className='size-full overflow-hidden sm:max-h-72'
                    imageClassName='object-cover'
                  />
                }
              >
                <DynamicImage
                  key={'preview-' + index}
                  width={1920}
                  height={1080}
                  src={image}
                  alt={'Choiee Demo Day' + index}
                  className='m-auto max-h-full max-w-full overflow-hidden'
                  imageClassName='object-cover w-auto h-auto max-h-full max-w-full rounded-xl'
                />
              </PreviewItemDialog>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
